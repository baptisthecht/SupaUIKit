<template>
  <HeaderComponent/>
  <div class="flex flex-col p-8 pt-20 mx-auto max-w-[1300px]">
    <h1 class="font-semibold text-dark text-xl py-8 px-10 flex gap-4 items-center"><a href="/">Home</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg><span>Components</span></h1>    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="(category, index) in data_category" :key="index" class="m-4 rounded-2xl  hover:bg-white/60 cursor-pointer">
        <router-link v-if="category.soon == false" :to="{ name: 'ComponentCategoryPage', params: { name: category.name } }">
          <div class="h-64 bg-white rounded-xl m-2 flex flex-col justify-center items-center" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.2)">
            <div v-html="category.components[10].codeHtml"></div>
          </div>
          <div class="text-lg font-medium text-darker flex justify-between items-center my-3 mx-5">
            <span>{{ category.name }}</span>
            <span>{{ category.components.length }}+ variants</span>
          </div>        
        </router-link>
        <div v-if="category.soon == true">
          <div class="h-64 bg-white rounded-xl m-2 flex flex-col justify-center items-center" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.2)">
            <div>Soon...</div>
          </div>
          <div class="text-lg font-medium text-darker flex justify-between items-center my-3 mx-5">
            <span>{{ category.name }}</span>
            <span>{{ category.components.length }}+ variants</span>
          </div>        
        </div>
      </div>
    </div>
  </div>  
  <FooterComponent/>
</template>

<script>
import BDD from '../bdd.js';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref } from 'vue';

export default {
    name: "ComponentsPage",
    components: {
        HeaderComponent,
        FooterComponent

    },
    setup(){
      class Category {
        constructor(categoryName, components, soon){
          this.name = categoryName;
          this.soon = soon;
          this.components = components;
        }
      }

      let data_category = ref([]);
      for(const category of BDD){
        const new_category = new Category(category.categoryName, category.components, category.soon);
        data_category.value.push(new_category);
      }

      return {
        data_category
      }
    }
}
</script>

<style>

</style>