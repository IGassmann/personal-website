---
title: How to Optimize the Performance (Core Web Vitals) of a Webflow Page
summary: 5 steps to quickly improve the performance of your pages.
publishedAt: '2021-07-07'
tags:
  - technology
  - web
  - performance
---

[Starting last month (June 2021)](https://developers.google.com/search/blog/2021/04/more-details-page-experience?hl=en#gradual-rollout),
your page’s [Core Web Vitals](https://web.dev/vitals/) will be taken into account by Google Search
ranking. That means that if you have bad performance results your page might be ranked lower on
Google results. You can check how your pages perform on
[Google Search Console](https://search.google.com/search-console/core-web-vitals/summary).

If you’re using Webflow, it’s not very clear what are the most effective changes you can bring to
improve the performance of your website. That’s why I compiled a list of what I believe are the most
impactful improvements for most Webflow websites.

# 1. Use Image Elements Over Background Images

Image elements have better optimization capabilities than background images. For getting the best
results, you will want to replace all
[background images](https://university.webflow.com/lesson/background-styles-overview#background-image)
for [image elements](https://university.webflow.com/lesson/image). In some cases, you might need to
use the [object-fit property](https://webflow.com/feature/object-fit-support) to reproduce the
background behavior.

# 2. Resize and Compress Images

Image size is often what slows down the load time the most. That’s why it’s important to compress
and correctly size them.

There are many tools to resize and compress images, however, none of them were good at optimizing
images just by handing an URL of a page. That’s why I built a CLI tool named
[web-img-optimizer](https://github.com/IGassmann/web-img-optimizer) that makes it easy and that
works with PNG, JPEG, SVG, and GIF files. You just need to pass the URL of a page you want to
optimize and it will download, resize and compress all images that are loaded by image elements.

```bash
wio optimize https://webflow.com/
```

Then you just need to upload the new images into your assets and
[replace the images](https://university.webflow.com/lesson/image#replace-images) with the optimized
ones.

# 3. Preconnect to assets’ origin

Webflow serves uploaded assets such as images and fonts from the domain _assets.website-files.com_.
For loading the assets, the browser needs to make an extra connection to that domain. A
[preconnect tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preconnect) informs
the browser that your page intends to establish a connection to another origin, and that you'd like
the process to start as soon as possible.

Improve the page load speed by adding the following to the top of the
[head tag in your project’s settings](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags#head-code).

```html
<link rel="preconnect" href="https://assets.website-files.com/" />
```

Further reading: [Preconnect to required origins ](https://web.dev/uses-rel-preconnect/)

# 4. Preload LCP Image

Preload allows you to inform the browser about critical resources you want to load as soon as
possible. Preload can be a **game-changer** for improving your page speed.

If the [largest visible element within the viewport (LCP)](https://web.dev/lcp/) is an image, you
can preload it by adding a
[preload tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) to your page
such as the one below.

```html
<link
  rel="preload"
  as="image"
  href="https://assets.website-files.com/...hero.png"
  imagesrcset="https://assets.website-files.com/...hero-p-800.png 800w, https://assets.website-files.com/...hero.png 1400w"
  imagesizes="(max-width: 479px) 100vw, (max-width: 767px) 100, (max-width: 991px) 600px, 55vw"
/>
```

[web-img-optimizer](https://github.com/IGassmann/web-img-optimizer) can automatically identify the
[LCP](https://web.dev/lcp/) image of a page and generate the
[preload tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) that you should
add to the top of the
[head tag in your page’s settings](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags#inside-%3C-head-%3E-tag).

```bash
wio preload https://webflow.com/
```

# 5. Lazy Load Images

Lazy loading is a technique for loading images when they are needed rather than all at once. This
can considerably improve your loading speed by deferring the loading of off-screen images.

[Webflow lazy load new images by default](https://webflow.com/feature/new-images-set-to-lazy-load-by-default),
but you might still need to update older images. You can set your images to lazy load by updating
the “Load” setting on the
[image settings pane](https://university.webflow.com/lesson/image#edit-image-settings).

You also need to declare the image elements’ width and height, otherwise, lazy loading might not
work properly.

The issue is that before the images are loaded, their height on the page is unknown. The browser
needs to download the image, observe its aspect ratio, and calculate its height. Before this, all
the images have a height of 1px. Since all images have a height of 1px, they are all considered as
"within the viewport" and are immediately loaded.

To counter that, you need to set the images’ width and height values to the dimensions of the
uploaded asset on your
[image elements’ settings](https://university.webflow.com/lesson/image#edit-image-settings).

It’s also important that you have either height or width set explicitly as **Auto** in your
[image’s style settings](https://university.webflow.com/lesson/style-panel-overview) so that the
image resizes without breaking its aspect ratio.

# Further Optimizations

- Remove unused
  [styles](https://university.webflow.com/lesson/style-manager#deleting-all-unused-styles-in-the-style-manager)
  and [interactions](https://webflow.com/feature/clean-up-unused-interactions)
- Optimize fonts
  - [Use custom fonts](https://university.webflow.com/lesson/custom-fonts) over Google or Adobe
    fonts.
  - Use a [variable font](https://web.dev/variable-fonts/)
- Optimize third-party scripts
  - Audit and remove unused scripts
  - Migrate scripts to Segment when available as a
    [cloud-mode destination](https://segment.com/docs/connections/destinations/#connection-modes)
- Remove unused [pages](https://university.webflow.com/lesson/pages-panel#deleting-pages) and
  [symbols](https://university.webflow.com/lesson/symbols#delete-a-symbol)

If there’s enough demand for the following optimizations, I will post a new blog post covering them.
Tweet me [@i_gassmann](https://twitter.com/I_Gassmann) to let me know if you want to see me cover
these topics.
