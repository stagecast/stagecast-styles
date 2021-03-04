# List Groups

List groups are component used to display a series of content. They are generally used for side navigation or tab navigation. In the Stagecast platform we make use of them to display information in lists. The elements in the list are usually under the same context.

Like most of the components in our style guide, the list group is based on the [bootstrap counterpart](https://getbootstrap.com/docs/4.6/components/list-group/). To have a deeper look into the available styling options, please refer to that documentation.

## Default

<iframe title="Modal activation" height="284" src="./docs/examples/list-group.html"></iframe>

```html
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item active">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

## Flush

On Bootstrap you can add `.list-group-flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards). We make use of the `.list-group-flush` mostly with `card`s.

<iframe title="Modal activation" height="260" src="./docs/examples/list-group-flush.html"></iframe>

```html
<div class="card bg-01">
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span class="font-weight-semibold">Current Plan</span>
        <span class="float-right">Enterprise</span>
      </li>
      <li class="list-group-item">
        <span class="font-weight-semibold">Status</span>
        <span class="float-right text-success">Active</span>
      </li>
      <li class="list-group-item">
        <span class="font-weight-semibold">Billing Period Start</span>
        <span class="float-right">Dec. 17th 2020, 9:28pm</span>
      </li>
      <li class="list-group-item">
        <span class="font-weight-semibold">Billing Period End</span>
        <span class="float-right">Dec. 17th 2021, 9:28pm</span>
      </li>
    </ul>
  </div>
</div>
```
