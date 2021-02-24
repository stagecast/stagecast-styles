# Modals

## Modal dialog

<iframe title="Modal dialog" height="320" src="./docs/examples/modals-dialog.html"></iframe>

```html
<button type="button" class="btn btn-ghost-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade show" style="display: block;" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Delete Activation</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Would you like to delete this activation?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
```

## Modal Activation

<iframe title="Modal activation" height="540" src="./docs/examples/modals-activation.html"></iframe>

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Edit Workspace</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="">
          <div class="form-group">
            <label for="modalInput1">Title</label>
            <input type="text" class="form-control" id="modalInput1" placeholder="Type title..." aria-describedby="name">
            <small id="emailHelp" class="form-text text-muted">50 characters</small>
          </div>
          <div class="form-group">
            <label for="image-uplaod">Workspace icon <span class="text-muted">(optional)</span></label>
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
            <small class="form-text text-muted">Supported file extensions are .jpg, .png, .svg, .gif</small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>
</div>
```

## Modal celebration

<iframe title="Modal celebration" height="480" src="./docs/examples/modals-celebration.html"></iframe>

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-celebration" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <img class="modal-title-img" src="./showcase-assets/modal-header.png" alt="">
        <button type="button" class="delete" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h1 class="h2">Prepare to Start</h1>
        <h2 class="h5" style="font-weight: 400; color: var(--text-no-emph)">You are about to start an Activation called:</h2>
        <h3 class="h5">Classic Quiz</h3>
      </div>
      <div class="modal-footer">
        <div class="w-100">
          <button type="button" class="btn btn-secondary mr-4" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Launch Now</button>
        </div>
        <div class="modal-footer-desc">
          This is your moment of glory!
        </div>
      </div>
    </div>
  </div>
</div>
```
