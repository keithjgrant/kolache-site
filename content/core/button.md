---
title: "Buttons"
date: 2018-02-14T16:29:45-05:00
description: I bet you’re gonna need some buttons. Kolache includes a basic button and several common variants.
weight: 2
---

{{< code-example css >}}
@import "kolache/core/button" as .button;
{{< /code-example >}}

{{< rendered-example >}}
<button class="button">Button</button>
<a href="#" class="button">Link</a>
<input type="button" class="button" value="Input" />
{{< /rendered-example >}}

Variables:

* `$color` - defaults to `$white`
* `$bg-color` - defaults to `$color-primary`
* `$font-weight` - defaults to `$font-weight-normal`
* `$offset-padding`
* `$border-radius`

{{< rendered-example >}}
<button class="button" disabled>Disabled button</button>
{{< /rendered-example >}}

### Color variant

{{< code-example css >}}
@import "kolache/core/button:color" as .button--success {
  $bg-color: $color-success;
};
@import "kolache/core/button:color" as .button--danger {
  $bg-color: $color-danger;
};
{{< /code-example >}}

{{< rendered-example >}}
<button class="button button--success">Button</button>
<button class="button button--danger">Button</button>
{{< /rendered-example >}}

Variables:

* `$bg-color` - _required_
* `$color` - defaults to white

### Size variant

{{< code-example css >}}
@import "kolache/core/button:size" as .button--large {
  $size: 1.25rem;
  };
{{< /code-example >}}

{{< rendered-example >}}
<button class="button button--large">Button</button>
{{< /rendered-example >}}

Variables:

* `$size` - _required_
* `$padding` - defaults to `$offset-padding`

### Outline button

{{< code-example css >}}
@import "kolache/core/button:outline" as .button--outline;
@import "kolache/core/button:outline" as .button--outline--danger {
  $color: $color-danger;
};
{{< /code-example>}}

{{< rendered-example >}}
<button class="button button--outline">Outline button</button>
<button class="button button--outline--danger">Outline button</button>
{{< /rendered-example >}}

Variables:

* `$color` - defaults to `$color-primary`
* `$border-color` - defaults to `$color`
* `$bg-color` - defaults to `transparent`

### Button link

If it doesn’t have an `href` attribute, you should be using a `<button>`. This variant makes a `<button>` appear and behave visually like an `<a>` so you can do just that.

Unlike other button variants, this does not need to be combined with the main button class (though it works just the same if you do add both classes).

{{< code-example css >}}
@import "kolache/core/button:link" as .button-link;
{{< /code-example>}}

{{< rendered-example >}}
A <button class="button-link">link button</button> looks just like
<a href="#">a normal link</a>.
{{< /rendered-example >}}

Variables:

* `$link-color`
* `$link-color-visited`
* `$link-color-hover`
* `$link-color-active`
