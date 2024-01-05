import i18n from "@/plugins/i18n/index.ts"
import { nextTick } from "vue"

const Trans = {
    set currentLocale(newLocale: string) {
        i18n.global.locale.value = newLocale
    },
    get defaultLocale(): string {
        return import.meta.env.VITE_DEFAULT_LOCALE
    },
    getPersistedLocale(): string | null {
        const persistedLocale: string | null = localStorage.getItem("user-locale")
        if (persistedLocale !== null && Trans.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            return null
        }
    },
    getUserLocale(): { locale: string, localeNoRegion: string } {
        const locale: string = window.navigator.language ||
            Trans.defaultLocale
        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },
    isLocaleSupported(locale: string): boolean {
        return Trans.supportedLocales.includes(locale)
    },
    get supportedLocales(): string[] {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },
    async switchLanguage(newLocale: string): Promise<void> {
        await Trans.loadLocaleMessages(newLocale)
        Trans.currentLocale = newLocale
        document.querySelector("html")?.setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    },
    async loadLocaleMessages(locale: string): Promise<void> {
        if(!i18n.global.availableLocales.includes(locale)) {
            const messages = await import(`@/plugins/i18n/locales/${locale}.json`)
            i18n.global.setLocaleMessage(locale, messages.default)
        }

        return nextTick()
    },
    guessDefaultLocale(): string {
        const userPersistedLocale: string | null = Trans.getPersistedLocale()
        if (userPersistedLocale) {
            return userPersistedLocale
        }
        const userPreferredLocale = Trans.getUserLocale()
        if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale
        }
        if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion
        }
        return Trans.defaultLocale
    },
    async routeMiddleware(to: any, _from: any, next: any): Promise<void> {
        const paramLocale: string = to.params.locale
        if (!Trans.isLocaleSupported(paramLocale)) {
            return next(Trans.guessDefaultLocale() + to.fullPath)
        }
        await Trans.switchLanguage(paramLocale)
        return next()
    },
    get currentLocale(): string {
        return i18n.global.locale.value
    },
    i18nRoute(to: any): any {
        return {
            ...to,
            params: {
                locale: Trans.currentLocale,
                ...to.params
            }
        }
    },
}
export default Trans
