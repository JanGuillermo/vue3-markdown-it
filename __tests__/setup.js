import { mount } from '@vue/test-utils';
import VueMarkdownIt from '@/VueMarkdownIt.vue';

beforeEach(() => {
  global.wrapper = mount(VueMarkdownIt);
});

afterAll(() => {
  delete global.wrapper;
});
