import MarkdownIt from 'markdown-it';
import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

describe('VueMarkdownIt unit tests', () => {
  const md = new MarkdownIt();
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
});
