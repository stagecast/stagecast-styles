# Progress

## Progress default

Differently from Bootstrap, the `.progress-bar` element has rounded borders and is much shorter (`height: 8px`).

<iframe title="Progress" height="160" src="./docs/examples/progress.html"></iframe>

```html
<div class="w-50">
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress mt-4">
    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress mt-4">
    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress mt-4">
    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress mt-4">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```

## Progress stacked

Like Bootstrap, you can stack many `.progress-bar` elements inside the `.progress` component. Only the last stacked element will have rounded borders.

<iframe title="Progress" style="height:90px; min-height:90px;" src="./docs/examples/progress-stacked.html"></iframe>

```html {highlight: ['3-5', 10]}
<div class="w-50">
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress mt-4">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar progress-bar-striped-inverted bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```
