---
title: "Alerts"
date: 2018-02-20T20:45:15-05:00
description:
weight: 1
---

`kolache/core/alerts`

{{< code-example css >}}
@import "kolache/core/alerts" as .alert;
{{< /code-example >}}

{{< rendered-example >}}
<div class="alert">
  This is an alert. <a href="#">Links match the look</a>, too.
</div>
{{< /rendered-example >}}


Variables:

* `$color` - Text color. Defaults to a 30% darker version of `$color-primary`
* `$bg-color` - Background color. Defaults to a much lighter shade of `$color`
* `$link-color` - Color for any links in the alert. Defaults to a 15% darker shade of `$color`
* `$margin` - Defaults to `$default-margin` on the bottom margin
* `$padding-offset-large`
* `$border-radius`

### Color variant

{{< code-example css >}}
@import "kolache/core/alerts:color" as .alert--danger {
  $color: $brand-danger;
};
{{< /code-example >}}

{{< rendered-example >}}
<div class="alert alert--danger">
  This is an alert. <a href="#">Links match the look</a>, too.
</div>
{{< /rendered-example >}}


Variables:

* `$color` - _Required_ Text color. Defaults to a 30% darker version of `$color-primary`
* `$bg-color` - Background color. Defaults to a much lighter shade of `$color`
* `$link-color` - Color for any links in the alert. Defaults to a 15% darker shade of `$color`
* `$border-color` - Defaults to `$color`
