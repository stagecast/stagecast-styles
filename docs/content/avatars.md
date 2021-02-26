# Avatars

Avatars are images that users can set as their profile picture. On the Stagecast Organizer's platform they're always going to be rounded squares. They can be photos uploaded by users, or filled with one or two user's initials.

In general we use avatars for:
- Displaying the user in the product header
- Identify team members for workspaces and organizations
- Identify workspaces (usually via textual avatars).
## Basic example

<iframe title="Avatar" style="height: 100px; min-height:100px;" src="./docs/examples/avatar-base.html"></iframe>

```html
<img class="avatar" alt="jonrohan" src="./showcase-assets/avatar-img.jpg" width="48" height="48" />
```

### Sizes

<iframe title="Avatar sizes" style="height: 100px; min-height:100px;" src="./docs/examples/avatar-sizing.html"></iframe>

```html
<img class="avatar avatar-sm" alt="robin" src="./showcase-assets/avatar-img.jpg" width="20" height="20" />
<img class="avatar" alt="robin" src="./showcase-assets/avatar-img.jpg" width="20" height="20" />
<img class="avatar avatar-lg" alt="robin" src="./showcase-assets/avatar-img.jpg" width="20" height="20" />
<img class="avatar avatar-xl" alt="robin" src="./showcase-assets/avatar-img.jpg" width="20" height="20" />
```

### Textual and theme colors

<iframe title="Avatar texts" style="height: 100px; min-height:100px;" src="./docs/examples/avatar-textual.html"></iframe>

```html
<div class="avatar avatar-primary">R</div>
<div class="avatar avatar-secondary">R</div>
<div class="avatar avatar-success">R</div>
<div class="avatar avatar-danger">R</div>
<div class="avatar avatar-warning">R</div>
<div class="avatar avatar-info">R</div>
```
### Parent child

<iframe title="Avatar parent child" style="height: 100px; min-height:100px;" src="./docs/examples/avatar-parent-child.html"></iframe>

```html
<div class="avatar-parent-child d-inline-flex">
  <img class="avatar avatar-lg" alt="jonrohan" src="./showcase-assets/avatar-img.jpg" width="48" height="48" />
  <img class="avatar avatar-child" alt="josh" src="./showcase-assets/john.jpg" width="20" height="20" />
</div>
```
