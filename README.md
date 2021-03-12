<h2 align="center">Stagecast Styles</h2>

<p align="center">Refercene for our frontend styles.</p>

## About

This is project is built after `bootstrap-npm-starter`, a GitHub template repository for creating new Bootstrap-powered npm projects, maintained by Bootstrap co-author @mdo. It's built with Bootstrap v4, it will be moved to bootstrap v5 as soon as the libraries like @ng-bootstrap and @ngx-formly provides support for that.

Here we override bootstrap styles and variables to provide a framework that offers the same Bootstrap APIs but with the Stagecast styling. This includes additional classes and scss variables.

For the documentation, we use `docute`.
## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/twbs/bootstrap-npm-starter
cd bootstrap-npm-starter

# Install dependencies
npm i

# Compile Everything
npm run build

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses serve)
npm run server

# Start local documentation server (uses serve)
npm run docs

# Watches Sass for changes and starts a local server
npm start
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Import in your projects

In your frontend project folder run:

```shell
npm install github:stagecast/stagecast-styles#semver:<latest-version> --save
```

### Angular project
In case your project is implemented in Angular:

```shell
# update your angular.json to include the scripts

# In case you have a SCSS project:

...
"styles": [
  "node_modules/@stagecast/styles/scss/main.scss",
  "your-app-styles.scss"
]
...

# In case you have a CSS project:

...
"styles": [
  "node_modules/@stagecast/styles/assets/main.css",
  "your-app-styles.css"
]
...

```
## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script | Description |
| --- | --- |
| `server` | Starts a local server (<http://localhost:3000>) for development |
| `watch` | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css` | Runs `css-compile` and `css-prefix` |
| `css-compile` | Compiles source Sass into CSS |
| `css-lint` | Runs [Stylelint](https://stylelint.io) against source Sass for code quality |
| `css-prefix` | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS |
| `css-purge` | Runs [PurgeCSS](https://purgecss.com) to remove CSS that is unused by `index.html` |
| `test` | Runs `css-lint` and `css`, in sequential order |

## Advanced usage

Take this starter repository to another level with some built-in addons that you can enable and customize.

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `scss/starter.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap). This is the same linter configuration we use in the main Bootstrap project. It's run via the `npm test` command, which is invoked in our `ci.yml` Actions workflow file.

At the root of the repo, `.stylelintignore` is used to list files that we ignore when linting and `.stylelintrc` is where we tell Stylelint to use the Bootstrap config. The former is recommended based on your specific needs, while the latter is required.

## Copyright

&copy; @mdo 2020-2021 and licensed MIT.
