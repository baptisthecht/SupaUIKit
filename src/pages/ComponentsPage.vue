<template>
  <HeaderComponent/>
  <WaitingForComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import WaitingForComponent from '@/components/WaitingForComponent.vue';
export default {
    name: "ComponentsPage",
    components: {
        HeaderComponent,
        WaitingForComponent
    }
}
</script>

<style>

</style>