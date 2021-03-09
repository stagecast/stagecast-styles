# Typography

By default, the UI elements will have `font-size: 14px`, which is rather small, but at the same time allows us to render many UI elements on the same page without the need of scrolling.
## Type scale

The typography scale is modelled after [Github's type scale](https://primer.style/css/support/typography) and designed to work for Stagecast's product UI and marketing sites. Font sizes are designed to work in combination with `line-height` values to result in more sensible numbers wherever possible.

Differently from Github Primer, font sizes don't scale down with mobile sizing.

| Scale | Font size: desktop | 1.25 line height | 1.5 line height |
| ----- | ------------------ | ---------------- | --------------- |
| `00`    | 48px               | 60               | 72              |
| `0`     | 40px               | 50               | 60              |
| `1`     | 32px               | 40               | 48              |
| `2`     | 24px               | 30               | 36              |
| `3`     | 20px               | 25               | 30              |
| `4`     | 16px               | 20               | 24              |
| `5`     | 14px               | 17.5             | 21              |
| `6`     | 12px               | 15               | 18              |


## Headline
Underneath you find a showcase of our headings.

<iframe title="Headings" height="280" src="./docs/examples/typography.html"></iframe>

```html {highlight: [2]}
<h1>h1. Stagecast heading</h1>
<h2>h2. Stagecast heading</h2>
<h3>h3. Stagecast heading</h3>
<h4>h4. Stagecast heading</h4>
<h5>h5. Stagecast heading</h5>
<h6>h6. Stagecast heading</h6>
```

## Heading utilities

Use `.h1` – `.h6` to change an elements font size and weight to match our heading styles.

<iframe title="Heading utilities" height="390" src="./docs/examples/typography-heading.html"></iframe>

```html
<p class="h00">Stagecast Heading 00</p>
<p class="h0">Stagecast Heading 0</p>
<p class="h1">Stagecast Heading 1</p>
<p class="h2">Stagecast Heading 2</p>
<p class="h3">Stagecast Heading 3</p>
<p class="h4">Stagecast Heading 4</p>
<p class="h5">Stagecast Heading 5</p>
<p class="h6">Stagecast Heading 6</p>
```

These are particularly useful for changing the visual appearance while keeping the markup semantically correct. Be sure you keep the hierarchy appropriate for the page.

```html
<h2 class="h1">Looks like a heading 1, semantically a heading 2</h2>
```

## Type scale utilities

Use `.f1` – `.f6` to change an elements font size while keeping inline with our type scale.

<iframe title="Font size utilities" height="490" src="./docs/examples/typography-font-size.html"></iframe>

```html
<p class="f00">Stagecast font size 00</p>
<p class="f0">Stagecast font size 0</p>
<p class="f1">Stagecast font size 1</p>
<p class="f2">Stagecast font size 2</p>
<p class="f3">Stagecast font size 3</p>
<p class="f4">Stagecast font size 4</p>
<p class="f5">Stagecast font size 5</p>
<p class="f6">Stagecast font size 6</p>
```

## Type weight utilities
Bootstrap makes use of the `.font-weight-{weight}` syntax which is too verbose in our opinion. For this reason we decided to offer an alternative way to set font weights.

Use `.fw-lighter` – `.fw-bolder` to change an element font weight while keeping inline with our type scale.

<iframe title="Font weight utilities" height="280" src="./docs/examples/typography-font-weight.html"></iframe>

```html
<p class="fw-lighter">Stagecast font lighter</p>
<p class="fw-light">Stagecast font light</p>
<p class="fw-normal">Stagecast font normal</p>
<p class="fw-semibold">Stagecast font semibold</p>
<p class="fw-bold">Stagecast font bold</p>
<p class="fw-bolder">Stagecast font bolder</p>
```
## Typography variables
### Text emphasis
Normal text in the system can have 3 types of emphasis:
- **High**: Used for the most important information like titles, paragraphs or other relevant UI elements like buttons. The css classes are many: `.text-high-emph`, `.text-main`, `.text-0`
- **Medium**: Used for less important information, like the form descriptions, subtitles, titles that are less relevant than the subsequent content. The css classes are many: `.text-medium-emph`, `.text-muted`, `.text-1`
- **No**: used for disabled text. The css classes are many: `.text-no-emph`, `.text-disabled`, `.text-2`

<iframe title="Text emph" style="min-height: 130px; height: 130px;" src="./docs/examples/typography-emph.html"></iframe>

```html {highlight: [2]}
<div class="text-main">.text-main var(--text-high-emph)</div>
<div class="text-muted">.text-muted var(--text-medium-emph)</div>
<div class="text-disabled">.text-disabled var(--text-no-emph)</div>
```
