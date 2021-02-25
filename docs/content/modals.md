# Modals and Dialogs

These UI components are containers/windows that show on top of the content the user is currently viewing/interacting with. The different names are based on the attention they deserve, the context you're in, and how the user can interact with them.

They can be used for displaying information, ask the user to take immediate action or allow the user to perform some tasks in the context of a page without being redirected out of it. The common use cases are:
- Help you keeping the flow where you make user to do a particular action without leaving the current page.
- Capture the focus of the user which allows you to remove secondary distractions.
- The user is required to make a choice or needs to know something specific before continuing.

## Dialogs

It consists of a window that appears, with buttons you can click or a list of options to choose from. They almost always relate to the foreground app. It is a non-fullscreen activity window used for simple confirmations or choices.

The Dialogs could be:
- **Blocking**: for messages that need immediate attention. The window/container is usually locked, meaning you can't dismiss the box or continue with what you want to do until you explicitly acknowledge the content, this is usually done by clicking a button inside the container. The buttons on this window are usually "OK" or "Cancel".
- **Non-blocking**: Non-blocking Dialogs are a type of UI that speaks to the user and requests for the user's response. User could opt to ignore or dismiss the message.

### Default dialog

<iframe title="Modal dialog" height="320" src="./docs/examples/modals-dialog.html"></iframe>

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

### Dialogs with advanced confirmation

<iframe title="Dialog advance" height="480" src="./docs/examples/modals-dialog-advance.html"></iframe>

```html
<button id="modalTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Delete Workspace</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>Would you like to delete this workspace? You and everyone else in it will lose access to all the content. Created rooms, activations and analytics data within this workspace will be permanently deleted.</div>
        <form action="" class="mt-5 mb-0">
          <div class="form-group">
            <label for="modalInput1">Confirm by typing <span class="text-danger font-weight-bold">Workspace Name</span> below</label>
            <input type="text" class="form-control is-invalid" id="modalInput1" value="Delete" placeholder="Type title..." aria-describedby="name">
            <small id="emailHelp" class="form-text invalid-feedback">Please enter the text exactly as it is displayed to confirm.</small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger">Delete Forever</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
```

## Modals

These are for getting work done. These let you do more work without having to show all the information on the main screen. These messages are not locked and you can click anywhere to dismiss the container. One example could be an "Invite Friends" functionality where such a container appears upon clicking a button.
### Example: modal for an activation

<iframe title="Modal activation" height="540" src="./docs/examples/modals-activation.html"></iframe>

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open the modal!</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Delete Workspace</h4>
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

In the Stagecast Organizer's dashboard there are some important events that need to be celebrated. For this reason we have created a variant of the default modal with the following usage scenarios:
- **Get the user prepared for an important event (like launching an activation)**
- **Inform the user about a feature, or a set of features, that have been unlocked.**

Examples are: a new subscription, a new activation is about to start.

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
