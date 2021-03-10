# Buttons

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Default button

Classic buttons are the core of our system, they are used to signal an interactive action.

<iframe title="Buttons" style="height: 100px; min-height:100px;" src="./docs/examples/buttons.html"></iframe>

```html {highlight: [2]}
  <button type="button" class="btn mr-3">Default</button>
  <button type="button" class="btn btn-primary mr-3">Primary</button>
  <button type="button" class="btn btn-secondary mr-3">Secondary</button>
  <button type="button" class="btn btn-success mr-3">Success</button>
  <button type="button" class="btn btn-danger mr-3">Danger</button>
```

## Ghost
Ghost buttons are used for less relevant actions.

<iframe title="Ghost buttons" style="height: 100px; min-height:100px;" src="./docs/examples/ghost-buttons.html"></iframe>

```html {highlight: [2]}
  <button type="button" class="btn btn-ghost-primary mr-3">Primary</button>
  <button type="button" class="btn btn-ghost-secondary mr-3">Secondary</button>
  <button type="button" class="btn btn-ghost-success mr-3">Success</button>
  <button type="button" class="btn btn-ghost-danger mr-3">Danger</button>
```

## Sizing
We currently support small and normal buttons

<iframe title="Small buttons" height="150" src="./docs/examples/buttons-sizing.html"></iframe>

```html {highlight: [2]}
  <button type="button" class="btn btn-sm mr-3">Default</button>
  <button type="button" class="btn btn-sm btn-primary mr-3">Primary</button>
  <button type="button" class="btn btn-sm btn-secondary mr-3">Secondary</button>
  <button type="button" class="btn btn-sm btn-success mr-3">Success</button>
  <button type="button" class="btn btn-sm btn-danger mr-3">Danger</button>
```

## Buttons With Icon

### With text

<iframe title="Buttons with icons" height="260" src="./docs/examples/buttons-icons.html"></iframe>

```html { highlight: [3] }
  <div class="mb-4">
    <button type="button" class="btn mr-3">
      <i class="pre-icon" data-feather="airplay"></i>
      Default
    </button>
    <button type="button" class="btn btn-primary mr-3"><i class="pre-icon" data-feather="airplay"></i>Primary</button>
    <button type="button" class="btn btn-secondary mr-3"><i class="pre-icon" data-feather="download-cloud"></i>Secondary</button>
    <button type="button" class="btn btn-success mr-3"><i class="pre-icon" data-feather="edit-3"></i>Success</button>
    <button type="button" class="btn btn-danger mr-3"><i class="pre-icon" data-feather="alert-circle"></i>Danger</button>
  </div>
  <div class="mb-4">
    <button type="button" class="btn btn-sm mr-3"><i class="pre-icon" data-feather="airplay"></i>Default</button>
    <button type="button" class="btn btn-sm btn-primary mr-3"><i class="pre-icon" data-feather="airplay"></i>Primary</button>
    <button type="button" class="btn btn-sm btn-secondary mr-3"><i class="pre-icon" data-feather="download-cloud"></i>Secondary</button>
    <button type="button" class="btn btn-sm btn-success mr-3"><i class="pre-icon" data-feather="edit-3"></i>Success</button>
    <button type="button" class="btn btn-sm btn-danger mr-3"><i class="pre-icon" data-feather="alert-circle"></i>Danger</button>
  </div>
  <div class="mb-4">
    <button type="button" class="btn btn-ghost mr-3"><i data-feather="airplay"></i></button>
    <button type="button" class="btn btn-ghost-primary mr-3"><i data-feather="airplay"></i></button>
    <button type="button" class="btn btn-ghost-secondary mr-3"><i data-feather="download-cloud"></i></button>
    <button type="button" class="btn btn-ghost-success mr-3"><i data-feather="edit-3"></i></button>
    <button type="button" class="btn btn-ghost-danger mr-3"><i data-feather="alert-circle"></i></button>
  </div>
  <div>
    <button type="button" class="btn btn-sm btn-ghost mr-3"><i data-feather="airplay"></i></button>
    <button type="button" class="btn btn-sm btn-ghost-primary mr-3"><i data-feather="airplay"></i></button>
    <button type="button" class="btn btn-sm btn-ghost-secondary mr-3"><i data-feather="download-cloud"></i></button>
    <button type="button" class="btn btn-sm btn-ghost-success mr-3"><i data-feather="edit-3"></i></button>
    <button type="button" class="btn btn-sm btn-ghost-danger mr-3"><i data-feather="alert-circle"></i></button>
  </div>
```

### Icon buttons

Icon buttons are used in toolbox components.

<iframe title="Buttons with icons 2" style="height: 100px; min-height:100px" src="./docs/examples/buttons-icons-2.html"></iframe>

```html
<button class="btn-icon btn-ghost-primary"><i data-feather="navigation"></i></button>
<button class="btn-icon btn-ghost-secondary"><i data-feather="star"></i></button>
<button class="btn-icon btn-ghost-success"><i data-feather="battery"></i></button>
<button class="btn-icon btn-ghost-warning"><i data-feather="alert-triangle"></i></button>
<button class="btn-icon btn-ghost-danger"><i data-feather="trash"></i></button>
<button class="btn-icon btn-ghost-info"><i data-feather="help-circle"></i></button>
```

### Icon button circle

The circluar button with icon is generally used for interactive UI elements like the activation cards. The main differences from the other button types are the icon color and the icon fill which are always white (`--text-high-emph`).

<iframe title="Buttons with icons 3" src="./docs/examples/buttons-icons-circle.html"></iframe>

```html
<div class="mb-4">
  <button class="btn-icon-circle btn-primary"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-secondary"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-success"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-warning"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-danger"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-info"><i data-feather="star"></i></button>
  </div>
<div class="mb-4">
  <button class="btn-icon-circle btn-sm btn-primary"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-sm btn-secondary"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-sm btn-success"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-sm btn-warning"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-sm btn-danger"><i data-feather="star"></i></button>
  <button class="btn-icon-circle btn-sm btn-info"><i data-feather="star"></i></button>
  </div>
</div>
```
