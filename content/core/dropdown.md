---
title: "Dropdown"
date: 2018-02-23T21:02:32-05:00
description: An overlay that you can open and close with the click of a button.
---

Kolache dropdowns are designed to work with any sort of content. This will commonly be a stacked list of menu items, but you are not restricted to this. The drawer itself has no padding; be sure that the elements you place inside it have any padding you need.

Use JavaScript to add and remove the `is-open` class to open and close the dropdown.

{{< code-example css >}}
@import "kolache/core/dropdown" as .dropdown;
{{< /code-example >}}

{{< rendered-example >}}
<div class="dropdown">
  <button class="dropdown__toggle button">Menu</button>
  <div class="dropdown__drawer">
    any contents you want
  </div>
</div>
{{< /rendered-example >}}

{{< rendered-example >}}
<div class="dropdown">
  <button class="dropdown__toggle button">Menu</button>
  <div class="dropdown__drawer">
    <ul class="nav-stacked">
      <li><a href="#">Item one</a></li>
      <li><a href="#">Item two</a></li>
      <li><a href="#">Item three</a></li>
    </ul>
  </div>
</div>
{{< /rendered-example >}}

Variables:

* `$toggle-selector` - defaults to `$(name)__toggle` where `$(name)` is the selector you import as (e.g. `.dropdown`)
* `$drawer-selector` - defaults to `$(name)__drawer` where `$(name)` is the selector you import as (e.g. `.dropdown`)
* `$arrow-size` - defaults to `0.25em`
* `$transition-time` - defaults to `0.2s`
* `$transition-effect` - the transition timing effect for the fade in. defaults to `ease-out`
