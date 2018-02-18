---
title: "Buttons"
date: 2018-02-14T16:29:45-05:00
description: I bet you’re gonna need some buttons. Kolache includes a basic button and some common variants.
---

`kolache/core/button`

{{< rendered-example >}}<button class="button">Button</button>{{< /rendered-example >}}

{{< code-example >}}@import "kolache/core/button" as .button;{{< /code-example >}}

Variables:

* `$color` - defaults to `$white`
* `$bg-color` - defaults to `$color-primary`
* `$font-weight` - defaults to `$font-weight-normal`
* `$offset-padding`
* `$border-radius`

### Color variant

`kolache/core/button:color`

{{< rendered-example >}}<button class="button button--danger">Button</button>{{< /rendered-example >}}

{{< code-example >}}@import "kolache/core/button:color" as .button--danger {
  $bg-color: $color-danger;
};{{< /code-example >}}

Variables:

* `$bg-color` - _required_
* `$color` - defaults to white

### Size variant

`kolache/core/button:size`

{{< rendered-example >}}<button class="button button--large">Button</button>{{< /rendered-example >}}

{{< code-example >}}@import "kolache/core/button:size" as .button--large {
  $size: 1.5rem;
};{{< /code-example >}}

Variables:

* `$size` - _required_
* `$padding` - defaults to `$offset-padding`
