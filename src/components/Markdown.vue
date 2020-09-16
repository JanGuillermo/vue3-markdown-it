<template lang="pug">
section.flex.justify-center.gap-4
  label(v-for='control in controls')
    input(v-model='options[control]', type='checkbox')
    | {{ control }}
main.w-full.max-w-screen-xl.flex-1.flex.gap-8.overflow-hidden
  textarea.source(v-model='source')
  vue3-markdown-it.markdown-body(:source='source', v-bind='options')
</template>

<script>
import Example from '@/components/Example.md';

export default {
  data() {
    return {
      source: '',
      options: {},
      controls: ['breaks', 'html', 'typographer']
    };
  },
  mounted() {
    this.source = Example;
  }
};
</script>

<style lang="scss" scoped>
@import '~github-markdown-css/github-markdown.css';
@import '~highlight.js/styles/default.css';
@import '~markdown-it-latex/dist/index.css';

.source {
  @apply w-full rounded-md border-0 p-4 h-full;
}

.markdown-body {
  @apply bg-white w-full rounded-md border-0 p-4 h-full overflow-auto;
}
</style>
