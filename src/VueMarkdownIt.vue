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
import MarkdownItHighlightjs from 'markdown-it-highlightjs';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItLatex from 'markdown-it-latex';
import MarkdownItMark from 'markdown-it-mark';
import MarkdownItStrikethroughAlt from 'markdown-it-strikethrough-alt';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';
import MarkdownItTOC from 'markdown-it-toc-done-right';
import 'highlight.js/styles/default.css';
import 'markdown-it-latex/dist/index.css';

export default {
  name: 'vue3-markdown-it',
  props: {
    anchor: {
      type: Object,
      default: () => ({})
    },
    breaks: {
      type: Boolean,
      default: false
    },
    emoji: {
      type: Object,
      default: () => ({})
    },
    highlight: {
      type: Object,
      default: () => ({})
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
      default: () => ({})
    },
    toc: {
      type: Object,
      default: () => ({})
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
    this.renderMarkdown();
  },
  updated() {
    this.renderMarkdown();
  },
  methods: {
    renderMarkdown() {
      this.md = new MarkdownIt();

      this.md
        .use(MarkdownItAbbr)
        .use(MarkdownItAnchor, this.anchor)
        .use(MarkdownItDeflist)
        .use(MarkdownItEmoji, this.emoji)
        .use(MarkdownItFootnote)
        .use(MarkdownItHighlightjs, this.highlight)
        .use(MarkdownItIns)
        .use(MarkdownItLatex)
        .use(MarkdownItMark)
        .use(MarkdownItStrikethroughAlt)
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

      this.$refs.md.innerHTML = this.md.render(dedent(this.source));
    }
  }
};
</script>
