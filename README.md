<p align="center">
  <img width="200" src="logo.png" alt="logo">
</p>

# vue-markdown-it

![GitHub package.json version](https://img.shields.io/github/package-json/v/JanGuillermo/vue-markdown-it) [![Build Status](https://travis-ci.com/JanGuillermo/vue-markdown-it.svg?branch=master)](https://travis-ci.com/JanGuillermo/vue-markdown-it) [![codecov](https://codecov.io/gh/JanGuillermo/vue-markdown-it/branch/master/graph/badge.svg)](https://codecov.io/gh/JanGuillermo/vue-markdown-it) [![Dependencies Status](https://david-dm.org/JanGuillermo/vue-markdown-it.svg)](https://david-dm.org/JanGuillermo/vue-markdown-it) ![npm](https://img.shields.io/npm/dt/@theonlyjan/vue-markdown-it)

> A Vue [markdown-it](https://github.com/markdown-it/markdown-it) wrapper plugin.

## Installation
```
npm install @theonlyjan/vue-markdown-it
```

## Supported Plugins
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr)
- [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist)
- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins)
- [markdown-it-latex](https://github.com/tylingsoft/markdown-it-latex)
- [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark)
- [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub)
- [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup)
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists)

## Usage
### Global Use
```js
import { createApp } from 'vue';
import VueMarkdownIt from '@theonlyjan/vue-markdown-it';

const app = createApp();

app.use(VueMarkdownIt);
```

### Single Use
```vue
<template>
  <div>
    <vue-markdown-it :source='source' />
  </div>
</template>

<script>
import VueMarkdownIt from '@theonlyjan/vue-markdown-it';

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

### `breaks`
> Convert `\n` in paragraphs into `<br>`.

Type: `Boolean` | Default value: `false`

### `emoji`
> View [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) for more information.

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

### `typographer`
> Enable some language-neutral replacement + quotes beautification.

Type: `Boolean` | Default value: `false`

### `xhtmlOut`
> Use `/` to close single tags (`<br />`).

Type: `Boolean` | Default value: `false`

| Prop        | Description | Default Value |
| :---------: | ----------- | :-----------: |
| tasklists   | Available options: *enabled*, *label*, & *labelAfter*. View [here](https://github.com/revin/markdown-it-task-lists) for more information. | {} |

## License
[MIT](https://github.com/JanGuillermo/vue-markdown-it/blob/master/LICENSE)
