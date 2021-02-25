# Dropdowns

The dropdown component offers support for triggering modifying actions on UI elements like the Room object or the Activation card.

Common options available in the dropdown include
- **Editing**
- **Duplicating**
- **Deleting**

## Showcase

<iframe title="Dropdown" height="270" src="./docs/examples/dropdowns.html"></iframe>

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

## Sizing and colors

<iframe title="Dropdown sizes and colors" height="230" src="./docs/examples/dropdowns-variants.html"></iframe>

```html
<div class="dropdown">
  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Admin
    <i class="post-icon align-bottom" data-feather="chevron-down"></i>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item active" href="#"><i class="pre-icon mr-3" data-feather="user"></i>Admin</button>
    <button class="dropdown-item" href="#"><i class="pre-icon mr-3" data-feather="user"></i>Owner</button>
    <button class="dropdown-item" href="#"><i class="pre-icon mr-3" data-feather="user"></i>Member</button>
  </div>
</div>
```
