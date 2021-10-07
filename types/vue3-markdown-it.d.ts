import type { App } from 'vue'
import type { TocOptions } from 'markdown-it-toc-done-right';
import type { AnchorOptions } from 'markdown-it-anchor';
import type { Options as EmojiOptions } from 'markdown-it-emoji';

interface TaskListOptions {
  enabled?: boolean;
  label?: boolean;
  labelAfter?: boolean;
}

interface HighlightJsOptions {
  /**
    * Whether to automatically detect language if not specified.
    */
  auto?: boolean | undefined;

  /**
    * Whether to add the `hljs` class to raw code blocks (not fenced blocks).
    */
  code?: boolean | undefined;

  /**
    * Register other languages which are not included in the standard pack.
    */
  register?: {
      [language: string]: (hljs?: HLJSApi) => Language;
  } | undefined;

  /**
    * Whether to highlight inline code.
    */
  inline?: boolean | undefined;
}

interface VueMarkdownItProps {
  anchor?: AnchorOptions
  emoji?: EmojiOptions
  highlight?: HighlightJsOptions
  tasklists?: TaskListOptions
  toc?: TocOptions
  langPrefix?: string
  quotes?: string
  source?: string
  html?: boolean
  breaks?: boolean
  linkify?: boolean
  typographer?: boolean
  xhtmlOut?: boolean
}

export declare const VueMarkdownIt: new () => {
    $props: VueMarkdownItProps;
};

export function install(app: App)
