# Intro test
<style>
  iframe {
    width: 100%; 
    display: flex;
    border: 1px solid rgb(225, 228, 232);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  iframe + .pre-wrapper {
    margin-top: 0!important;
    border-top-right-radius: 0px!important;
    border-top-left-radius: 0px!important;
  }
</style>

<iframe title="Alert" src="../examples/alert.html"></iframe>

```html {highlight: [2]}
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```