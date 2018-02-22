---
title: "Buttons"
date: 2018-02-14T16:29:45-05:00
description: I bet you’re gonna need some buttons. Kolache includes a basic button and some common variants.
---

`kolache/core/button`

{{< code-example >}}@import "kolache/core/button" as .button;{{< /code-example >}}

{{< rendered-example >}}<button class="button">Button</button>
<a href="#" class="button">Link</a>
<input type="button" class="button" value="Input" />{{< /rendered-example >}}

Variables:

* `$color` - defaults to `$white`
* `$bg-color` - defaults to `$color-primary`
* `$font-weight` - defaults to `$font-weight-normal`
* `$offset-padding`
* `$border-radius`

{{< rendered-example >}}<button class="button" disabled>Disabled button</button>{{< /rendered-example >}}

### Color variant

`kolache/core/button:color`

{{< code-example >}}@import "kolache/core/button:color" as .button--danger {
  $bg-color: $color-danger;
  };{{< /code-example >}}

{{< rendered-example >}}<button class="button button--danger">Button</button>{{< /rendered-example >}}

Variables:

* `$bg-color` - _required_
* `$color` - defaults to white

### Size variant

`kolache/core/button:size`

{{< code-example >}}@import "kolache/core/button:size" as .button--large {
  $size: 1.25rem;
  };{{< /code-example >}}

{{< rendered-example >}}<button class="button button--large">Button</button>{{< /rendered-example >}}

Variables:

* `$size` - _required_
* `$padding` - defaults to `$offset-padding`

### Outline button

{{< code-example >}}@import "kolache/core/button:outline" as .button--outline;{{< /code-example>}}

{{< rendered-example >}}<button class="button button--outline">Outline button</button>{{< /rendered-example >}}

Variables:

* `$color` - defaults to `$color-primary`
* `$border-color` - defaults to `$color`
* `$bg-color` - defaults to `transparent`
