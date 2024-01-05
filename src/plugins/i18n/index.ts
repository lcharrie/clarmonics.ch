import {createI18n, type I18nOptions} from "vue-i18n";
import de from "@/plugins/i18n/locales/de.json";

const options: I18nOptions = {
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // set locale
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // set fallback locale
    legacy: false,
    globalInjection: true,
    messages: {de}
}

const i18n = createI18n<false, typeof options>(options)

export default i18n
