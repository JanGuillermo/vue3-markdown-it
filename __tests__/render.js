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
import MarkdownItTOC from 'markdown-it-toc-done-right';
import MarkdownItTasklists from 'markdown-it-task-lists';

const md = new MarkdownIt();
const render = (source) => md.render(source);

md.use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItDeflist)
  .use(MarkdownItEmoji)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItIns)
  .use(MarkdownItLatex)
  .use(MarkdownItMark)
  .use(MarkdownItStrikethroughAlt)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);

export default render;
