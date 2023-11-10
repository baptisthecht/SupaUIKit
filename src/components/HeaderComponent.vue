<template>
    <header class="flex justify-between items-center p-8 mx-auto max-w-[1300px]">
        <a href="/" class="flex items-center gap-4">
            <img src="Avatar.png" alt="" class="w-8 h-8">
            <h1 class="font-semibold text-xl text-dark tracking-tight">Baptist Hecht Designs</h1>
        </a>
        <div>
            <ul class="hidden md:flex gap-10 font-medium text-dark">
                <li><a href="/components">Components</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/docs">Docs</a></li>
            </ul>
        </div>
        <div class="flex gap-5">
            <svg @click="showSearchModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer text-dark">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <svg @click="updateMobileMenuVisibility" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer text-dark block md:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
        </div>
    </header>
    <div class="md:hidden transition-all ease-in-out duration-300 h-0 overflow-hidden" :class="MobileMenuVisibility ? 'h-[108px] my-10' : ''">
        <ul class="flex flex-col items-center gap-3 font-medium text-dark text-lg">
            <li><a href="/components">Components</a></li>
            <li><a href="/templates">Templates</a></li>
            <li><a href="/docs">Docs</a></li>
        </ul>
    </div>
    <SearchModal/>
</template>

<script>
import SearchModal from '@/components/SearchModal.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    name: "HeaderComponent",
    methods: {
        showSearchModal() {
            this.$store.commit('showSearchModal')
        },
        updateMobileMenuVisibility() {
            this.$store.commit('updateMobileMenuVisibility')
        }
    },
    components: {
        SearchModal,
    },
    setup() {
        const store = useStore();
        const MobileMenuVisibility = computed(() => store.state.MobileMenuVisibility);
        return {
            MobileMenuVisibility
        }
    }
}
</script>

<style>

</style>