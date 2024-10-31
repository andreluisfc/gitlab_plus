// entrypoints/example-ui.content/index.ts
import { createApp } from 'vue';
import App from '@/entrypoints/popup/App.vue';

export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
  },
});