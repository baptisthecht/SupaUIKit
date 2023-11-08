<template>
    <header class="flex justify-between items-center py-7 mx-auto max-w-[1300px]">
        <div class="flex items-center gap-4">
            <img src="Avatar.png" alt="" class="w-8 h-8">
            <h1 class="font-semibold text-xl text-dark tracking-tight">Baptist Hecht Designs</h1>
        </div>
        <div>
            <ul class="flex gap-10 font-medium text-dark">
                <li><a href="/components">Components</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/docs">Docs</a></li>
            </ul>
        </div>
        <svg @click="showSearchModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer text-dark">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </header>
    <SearchModal/>
</template>

<script>
import SearchModal from '@/components/SearchModal.vue'
export default {
    name: "HeaderComponent",
    methods: {
        showSearchModal() {
            this.$store.commit('showSearchModal')
        }
    },
    components: {
        SearchModal
    },
}
</script>

<style>

</style>