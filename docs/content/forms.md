# Forms

Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.

## Form controls
Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class, exaclty like Bootstrap. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our custom forms to further style `<select>`s.
<iframe title="Form Controls" height="300" src="./docs/examples/forms-controls.html"></iframe>

```html {highlight: [2]}
  <form class="col-lg-6">
    <div class="form-group">
      <label for="exampleInputEmail1">Text <span class="text-muted">(optional)</span></label>
      <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Type email..." aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Other text</label>
      <input type="text" class="form-control is-invalid" placeholder="Type password..." id="exampleInputPassword1">
      <div class="invalid-feedback">
        Invalid feedback message
      </div>
    </div>
  </form>
```

## Sizing
You can set heights using classes like `.form-control-lg` and `.form-control-sm`. However on Stagecast's product will only use normal or small form controls.

<iframe title="Form Sizes" height="160" src="./docs/examples/forms-sizing.html"></iframe>

```html {highlight: [2]}
<input type="text" class="form-control form-control-sm mb-4" placeholder=".form-control-sm" />
<input type="text" class="form-control" placeholder=".form-control" />
```

## Custom checkboxes and radios

### Checkboxes
<iframe title="Checkboxes" height="180" src="./docs/examples/forms-checkboxes.html"></iframe>

```html {highlight: [2]}
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2" disabled>
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3" checked disabled>
    <label class="custom-control-label" for="customCheck3">Checked disabled</label>
  </div>
```
### Radio buttons
<iframe title="Radio buttons" height="180" src="./docs/examples/forms-radio-buttons.html"></iframe>

```html {highlight: [2]}
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio1" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio2" class="custom-control-input" disabled>
    <label class="custom-control-label" for="customRadio3">Disabled</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio3" class="custom-control-input" disabled checked>
    <label class="custom-control-label" for="customRadio4">Checked + disabled</label>
  </div>
```

### Switch checkboxes
<iframe title="Switches" height="180" src="./docs/examples/forms-switches.html"></iframe>

```html {highlight: [2]}
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="customSwitch2" checked>
    <label class="custom-control-label" for="customSwitch2">Toggle this switch element</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" disabled id="customSwitch3">
    <label class="custom-control-label" for="customSwitch3">Disabled switch element</label>
  </div>
  <div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" checked disabled id="customSwitch4">
    <label class="custom-control-label" for="customSwitch4">Checked disabled</label>
  </div>
```

## Custom image uploder

### Default

<iframe title="Uploder" height="260" src="./docs/examples/forms-uploder-1.html"></iframe>

```html
<!-- Compact uploader -->
<div class="dropzone-control dropzone-control-compact mb-4">
  <input type="file" id="immUploader2" name="image-upload" multiple accept="img/*">
  <label class="dropzone-control-label" for="immUploader2"></label>
</div>

<!-- Normal uploader -->
<div class="dropzone-control">
  <div class="dropzone-overlay d-none">
    <img class="m-auto" src="./assets/svg/preloaders--circular-preloader.svg" alt="">
  </div>
  <input type="file" id="immUploader1" name="image-upload" multiple accept="img/*">
  <label class="dropzone-control-label" for="immUploader1">
    <div class="text-primary">Drag and drop or click to upload an image</div>
    <div style="color: var(--text-medium-emph)">You can add 2 images</div>
  </label>
</div>

```

### Inside Form Control

<iframe title="Uploder" height="480" src="./docs/examples/forms-uploder-2.html"></iframe>

```html
<div class="form-group">
  <label for="image-uplaod">Image uploader optional label</label>
  <div class="dropzone-control">
    <div class="dropzone-overlay d-none">
      <img class="m-auto" src="./assets/svg/preloaders--circular-preloader.svg" alt="">
    </div>
    <input type="file" id="immUploader1" name="image-upload" multiple accept="img/*">
    <label class="dropzone-control-label" for="immUploader1">
      <div class="text-primary">Drag and drop or click to upload an image</div>
      <div style="color: var(--text-medium-emph)">You can add 2 images</div>
    </label>
    <!-- Divider -->
    <div class="dropzone-control-divider"></div>
    <!-- Preview -->
    <div class="dropzone-preview">
      <div class="dropzone-preview-img">
        <button type="button" class="delete" data-dismiss="alert" aria-label="Delete">
          <span aria-hidden="true">&times;</span>
        </button>
        <img src="https://pbs.twimg.com/profile_images/428316729220276224/EdBZ2Kgp.jpeg" alt="uploader image">
      </div>
      <div class="dropzone-preview-img">
        <button type="button" class="delete" data-dismiss="alert" aria-label="Delete">
          <span aria-hidden="true">&times;</span>
        </button>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-837wzfFhOmQ%2FUMW2c9Ox25I%2FAAAAAAAAKYg%2Fmi13z468aMQ%2Fs1600%2Fcute-puppies-pictures-1.jpg&f=1&nofb=1" alt="uploader image">
      </div>
    </div>
  </div>
  <small class="form-text text-muted">Supported file extensions are .jpg, .png, .svg, .gif</small>
</div>
```

## Layouts

Since Stagecast styles are based on Bootstrap v4.6.0 you can use every layout class provided by Bootstrap, for advanced layouts have a look at [Bootstrap Forms](https://getbootstrap.com/docs/4.6/components/forms/)
