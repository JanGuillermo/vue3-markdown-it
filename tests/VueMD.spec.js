import dedent from 'dedent-js';
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

const md = new MarkdownIt();

md.use(MarkdownItAbbr);

describe('VueMarkdownIt unit tests', () => {
  let wrapper;
  let source;

  beforeAll(() => {
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
    const result = md.render(source);

    expect(wrapper.html()).toContain(result);
  });

  it('should update with "<h2>Hello World!</h2>"', async () => {
    source = '## Hello World!';
    const result = md.render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
  });

  it('should be able to support abbreviations', async () => {
    source = `
      *[D4C]: Dirty Deeds Done Dirt Cheap
      D4C is such a bizarre stand.
    `;
    source = dedent(source);
    const result = md.render(source);

    await wrapper.setProps({ source });
    expect(wrapper.html()).toContain(result);
  });
});
