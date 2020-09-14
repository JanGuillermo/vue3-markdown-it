<template>
  <div ref="md" />
</template>

<script>
import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItDeflist from 'markdown-it-deflist';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItLatex from 'markdown-it-latex';
import MarkdownItMark from 'markdown-it-mark';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';
import MarkdownItTOC from 'markdown-it-toc-done-right';
import 'markdown-it-latex/dist/index.css';

export default {
  name: 'vue-markdown-it',
  props: {
    anchor: {
      type: Object,
      default: new Array()
    },
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
    toc: {
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
        .use(MarkdownItAnchor, this.anchor)
        .use(MarkdownItDeflist)
        .use(MarkdownItEmoji, this.emoji)
        .use(MarkdownItFootnote)
        .use(MarkdownItIns)
        .use(MarkdownItLatex)
        .use(MarkdownItMark)
        .use(MarkdownItSub)
        .use(MarkdownItSup)
        .use(MarkdownItTasklists, this.tasklists)
        .use(MarkdownItTOC, this.toc);

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
