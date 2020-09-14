import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItDeflist from 'markdown-it-deflist';
import MarkdownItEmoji from 'markdown-it-emoji';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';
import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

const md = new MarkdownIt();
const render = (source) => md.render(dedent(source));

md.use(MarkdownItAbbr)
  .use(MarkdownItDeflist)
  .use(MarkdownItEmoji)
  .use(MarkdownItFootnote)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists);

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

  it('should be able to support subscript', async () => {
    source = 'H~2~0';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</sub>');
  });

  it('should be able to support superscript', async () => {
    source = '29^th^';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.html()).toContain('</sup>');
  });

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

  it('should be able to support emojis', async () => {
    source = ':tada:';
    const result = render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
    expect(wrapper.text()).toEqual('🎉');
  });
});
