<template>
    <HeaderComponent/>
    <WaitingForComponent/>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import WaitingForComponent from '@/components/WaitingForComponent.vue';
  export default {
      name: "TemplatesPage",
      components: {
          HeaderComponent,
          WaitingForComponent
      }
  }
  </script>
  
  <style>
  
  </style>