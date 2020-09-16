import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/vue-markdown-it';

beforeEach(() => {
  global.wrapper = mount(VueMarkdownIt);
});

afterAll(() => {
  delete global.wrapper;
});
