<template>
    <HeaderComponent/>
    <WelcomeContentComponent/>
    <LogoClouds/>
    <div class="h-[1000px]"></div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import WelcomeContentComponent from '@/components/WelcomeContentComponent.vue'
import LogoClouds from '@/components/LogoClouds.vue'
export default {
    name: "HomePage",
    components: {
        HeaderComponent,
        WelcomeContentComponent,
        LogoClouds,
    },
    computed: {
        searchModalVisible() {
            return this.$store.state.searchModalVisible
        }
    },
    methods: {
        closeSearchModal() {
            this.$store.commit('hideSearchModal')
        },
    },
}
</script>

<style>

</style>