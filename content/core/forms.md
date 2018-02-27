---
title: "Forms"
date: 2018-02-22T19:22:45-05:00
description: Modules for styling and layout of forms.
weight: 6
---

## Form fields

Two modules work together in conjunction to style form fields. A `form:group` can be used to wrap label and a form input. A `form:field` can be used to style the form input itself; it works on `<input>`, `<textarea>`, and `<select>`.

Form fields fill 100% of their container’s width. To set a smaller width, wrap the form group in a container with a specified width.

{{< code-example css >}}
@import "kolache/core/form:group" as .form-group;
@import "kolache/core/form:field" as .form-field;
{{< /code-example >}}

{{< rendered-example >}}
<form>
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" class="form-field"/>
  </div>
  <div class="form-group">
    <label for="textarea">Textarea</label>
    <textarea id="textarea" class="form-field"></textarea>
  </div>
  <div class="form-group">
    <label for="select-input">Favorite character</label>
    <select id="select-input" class="form-field">
      <option>River</option>
      <option>Mal</option>
      <option>Inara</option>
      <option>Jayne</option>
    </select>
  </div>
  <button class="button">Save</button>
</form>
{{< /rendered-example >}}

Variables (`form:group`):

* `$default-margin` - sets the `bottom-margin` of the form group
* `$label-margin` - defaults to `0.5rem`. Sets the margin beneath the label

Variables (`form:field`):

* `$border-color` - defaults to `$gray-8`
* `$padding` - defaults to `$offset-padding`
* `$focus-color` - defaults to `$color-primary`
* `$border-radius`

### Checkboxes & radio buttons

{{< code-example css >}}
@import "kolache/core/form:toggle" as .toggle;
{{< /code-example >}}

Apply the `form:toggle` to a `<label>` wrapping a checkbox or radio input:

{{< rendered-example >}}
<label class="toggle"><input type="checkbox" /> Do the thing</label>
<label class="toggle"><input type="checkbox" /> Enable power option</label>
{{< /rendered-example >}}

For a series of related checkboxes or radio buttons, apply the class to a wrapping `<div>` or `<fieldset>` instead:

{{< rendered-example >}}
<div class="toggle">
  <label><input type="radio" name="weekday" /> Monday</label>
  <label><input type="radio" name="weekday" /> Tuesday</label>
  <label><input type="radio" name="weekday" /> Wednesday</label>
</div>
<fieldset class="toggle">
  <legend>Choose a color</legend>
  <label><input type="radio" name="color" /> Green</label>
  <label><input type="radio" name="color" /> Blue</label>
  <label><input type="radio" name="color" /> Mauve</label>
</fieldset>
{{< /rendered-example >}}

Variables:

* `$default-margin` - sets the `bottom-margin` of the form group
* `$legend-font-weight` - specifies font weight for any `<legend>` elements within the toggle. Defaults to `$font-weight-bold`.

## Form feedback

Use feedback styles to provide color-coded feedback, such as for validation or error states.

{{< code-example css >}}
@import "kolache/core/form:feedback" as .has-success {
  $color: $color-success;
};
@import "kolache/core/form:feedback" as .has-error {
  $color: $color-danger;
};
{{< /code-example >}}

Apply this class to a form group to color its label and input. Add a form-feedback element beneath the input to provide a feedback message to the user&mdash;this class name is customizable via the `$feedback-selector` variable.

{{< rendered-example >}}
<div class="form-group has-success">
  <label for="first-name-success">First Name</label>
  <input id="first-name-success" type="text" class="form-field"/>
  <div class="form-feedback">Looks good!</div>
</div>
<div class="form-group has-error">
  <label for="first-name-error">First Name</label>
  <input id="first-name-error" type="text" class="form-field"/>
  <div class="form-feedback">Uh oh!</div>
</div>
{{< /rendered-example >}}

Variables:

* `$color` - defaults to `$brand-primary`
* `$feedback-selector` - CSS selector to use for the feedback box. Defaults to `.form-feedback`
* `$feedback-border-width` - defaults to 0
* `$border-radius`
* `$offset-padding`
