import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItDeflist from 'markdown-it-deflist';
import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

const md = new MarkdownIt();
const render = (source) => md.render(dedent(source));

md.use(MarkdownItAbbr).use(MarkdownItDeflist);

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
});
