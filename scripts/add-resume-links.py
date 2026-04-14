"""Post-process the resume PDF for web display.

- Adds hyperlinks covering full experience entries and project cards
- Downscales oversized images to 2x render size (retina-ready)
- Strips metadata
- Saves with garbage collection and deflation
"""

import os
import fitz

PDF_PATH = "public/resume.pdf"

# Target DPI multiplier: 2x render size for retina displays
RETINA_FACTOR = 2
# JPEG quality for photo/screenshot compression
JPEG_QUALITY = 85
# Don't bother resizing images smaller than this threshold (in pixels)
MIN_NATIVE_SIZE = 64

LEFT = 24.0
RIGHT = 571.0
COL_MID = 280.0

PAGE_0_EXPERIENCE = [
    ("LiveStore", "https://livestore.dev/",
     fitz.Rect(LEFT, 463, RIGHT, 555)),
    ("Inngest", "https://www.inngest.com/",
     fitz.Rect(LEFT, 563, RIGHT, 639)),
    ("Synthesis", "https://www.synthesis.com/",
     fitz.Rect(LEFT, 647, RIGHT, 723)),
    ("Odeon", "https://www.linkedin.com/in/igassmann/details/projects/",
     fitz.Rect(LEFT, 731, RIGHT, 818)),
]

PAGE_1_PROJECTS = [
    ("Inngest | Web App", "https://github.com/inngest/inngest",
     fitz.Rect(LEFT, 517, COL_MID, 640)),
    ("Odeon | Video Platofrm", "https://www.linkedin.com/in/igassmann/details/projects/",
     fitz.Rect(COL_MID, 517, RIGHT, 640)),
    ("Covalent | Web App", "https://www.linkedin.com/in/igassmann/details/projects/",
     fitz.Rect(LEFT, 650, COL_MID, 790)),
    ("LiveStore | OSS Library", "https://livestore.dev/",
     fitz.Rect(COL_MID, 650, RIGHT, 790)),
]


def compress_images(doc):
    """Downscale oversized images to 2x their render size."""
    total_saved = 0
    for page_num, page in enumerate(doc):
        images = page.get_images(full=True)
        for img in images:
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)

            # Skip tiny images (icons that are already small)
            if pix.width <= MIN_NATIVE_SIZE and pix.height <= MIN_NATIVE_SIZE:
                pix = None
                continue

            rects = page.get_image_rects(xref)
            if not rects:
                pix = None
                continue

            rect = rects[0]
            # Target size: render size in pixels at 96dpi * retina factor
            target_w = int(rect.width * 96 / 72 * RETINA_FACTOR)
            target_h = int(rect.height * 96 / 72 * RETINA_FACTOR)

            if target_w <= 0 or target_h <= 0:
                pix = None
                continue

            # Only downscale if native is significantly larger than target
            if pix.width <= target_w * 1.2 and pix.height <= target_h * 1.2:
                pix = None
                continue

            old_size = len(pix.tobytes("png"))

            # Convert to RGB if needed (drop alpha for JPEG)
            if pix.alpha:
                pix = fitz.Pixmap(fitz.csRGB, pix, False)
            elif pix.colorspace != fitz.csRGB:
                pix = fitz.Pixmap(fitz.csRGB, pix)

            # Resize to target dimensions
            resized = pix.rescale(target_w, target_h) if hasattr(pix, 'rescale') else fitz.Pixmap(pix, target_w, target_h, None)

            new_size = len(resized.tobytes("png"))
            saved = old_size - new_size
            total_saved += saved

            page.replace_image(xref, pixmap=resized)
            print(f"  Page {page_num} xref={xref}: {pix.width}x{pix.height} -> {target_w}x{target_h} (saved ~{saved // 1024}KB)")

            pix = None
            resized = None

    print(f"  Total image savings: ~{total_saved // 1024}KB (raw)")


def add_area_links(page, entries):
    for label, url, rect in entries:
        link = {"kind": fitz.LINK_URI, "from": rect, "uri": url}
        page.insert_link(link)
        print(f"  Added link: '{label}' -> {url}")


def main():
    doc = fitz.open(PDF_PATH)
    original_size = os.path.getsize(PDF_PATH)

    print("Compressing images...")
    compress_images(doc)

    print("\nStripping metadata...")
    doc.set_metadata({})
    print("  Done")

    print("\nPage 1 — Experience links:")
    add_area_links(doc[0], PAGE_0_EXPERIENCE)

    print("\nPage 2 — Project links:")
    add_area_links(doc[1], PAGE_1_PROJECTS)

    print("\nSaving...")
    tmp_path = PDF_PATH + ".tmp"
    doc.save(tmp_path, garbage=4, deflate=True)
    doc.close()
    os.replace(tmp_path, PDF_PATH)

    new_size = os.path.getsize(PDF_PATH)
    print(f"\n{original_size // 1024}KB -> {new_size // 1024}KB ({100 - new_size * 100 // original_size}% smaller)")
    print(f"Saved to {PDF_PATH}")


if __name__ == "__main__":
    main()
