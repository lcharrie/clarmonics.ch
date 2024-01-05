/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_BASE_URL: string
    readonly VITE_DEFAULT_LOCALE: string
    readonly VITE_FALLBACK_LOCALE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
