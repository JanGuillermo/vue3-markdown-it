import VueMarkdownIt from './vue-markdown-it';

const install = (Vue) => {
  Vue.component(VueMarkdownIt.name, VueMarkdownIt);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

VueMarkdownIt.install = install;

export default VueMarkdownIt;
