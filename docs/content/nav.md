# Nav

## Base nav

The basic nav works exaclty like Bootstrap: the base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

<iframe title="Basic Nav" style="height: 100px; min-height:100px;" src="./docs/examples/nav-basic.html"></iframe>

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">
      <i class="pre-icon mr-2" data-feather="activity"></i>Active
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="pre-icon mr-2" data-feather="airplay"></i>Link
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="pre-icon mr-2" data-feather="battery"></i>Link
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
      <i class="pre-icon mr-2" data-feather="cloud-off"></i>Disabled
    </a>
  </li>
</ul>
```

The same layout could be obtained with the following styles. In fact, classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

```html
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
```

## Vertical nav

<iframe title="Vertical Nav" style="height: 200px; min-height:100px;" src="./docs/examples/nav-vertical.html"></iframe>

```html
<nav class="nav flex-column">
  <a class="nav-link active" href="#">
    <i class="pre-icon mr-2" data-feather="gift"></i>What's new?
    </a>
  <a class="nav-link" href="#">
    <i class="pre-icon mr-2" data-feather="book-open"></i>Retake tour
  </a>
  <a class="nav-link" href="#">
    <i class="pre-icon mr-2" data-feather="help-circle"></i>
    Help Center
    <i class="post-icon ml-5" style="color: var(--text-no-emph)" data-feather="external-link"></i>
  </a>
</nav>
```
## Underlined Navigation

Thorughout the Stagecast products we make use of many horizontal and vertical navigations with a custom active indicator.
## With vertical avatars

<iframe title="Vertical nav" height="300" src="./docs/examples/nav-workspace-vertical.html"></iframe>

```html
<nav class="nav flex-column with-active-vertical-indicator">
  <a id="link1" class="nav-item nav-link" href="#link1">
    <div class="avatar avatar-primary">F</div>
  </a>
  <a id="link2" class="nav-item nav-link" href="#link2">
    <div class="avatar avatar-primary">R</div>
  </a>
  <a id="link3" class="nav-item nav-link" href="#link3">
    <div class="avatar avatar-primary">J</div>
  </a>
  <a id="link4" class="nav-item nav-link" href="#link4">
    <div class="avatar avatar-primary">S</div>
  </a>
  <a class="nav-item nav-link">
    <button class="btn avatar">
      <i data-feather="plus"></i>
    </button>
  </a>
  <hr class="active-indicator" />
</nav>
```

### With horizontal avatars

<iframe title="Vertical nav" style="height: 100px; min-height:100px;" src="./docs/examples/nav-workspace-horizontal.html"></iframe>

```html
<nav class="nav flex-row with-active-indicator">
  <a id="link10" class="nav-item nav-link" href="#link10">
    <div class="avatar avatar-primary">F</div>
  </a>
  <a id="link20" class="nav-item nav-link" href="#link20">
    <div class="avatar avatar-primary">R</div>
  </a>
  <a id="link30" class="nav-item nav-link" href="#link30">
    <div class="avatar avatar-primary">J</div>
  </a>
  <a id="link40" class="nav-item nav-link" href="#link40">
    <div class="avatar avatar-primary">S</div>
  </a>
  <a class="nav-item nav-link">
    <button class="btn avatar">
      <i data-feather="plus"></i>
    </button>
  </a>
  <hr class="active-indicator" />
</nav>
```
### Jquery-powered active indicator

<iframe title="Underlined Nav" height="150" src="./docs/examples/nav-underline-icons.html"></iframe>

```html
<!-- nav items as links -->
<nav class="nav with-dynamic-active-indicator">
  <a class="nav-item nav-link active">
    <i class="pre-icon mr-3" data-feather="monitor"></i>Presenter
  </a>
  <a class="nav-item nav-link">
    <i class="pre-icon mr-3" data-feather="smartphone"></i>Participant
  </a>
  <a class="nav-item nav-link">
    <i class="pre-icon mr-3" data-feather="sliders"></i>Moderator
  </a>
  <hr class="active-indicator" />
</nav>

<!-- nav items as divs -->
<nav class="nav with-dynamic-active-indicator">
  <div class="nav-item nav-link active px-4">
    <i class="pre-icon mr-3" data-feather="monitor"></i>Presenter
  </div>
  <div class="nav-item nav-link px-4">
    <i class="pre-icon mr-3" data-feather="smartphone"></i>Participant
  </div>
  <div class="nav-item nav-link px-4">
    <i class="pre-icon mr-3" data-feather="sliders"></i>Moderator
  </div>
  <hr class="active-indicator" />
</nav>
```


### With dynamic moving indicator

<iframe title="Underlined Nav" style="height: 100px; min-height:100px;" src="./docs/examples/nav-underline.html"></iframe>

```html
<nav class="nav with-dynamic-active-indicator">
  <a class="nav-item nav-link active">This</a>
  <a class="nav-item nav-link">Is</a>
  <a class="nav-item nav-link">A</a>
  <a class="nav-item nav-link">Variable</a>
  <a class="nav-item nav-link">Width</a>
  <a class="nav-item nav-link">Navigation</a>
  <hr class="active-indicator" />
</nav>
```
