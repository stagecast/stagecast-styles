
### Import a full module:

The module folder structure
```
boostrap
  scss
    mixins
      _alter.scss
      _background-variant.scss
      _badge.scss
      ...
```

The import:
```scss
@import bootstrap/scss/mixins
```

This will include all the `mixins`

### Interpolation

The `#{$variable-name}` syntax to create elements or strings.

NOTE: Unfortunately, interpolation removes quotes from strings, which makes it difficult to use quoted strings as values for custom properties when they come from Sass variables. As a workaround, you can use the `meta.inspect()` function to preserve the quotes.

```scss
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.gray {
  @include prefix(filter, grayscale(50%), moz webkit);
}
```

### Variables and custom Properties
- Sass variables are all compiled away by Sass. CSS variables are included in the CSS output.
- CSS variables can have different values for different elements (like the css properties), but Sass variables only have one value at a time.

They can be also booleans

```scss
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}
```

## Placeholder Selectors
Used for reusing code without having that in the output. To compile the placeholder you must extend it.

```scss
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```
