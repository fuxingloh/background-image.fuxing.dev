---
title: Background Image
description: 'CSS/HTML/IMG background image how to do them properly.'
---

[Written by Fuxing Loh - Dec 2020](https://fuxing.dev)

Web development is hard, the complexity of dealing with image is especially challenging.
Background image how do you do them properly?

As the guiding question, you should ask yourself:

> Is the image the content or just for aesthetic purpose?

Below are just a few examples of how to "do image" properly.

## Image is the content

Nothing really special here, the image is the content hence we use the `<img>` tag. 
The image height will adjust accordingly to the given width.
As image is the content, the entirety of the image will be shown. 

```vue[] import=image-is-the-content.vue
```

---

## Image as background

The image is just the background and something as is the content.
In this case, the text is the content.
As text is the content, it will resize based on the height of the content.
You can try resizing the browser, and the height of the content will change and therefore the image.

```vue[] import=image-as-background.vue
```

---

## Image as background with layer

As you have observed by now, image as background makes it in incredibly difficult to see the text.
To make it easier to see, you can add a layer between the text, and the image.
Depending on the image, either black on white or white on black.

```vue[] import=image-as-background-layer.vue
```

---

## Aspect ratio on images

You want the image to have a certain aspect ratio?
For example, when width is 100px height is 50px, a 2:1 aspect ratio.
You can do this.

```vue[] import=aspect-ratio.vue
```

---

## Fixed height image

You want the image to have a fixed height regardless of the width of the image?
(E.g. Your landing page banner design?)
This is pretty basic, you can just set the height accordingly.
Additionally, you can set the height to be a certain percentage of the viewport. 
In this example, it is 25% of the browser height.

```vue[] import=fixed-height.vue
```

---

## Full height image

Image control the height of the image regardless of the content in the image.
In other words, image must be full height, text is just accompanying the image and must not influence height of image.
You can resize your browser and see the text get clipped.

```vue[] import=image-text-content.vue
```

---

## Bonus: Image on a horizontal scroll

> Vue Horizontal is an ultra simple pure vue horizontal layout for modern responsive web with zero dependencies.

```vue[] import=horizontal.vue
```
