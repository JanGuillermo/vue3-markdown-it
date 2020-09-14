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
import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

const md = new MarkdownIt();
const render = (source) => md.render(dedent(source));

md.use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItDeflist)
  .use(MarkdownItEmoji)
  .use(MarkdownItFootnote)
  .use(MarkdownItIns)
  .use(MarkdownItLatex)
  .use(MarkdownItMark)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);

describe('VueMarkdownIt unit tests', () => {
  let wrapper;
  let source;

  beforeEach(() => {
    source = '# Hello World!';
    wrapper = mount(VueMarkdownIt, {
      props: {
        source
      }
    });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it('should contain "Hello World!" text', async () => {
    expect(wrapper.text()).toContain('Hello World!');
  });

  it('should contain "<h1>Hello World!</h1>"', async () => {
    const result = render(source);

    expect(wrapper.html()).toContain(result);
  });

  it('should update with "<h2>Hello World!</h2>"', async () => {
    source = '## Hello World!';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
  });

  // Tests markdown-it-abbr
  it('should be able to support abbreviations', async () => {
    source = `
      *[D4C]: Dirty Deeds Done Dirt Cheap
      D4C is such a bizarre stand.
    `;
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</abbr>');
  });

  // Tests markdown-it-anchor
  it('should be able to support anchors', async () => {
    source = `
      # First header
      Lorem ipsum.
    `;
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('first-header');
  });

  // Tests markdown-it-deflist
  it('should be able to support definition lists', async () => {
    source = `
      First Term
      : This is the definition of the first term.
      
      Second Term
      : This is one definition of the second term.
      : This is another definition of the second term.
    `;
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</dl>');
    expect(wrapper.html()).toContain('</dt>');
    expect(wrapper.html()).toContain('</dd>');
  });

  // Tests markdown-it-emoji
  it('should be able to support emojis', async () => {
    source = ':tada:';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.text()).toEqual('🎉');
  });

  // Tests markdown-it-footnote
  it('should be able to support footnotes', async () => {
    source = `
      Here is a footnote reference,[^1] and another.[^longnote]

      [^1]: Here is the footnote.
      
      [^longnote]: Here's one with multiple blocks.
      
          Subsequent paragraphs are indented to show that they
      belong to the previous footnote.
    `;
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('footnote-ref');
    expect(wrapper.html()).toContain('footnote-backref');
  });

  // Tests markdown-it-ins
  it('should be able to support <insert> tags', async () => {
    source = '++inserted++';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</ins>');
  });

  // Tests markdown-it-latex
  it('should be able to support LaTeX', async () => {
    source = '`$E = mc^2$`';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('katex');
  });

  // Tests markdown-it-mark
  it('should be able to support <mark> tags', async () => {
    source = '==marked==';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</mark>');
  });

  // Tests markdown-it-sub
  it('should be able to support subscript', async () => {
    source = 'H~2~0';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</sub>');
  });

  // Tests markdown-it-sup
  it('should be able to support superscript', async () => {
    source = '29^th^';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</sup>');
  });

  // Tests markdown-it-task-lists
  it('should be able to support task lists', async () => {
    source = `
      - [ ] unchecked
      - [x] checked
    `;
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('checkbox');
  });

  // Tests markdown-it-toc-done-right
  it('should be able to support table of contents', async () => {
    source = `
      [[toc]]

      # First heading
      Swag

      ## Second heading
      Awesome sauce!
    `;
    const result = render(source);

    console.log(result);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('table-of-contents');
  });
});
