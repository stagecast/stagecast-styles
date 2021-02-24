# Typography

## Type scale

The typography scale is modelled after [Github's type scale](https://primer.style/css/support/typography) and designed to work for Stagecast's product UI and marketing sites. Font sizes are designed to work in combination with `line-height` values so as to result in more sensible numbers wherever possible.

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

## Default text

By default, the UI elements will have `font-size: 14px`.

## Typography variables
### Text emphasis
Normal text in the system can have 3 types of emphasis:
- **High**: Used for the most important information like titles, paragraphs or other relevant UI elements.
- **Medium**: Used for less important information, like the form descriptions.
- **No**: used for disabled text.

<iframe title="Text emph" style="min-height: 130px; height: 130px;" src="./docs/examples/typography-emph.html"></iframe>

```html {highlight: [2]}
<div style="color: var(--text-high-emph)">var(--text-high-emph)</div>
<div style="color: var(--text-medium-emph)">var(--text-medium-emph)</div>
<div style="color: var(--text-no-emph)">var(--text-no-emph)</div>
```
