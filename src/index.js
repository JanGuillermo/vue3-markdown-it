import VueMarkdownIt from './VueMarkdownIt.vue';

const install = (Vue) => {
  Vue.component(VueMarkdownIt.name, VueMarkdownIt);
};

VueMarkdownIt.install = install;

export default VueMarkdownIt;
