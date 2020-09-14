<p align="center">
  <img width="200" src="logo.png" alt="logo">
</p>

# vue-markdown-it

[![Build Status](https://travis-ci.com/JanGuillermo/vue-markdown-it.svg?branch=master)](https://travis-ci.com/JanGuillermo/vue-markdown-it) [![codecov](https://codecov.io/gh/JanGuillermo/vue-markdown-it/branch/master/graph/badge.svg)](https://codecov.io/gh/JanGuillermo/vue-markdown-it) [![Dependencies Status](https://david-dm.org/JanGuillermo/vue-markdown-it.svg)](https://david-dm.org/JanGuillermo/vue-markdown-it)

A Vue [markdown-it](https://github.com/markdown-it/markdown-it) wrapper plugin.

## Installation
```
npm install @theonlyjan/vue-markdown-it
```

## Supported Plugins
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr)
- [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist)

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
| Prop        | Description | Default Value |
| :---------: | ----------- | :-----------: |
| breaks      | Convert `\n` in paragraphs into `<br>` | *false* |
| html        | Enable HTML tags in source | *false* |
| langPrefix  | CSS language prefix for fenced blocks. Can be useful for external highlighters. | `language-` |
| quotes      | Double + single quotes replacement pairs, when typographer enabled and smartquotes on. Could be either a String or an Array. *For example*, you can use `«»„“` for Russian, `„“‚‘` for German, and `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp). | `“”‘’` |
| source      | Content to be rendered into Markdown | |
| typographer | Enable some language-neutral replacement + quotes beautification | *false* |
| xhtmlOut    | Use `/` to close single tags (`<br />`) | *false* |

## License
[MIT](https://github.com/JanGuillermo/vue-markdown-it/blob/master/LICENSE)
