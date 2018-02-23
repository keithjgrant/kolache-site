---
title: "Forms"
date: 2018-02-22T19:22:45-05:00
description: Modules for styling and layout of forms.
---

Two modules work together in conjunction to style a form. A `form:group` can be used to wrap label and a form input. A `form:field` can be used to style the form input itself; it works on `<input>`, `<textarea>`, and `<select>`.

{{< code-example >}}
@import "kolache/core/form:group" as .form-group;{{< /code-example >}}

{{< code-example >}}
@import "kolache/core/form:field" as .form-field;{{< /code-example >}}

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

Variables:

* `$border-color` - defaults to `$color-primary`
* `$color` - defaults to `inherit`
* `$padding` - defaults to
* `$border-radius`

### Checkbox
