# Color system

## Elevation Colors

<div class="container-fluid">
  <div class="row">
    <div style="height:140px; min-width:140px;" class="col bg-00 rounded p-3 font-weight-bold m-3">
    z-space-00
    <div class="text-monospace">#10111F</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-01 rounded p-3 font-weight-bold m-3">
    z-space-01
    <div class="text-monospace">#1C1D2A</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-02 rounded p-3 font-weight-bold m-3">
    z-space-02
    <div class="text-monospace">#21222F</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-03 rounded p-3 font-weight-bold m-3">
    z-space-03
    <div class="text-monospace">#232431</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-04 rounded p-3 font-weight-bold m-3">
    z-space-04
    <div class="text-monospace">#262633</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-06 rounded p-3 font-weight-bold m-3">
    z-space-06
    <div class="text-monospace">#2A2B38</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-08 rounded p-3 font-weight-bold m-3">
    z-space-08
    <div class="text-monospace">#2D2E3A</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-12 rounded p-3 font-weight-bold m-3">
    z-space-12
    <div class="text-monospace">#31323E</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-16 rounded p-3 font-weight-bold m-3">
    z-space-16
    <div class="text-monospace">#343541</div>
    </div>
    <div style="height:140px; min-width:140px;" class="col bg-24 rounded p-3 font-weight-bold m-3">
    z-space-24
    <div class="text-monospace">#363743</div>
    </div>
  </div>
</div>

The usage rules:
- `z-space-00` is the surface color;
- `z-space-01 - z-space 03` is used for components;
- `z-space-04 - z-space-24` is used for different states of
input fields and buttons.

## Palette
<div class="container-fluid">
  <div class="row">
    <div style="height:100px; min-width:100px;" class="col bg-primary rounded p-3 font-weight-bold m-3">
    Primary
    </div>
    <div style="height:100px; min-width:100px;" class="col bg-secondary rounded p-3 font-weight-bold m-3">
    Secondary
    </div>
    <div style="height:100px; min-width:100px; color: var(--z-space-00)" class="col bg-info rounded p-3 font-weight-bold m-3">
    Info
    </div>
    <div style="height:100px; min-width:100px;" class="col bg-success rounded p-3 font-weight-bold m-3">
    Success
    </div>
    <div style="height:100px; min-width:100px;" class="col bg-warning rounded p-3 font-weight-bold m-3">
    Warning
    </div>
    <div style="height:100px; min-width:100px;" class="col bg-danger rounded p-3 font-weight-bold m-3">
    Danger
    </div>
  </div>
</div>

The usage rules:
- **Primary colors**: To indicate the primary action on a page or view;
- **Secondary colors**: To indicate less important actions on the page;
- **Success colors**: To indicate valid and success actions;
- **Danger colors**: To indicate potentially dangerous, or destructive actions;
- **Grey colors**: For text, descriptions and disabled states.

The palette defines the theme colors that can be used throughout the system with all the components in the following way:
- `.bg-{palette-name}`: to color the background of an element (eg. `.bg-primary` will tint the backgroud using `blue-300`)
- `.btn-{palette-name}` or `.btn-ghost-{palette-name}` or `.btn-outline-{palette-name}`: to change the background of a button. These components will also preserve the contrast between font and background color. For example the `.btn-secondary` will have dark background and white-ish text color.
- `.alert-{palette-name}`: to style alerts

## Color shades

<div class="container-fluid">
  <div class="row">
    <!-- Blue -->
    <div class="col-12 col-md-6 pl-0 mt-4">
      <div class="text-white p-3 bg-blue-300">
        <p class="h2">Blue</p>
        <div class="d-flex justify-content-between text-monospace">
          <span class="small">$blue-300</span>
          <span class="small">#7a85ff</span>
        </div>
      </div>
      <div style="height:60px;" class="bg-blue-50 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$blue-50</span>
        <span class="">#eaeaff</span>
      </div>
      <div style="height:60px " class="bg-blue-100 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$blue-100</span>
        <span class="">#c9cafe</span>
      </div>
      <div style="height:60px;  border-left: 6px solid white" class="bg-blue-200 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-200</span>
        <span class="">#a3a8fe</span>
      </div>
      <div style="height:60px;  border-left: 6px solid white" class="bg-blue-300 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-300</span>
        <span class="">#7a85ff</span>
      </div>
      <div style="height:60px;  border-left: 6px solid white" class="bg-blue-400 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-400</span>
        <span class="">#5967fd</span>
      </div>
      <div style="height:60px " class="bg-blue-500 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-500</span>
        <span class="">#404af0</span>
      </div>
      <div style="height:60px " class="bg-blue-600 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-600</span>
        <span class="">#3b41e4</span>
      </div>
      <div style="height:60px " class="bg-blue-700 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-700</span>
        <span class="">#3235d6</span>
      </div>
      <div style="height:60px " class="bg-blue-800 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-800</span>
        <span class="">#2c29c9</span>
      </div>
      <div style="height:60px " class="bg-blue-900 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$blue-900</span>
        <span class="">#240cb0</span>
      </div>
    </div>
    <!-- Green -->
    <div class="col-12 col-md-6 pl-0 mt-4">
      <div class="text-white p-3  bg-green-300">
        <p class="h2">Green</p>
        <div class="d-flex justify-content-between text-monospace">
          <span class="small">$green-300</span>
          <span class="small">#62ca81</span>
        </div>
      </div>
      <div style="height:60px " class="bg-green-50 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$green-50</span>
        <span class="">#e4f6e9</span>
      </div>
      <div style="height:60px " class="bg-green-100 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$green-100</span>
        <span class="">#bee8c8</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-green-200 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-200</span>
        <span class="">#93d8a5</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-green-300 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-300</span>
        <span class="">#62ca81</span>
      </div>
      <div style="height:60px; border-left: 6px solid white;" class="bg-green-400 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-400</span>
        <span class="">#34be65</span>
      </div>
      <div style="height:60px " class="bg-green-500 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-500</span>
        <span class="">#00b249</span>
      </div>
      <div style="height:60px " class="bg-green-600 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-600</span>
        <span class="">#00a340</span>
      </div>
      <div style="height:60px " class="bg-green-700 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-700</span>
        <span class="">#009134</span>
      </div>
      <div style="height:60px " class="bg-green-800 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-800</span>
        <span class="">#008028</span>
      </div>
      <div style="height:60px " class="bg-green-900 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$green-900</span>
        <span class="">#006015</span>
      </div>
    </div>
    <!-- Yellow -->
    <div class="col-12 col-md-6 pl-0 mt-4">
      <div class="text-white p-3 bg-yellow-300">
        <p class="h2">Yellow</p>
        <div class="d-flex justify-content-between text-monospace">
          <span class="small">$yellow-300</span>
          <span class="small">#ffc042</span>
        </div>
      </div>
      <div style="height:60px " class="bg-yellow-50 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$yellow-50</span>
        <span class="">#fff5df</span>
      </div>
      <div style="height:60px " class="bg-yellow-100 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$yellow-100</span>
        <span class="">#ffe4af</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-yellow-200 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-200</span>
        <span class="">#ffd27a</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-yellow-300 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-300</span>
        <span class="">#ffc042</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-yellow-400 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-400</span>
        <span class="">#ffb20c</span>
      </div>
      <div style="height:60px " class="bg-yellow-500 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-500</span>
        <span class="">#ffa400</span>
      </div>
      <div style="height:60px " class="bg-yellow-600 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-600</span>
        <span class="">#fd9800</span>
      </div>
      <div style="height:60px " class="bg-yellow-700 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-700</span>
        <span class="">#f88800</span>
      </div>
      <div style="height:60px " class="bg-yellow-800 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-800</span>
        <span class="">#f37700</span>
      </div>
      <div style="height:60px " class="bg-yellow-900 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$yellow-900</span>
        <span class="">#eb5d00</span>
      </div>
    </div>
    <!-- Red -->
    <div class="col-12 col-md-6 pl-0 mt-4">
      <div class="text-white p-3 bg-red-300">
        <p class="h2">Red</p>
        <div class="d-flex justify-content-between text-monospace">
          <span class="small">$red-300</span>
          <span class="small">#ff7a7a</span>
        </div>
      </div>
      <div style="height:60px " class="bg-red-50 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$red-50</span>
        <span class="">#ffedf0</span>
      </div>
      <div style="height:60px " class="bg-red-100 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace text-monospace">
        <span class="">$red-100</span>
        <span class="">#ffd1d7</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-red-200 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-200</span>
        <span class="">#ffa0a0</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-red-300 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-300</span>
        <span class="">#ff7a7a</span>
      </div>
      <div style="height:60px; border-left: 6px solid white" class="bg-red-400 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-400</span>
        <span class="">#ff5955</span>
      </div>
      <div style="height:60px " class="bg-red-500 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-500</span>
        <span class="">#ff4839</span>
      </div>
      <div style="height:60px " class="bg-red-600 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-600</span>
        <span class="">#ff403a</span>
      </div>
      <div style="height:60px " class="bg-red-700 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-700</span>
        <span class="">#f13534</span>
      </div>
      <div style="height:60px " class="bg-red-800 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-800</span>
        <span class="">#e42e2d</span>
      </div>
      <div style="height:60px " class="bg-red-900 text-white d-flex justify-content-between align-items-center pl-3 pr-3 text-monospace">
        <span class="">$red-900</span>
        <span class="">#d42120</span>
      </div>
    </div>
  </div>
</div>


## Color variables

Below you find the color variables defined in the styles `::root` and can be accessed everywhere in your custom styles by using `var(--z-space-01)` syntax.

```css
  --z-space-00: #10111F;
  --z-space-01: #1C1D2A;
  --z-space-02: #21222F;
  --z-space-03: #232431;
  --z-space-04: #262633;
  --z-space-06: #2A2B38;
  --z-space-08: #2D2E3A;
  --z-space-12: #31323E;
  --z-space-16: #343541;
  --z-space-24: #363743;
  --primary-light: #a3a8fe;
  --primary-dark: #5967fd;
  --secondary-light: #363743;
  --secondary-dark: #31323E;
  --success-light: #93d8a5;
  --success-dark: #34be65;
  --info-light: #e9ecef;
  --info-dark: #ced4da;
  --warning-light: #ffd27a;
  --warning-dark: #ffb20c;
  --danger-light: #ffa0a0;
  --danger-dark: #ff5955;
  --blue-50: #eaeaff;
  --blue-100: #c9cafe;
  --blue-200: #a3a8fe;
  --blue-300: #7a85ff;
  --blue-400: #5967fd;
  --blue-500: #404af0;
  --blue-600: #3b41e4;
  --blue-700: #3235d6;
  --blue-800: #2c29c9;
  --blue-900: #240cb0;
  --green-50: #e4f6e9;
  --green-100: #bee8c8;
  --green-200: #93d8a5;
  --green-300: #62ca81;
  --green-400: #34be65;
  --green-500: #00b249;
  --green-600: #00a340;
  --green-700: #009134;
  --green-800: #008028;
  --green-900: #006015;
  --yellow-50: #fff5df;
  --yellow-100: #ffe4af;
  --yellow-200: #ffd27a;
  --yellow-300: #ffc042;
  --yellow-400: #ffb20c;
  --yellow-500: #ffa400;
  --yellow-600: #fd9800;
  --yellow-700: #f88800;
  --yellow-800: #f37700;
  --yellow-900: #eb5d00;
  --red-50: #ffedf0;
  --red-100: #ffd1d7;
  --red-200: #ffa0a0;
  --red-300: #ff7a7a;
  --red-400: #ff5955;
  --red-500: #ff4839;
  --red-600: #ff403a;
  --red-700: #f13534;
  --red-800: #e42e2d;
  --red-900: #d42120;
  --text-high-emph: rgba(255,255,255,0.9);
  --text-medium-emph: rgba(255,255,255,0.5);
  --text-no-emph: rgba(255,255,255,0.3);
```
