import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/plugins/i18n'
import $ from "jquery";
import 'foundation-sites'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {} from '@fortawesome/free-solid-svg-icons'

library.add()

createApp(App)
    .use(router)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .directive('foundation', {
        mounted(el) {
            (<any>$(el)).foundation()
        },
        beforeUnmount(el) {
            (<any>$(el)).foundation("destroy");
        }
    })
    .mount('#app')
