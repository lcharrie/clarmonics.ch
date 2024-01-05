<script setup lang="ts">
import Tr from "@/plugins/i18n/translation"
</script>

<template>
    <div id="nav">
        <ul class="menu">
            <li>
                <router-link :to="Tr.i18nRoute({ name: 'home'})">{{ $t("home.nav") }}</router-link>
            </li>
            <li>
                <router-link :to="Tr.i18nRoute({ name: 'about'})">{{ $t('about.nav') }}</router-link>
            </li>
            <li>
                <router-link :to="Tr.i18nRoute({ name: 'media'})">{{ $t('media.nav') }}</router-link>
            </li>
            <li>
                <router-link :to="Tr.i18nRoute({ name: 'projects'})">{{ $t('projects.nav') }}</router-link>
            </li>
            <li>
                <router-link :to="Tr.i18nRoute({ name: 'contacts'})">{{ $t('contacts.nav') }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>
