import {fileURLToPath, URL} from "node:url";
import {resolve, dirname} from "node:path";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/plugins/i18n/locales/**')
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
                additionalData: `
                    @import "./src/_settings.scss";
                    @import "./src/_mixins.scss";
                    `,
            },
        },
    },
})
