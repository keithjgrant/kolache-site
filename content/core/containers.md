---
title: "Layout"
date: 2018-02-23T16:19:42-05:00
description: Layout the page the way you need with custom containers.
weight: -1
---

### Centered container

Center your page content with a centered container. The width and breakpoint are customizable.

Below the breakpoint, the container will fill the screen width with 1em margin on either side. Above the breakpoint, the container will be centered and its size will be constrained to the specified `$width`.

{{< code-example css >}}
@import "kolache/core/centered-container" as .container {
  $width: 55em;
  $breakpoint: 57em;
}
{{< /code-example >}}


Variables:

 * `$width` - The container’s maximum width. Defaults to `62em` (equal to 992px)
 * `$breakpoint` - Sets the min-width breakpoint size. Defaults to `64em`
 * `$min-margin` - Sets the left/right margin on the container below the breakpoint. Defaults to `1em`

 It is recommended that you use the same unit type for all three variables.
