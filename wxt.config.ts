import {defineConfig} from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    extensionApi: 'chrome',
    modules: ['@wxt-dev/module-vue'],
    manifest: {
        // web_accessible_resources: ["@/entrypoints/content.ts"],
        permissions: ["activeTab", "scripting", "storage"],
        action: {},
    }
});
