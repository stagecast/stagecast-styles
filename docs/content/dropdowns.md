# Dropdowns

<iframe title="Dropdown" height="300" src="../examples/dropdowns.html"></iframe>

```html {highlight: [2]}
  <div class="dropdown">
    <button class="btn btn-ghost-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i data-feather="chevron-down"></i>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <button class="dropdown-item active" href="#"><i class="pre-icon mr-3" data-feather="copy"></i>Duplicate</button>
      <button class="dropdown-item" href="#"><i class="pre-icon mr-3" data-feather="edit-3"></i>Edit</button>
      <button class="dropdown-item" href="#"><i class="pre-icon mr-3" data-feather="tag"></i>Action long title</button>
      <div class="dropdown-divider"></div>
      <button class="dropdown-item text-danger" href="#"><i class="pre-icon mr-3" data-feather="trash-2"></i>Delete item</button>
      <button class="dropdown-item disabled" href="#"><i class="pre-icon mr-3" data-feather="edit-3"></i>Disabled</button>
    </div>
  </div>
```
