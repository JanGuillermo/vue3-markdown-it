<template>
  <div ref="md" />
</template>

<script>
import 'markdown-it-latex/dist/index.css';

import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItDeflist from 'markdown-it-deflist';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItInclude from 'markdown-it-include';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItLatex from 'markdown-it-latex';
import MarkdownItMark from 'markdown-it-mark';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';

export default {
  name: 'vue-markdown-it',
  props: {
    breaks: {
      type: Boolean,
      default: false
    },
    emoji: {
      type: Object,
      default: new Array()
    },
    html: {
      type: Boolean,
      default: false
    },
    include: {
      type: Object,
      default: new Array()
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
    tasklists: {
      type: Object,
      default: new Array()
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
        .use(MarkdownItEmoji, this.emoji)
        .use(MarkdownItFootnote)
        .use(MarkdownItInclude, this.include)
        .use(MarkdownItIns)
        .use(MarkdownItLatex)
        .use(MarkdownItMark)
        .use(MarkdownItSub)
        .use(MarkdownItSup)
        .use(MarkdownItTasklists, this.tasklists);

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
