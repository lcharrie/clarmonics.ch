<script setup lang="ts">
import Header from "@/components/TheHeader.vue"
import Footer from "@/components/TheFooter.vue"
import {watch} from "vue"
import {useRoute} from "vue-router"
import {useI18n} from "vue-i18n"
import LanguageSwitcher from "@/components/TheLanguageSwitcher.vue";
import Navbar from "@/components/TheNavbar.vue";

const {t, te} = useI18n()
const route = useRoute()
const defaultTitle: string = import.meta.env.VITE_APP_NAME

watch(route, (to) => {
    if (to.name && te(`${String(to.name)}.title`)) {
        document.title = t(`${String(to.name)}.title`).concat(' - ').concat(defaultTitle)
        return
    }
    document.title = defaultTitle
})
</script>

<template>
    <div class="off-canvas-wrapper">
        <div class="off-canvas position-right" id="offCanvasRightMenu" v-foundation data-off-canvas data-transition="overlap">
            <Navbar/>
            <LanguageSwitcher/>
        </div>
        <div class="off-canvas-content" data-off-canvas-content>
            <Header/>
            <RouterView/>
            <Footer/>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
