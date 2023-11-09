<template>
    <HeaderComponent/>
    <WelcomeContentComponent/>
    <LogoClouds/>
    <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import WelcomeContentComponent from '@/components/WelcomeContentComponent.vue'
import LogoClouds from '@/components/LogoClouds.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: "HomePage",
    components: {
    HeaderComponent,
    WelcomeContentComponent,
    LogoClouds,
    FooterComponent
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