"""Add hyperlinks to the resume PDF using PyMuPDF.

Links cover the full area of each experience entry and project card,
not just the title text.
"""

import os
import fitz

PDF_PATH = "public/resume.pdf"

LEFT = 24.0
RIGHT = 571.0
COL_MID = 280.0  # boundary between left and right project columns

# Page 0 — Experience section: full-area rectangles for each entry.
# Each tuple: (label, url, fitz.Rect(x0, y0, x1, y1))
# y ranges go from the title to just before the next entry.
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

# Page 1 — Project cards: title + screenshot area.
# Row 1: titles at y=517, images end ~y=656
# Row 2: titles at y=650, images end ~y=790
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


def add_area_links(page, entries):
    for label, url, rect in entries:
        link = {"kind": fitz.LINK_URI, "from": rect, "uri": url}
        page.insert_link(link)
        print(f"  Added link: '{label}' -> {url}")


def main():
    doc = fitz.open(PDF_PATH)

    print("Page 1 — Experience links:")
    add_area_links(doc[0], PAGE_0_EXPERIENCE)

    print("\nPage 2 — Project links:")
    add_area_links(doc[1], PAGE_1_PROJECTS)

    tmp_path = PDF_PATH + ".tmp"
    doc.save(tmp_path, garbage=4, deflate=True)
    doc.close()
    os.replace(tmp_path, PDF_PATH)
    print(f"\nSaved updated PDF to {PDF_PATH}")


if __name__ == "__main__":
    main()
