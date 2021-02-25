# Alerts

In our products the alert component is used both as:
- **actual alert**
- **toast notification.**

With **alert** we mean messages with a need of immediate attention. The window/container is usually locked, meaning you can't dismiss the box or continue with what you want to do until you explicitly acknowledge the content, this is usually done by clicking a button inside the container. The buttons on this window are usually "OK" or "Cancel". They might also be used to signal a critical error in the product that could belong both to fron-end and backend-end.

With **toast notification** we mean a small message that shows up in a box at the bottom of the screen and disappears on its own after few seconds. It is a simple feedback about an operation in which current activity remains visible. It basically is to inform the user of something that is not critical and that does not require specific attention and does not prevent the user from using the rest of the website. The notification doesn't lock the view underneath nor is it interactive. It can include links to redirect the user somewhere else.
## Dismissable alerts

<iframe title="Alerts" height="270" src="./docs/examples/alerts.html"></iframe>

```html
<div class="alert alert-secondary alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

## Complex alerts

<iframe title="Complex Alerts" height="230" src="./docs/examples/alerts-complex.html"></iframe>

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```
