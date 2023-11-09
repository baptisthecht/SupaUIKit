<template>
    <HeaderComponent/>
    <WaitingForComponent/>
<FooterComponent/>
</template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import WaitingForComponent from '@/components/WaitingForComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  export default {
      name: "DocsPage",
      components: {
          HeaderComponent,
          WaitingForComponent,
          FooterComponent
      }
  }
  </script>
  
  <style>
  
  </style>