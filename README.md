<p align="center">
  <img width="200" src="src/assets/logo.png" alt="logo">
</p>

# vue3-markdown-it

[![GitHub package.json version](https://img.shields.io/github/package-json/v/JanGuillermo/vue3-markdown-it)](https://www.npmjs.com/package/vue3-markdown-it) [![Build Status](https://travis-ci.com/JanGuillermo/vue3-markdown-it.svg?branch=master)](https://travis-ci.com/JanGuillermo/vue3-markdown-it) [![codecov](https://codecov.io/gh/JanGuillermo/vue3-markdown-it/branch/master/graph/badge.svg)](https://codecov.io/gh/JanGuillermo/vue3-markdown-it) [![Dependencies Status](https://david-dm.org/JanGuillermo/vue3-markdown-it.svg)](https://david-dm.org/JanGuillermo/vue3-markdown-it) [![Known Vulnerabilities](https://snyk.io/test/github/JanGuillermo/vue3-markdown-it/badge.svg?targetFile=package.json)](https://snyk.io/test/github/JanGuillermo/vue3-markdown-it?targetFile=package.json) [![npm](https://img.shields.io/npm/dt/vue3-markdown-it)](https://www.npmjs.com/package/vue3-markdown-it)

> A Vue 3 [markdown-it](https://github.com/markdown-it/markdown-it) wrapper plugin.

## Installation
```
npm install vue3-markdown-it
```

## Supported Plugins
- [markdown-it](https://github.com/markdown-it/markdown-it) - __The one__ that started it all
- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr) - Add abbreviations
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) - Add anchors
- [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist) - Add definition lists
- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) - Add emojis
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) - Add footnotes
- [markdown-it-highlightjs](https://github.com/valeriangalliat/markdown-it-highlightjs) - Add highlighting for code blocks
- [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins) - Add `<ins>` tags
- [markdown-it-latex](https://github.com/tylingsoft/markdown-it-latex) - Add LaTeX formatting
- [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark) - Add marking/highlighting
- [markdown-it-strikethrough-alt](https://github.com/jay-hodgson/markdown-it-strikethrough-alt) - Add strikethrough
- [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub) - Add subscript
- [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup) - Add superscript
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) - Add task lists
- [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right) - Add table of contents

## Usage
### Global Use
```js
import { createApp } from 'vue';
import VueMarkdownIt from 'vue3-markdown-it';

const app = createApp();

app.use(VueMarkdownIt);
```

### CSS
If you want to use LaTeX, you'll have to import a CSS file from [markdown-it-latex](https://github.com/tylingsoft/markdown-it-latex).
```js
import 'markdown-it-latex/dist/index.css';
```

If you want to use highlighting for code blocks, you'll have to import a CSS file from [highlight.js](https://github.com/highlightjs/highlight.js). View more styles [here](https://github.com/highlightjs/highlight.js/tree/master/src/styles). The code sample below imports the Monokai styling.
```js
import 'highlight.js/styles/monokai.css';
```

### Single Use
```vue
<template>
  <div>
    <vue3-markdown-it :source='source' />
  </div>
</template>

<script>
import VueMarkdownIt from 'vue3-markdown-it';

export default {
  components: {
    VueMarkdownIt
  },
  data() {
    return {
      source: '# Hello World!'
    }
  }
}
</script>
```

## Props
The following properties are supported:

### `anchor`
> View [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) for more information.

Type: `Object` | Default value: `null`

### `breaks`
> Convert `\n` in paragraphs into `<br>`.

Type: `Boolean` | Default value: `false`

### `emoji`
> View [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) for more information.

Type: `Object` | Default value: `null`

### `highlight`
> View [markdown-it-highlightjs](https://github.com/valeriangalliat/markdown-it-highlightjs) for more information.

Type: `Object` | Default value: `null`

### `html`
> Enable HTML tags in source.

Type: `Boolean` | Default value: `false`

### `langPrefix`
> CSS language prefix for fenced blocks. Can be useful for external highlighters.

Type: `String` | Default value: `language-`

### `quotes`
> Double + single quotes replacement pairs, when typographer enabled and smartquotes on. Could be either a String or an Array. *For example*, you can use `«»„“` for Russian, `„“‚‘` for German, and `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).

Type: `String | String[]` | Default value: `“”‘’`

### `source`
> Content to be rendered into markdown.

Type: `String` | Default value: `null`

### `tasklists`
> View [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) for more information.

Type: `Object` | Default value: `null`

### `toc`
> View [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right) for more information.

Type: `Object` | Default value: `null`

### `typographer`
> Enable some language-neutral replacement + quotes beautification.

Type: `Boolean` | Default value: `false`

### `xhtmlOut`
> Use `/` to close single tags (`<br />`).

Type: `Boolean` | Default value: `false`

## License
[MIT](https://github.com/JanGuillermo/vue3-markdown-it/blob/master/LICENSE)
