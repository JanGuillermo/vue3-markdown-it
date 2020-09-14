<template>
  <div ref="md" />
</template>

<script>
import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItDeflist from 'markdown-it-deflist';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';

export default {
  name: 'vue-markdown-it',
  props: {
    breaks: {
      type: Boolean,
      default: false
    },
    html: {
      type: Boolean,
      default: false
    },
    langPrefix: {
      type: String,
      default: 'language-'
    },
    quotes: {
      type: String,
      default: '“”‘’'
    },
    source: {
      type: String,
      default: ''
    },
    typographer: {
      type: Boolean,
      default: false
    },
    xhtmlOut: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      md: null
    };
  },
  mounted() {
    this.initializeMarkdown();
  },
  updated() {
    this.renderMarkdown();
  },
  methods: {
    initializeMarkdown() {
      this.md = new MarkdownIt();

      this.md
        .use(MarkdownItAbbr)
        .use(MarkdownItDeflist)
        .use(MarkdownItFootnote)
        .use(MarkdownItSub)
        .use(MarkdownItSup);

      this.md.set({
        breaks: this.breaks,
        html: this.html,
        langPrefix: this.langPrefix,
        quotes: this.quotes,
        typographer: this.typographer,
        xhtmlOut: this.xhtmlOut
      });

      this.renderMarkdown();
    },
    renderMarkdown() {
      this.$refs.md.innerHTML = this.md.render(dedent(this.source));
    }
  }
};
</script>
