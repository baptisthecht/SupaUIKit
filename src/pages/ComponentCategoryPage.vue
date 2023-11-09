<template>
  <HeaderComponent />
  <div class="flex flex-col p-8 pt-20 mx-auto max-w-[1300px]">
    <h1 class="font-semibold text-dark text-xl py-8 px-10 flex gap-4 items-center"><a href="/">Home</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg><a href="/components">Components</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg><span>{{cat.categoryName}}</span></h1>   
    <div class="grid grid-cols-1 ">
        <div v-for="(component, index) in cat.components" :key="index" class="m-4 rounded-xl" :id="'comp' + index">
            <div class="text-lg font-medium text-darker flex justify-between items-center my-3 mx-5">
                <span class="dmsans font-medium">{{component.name}}</span>
                <div class="ml-6 flex items-center">
                    <div class="flex space-x-1 rounded-lg bg-gradient-to-r from-gradient1/5 to-gradient2/5 p-0.5" role="tablist" aria-orientation="horizontal">
                        <button 
                        @click="selectTab('preview', index)"  
                        :class="{ 'bg-white shadow': componentStatus[index] === 'preview' }" 
                        class="stroke-slate-600 flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3" id="headlessui-tabs-tab-19" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-21">
                        <svg class="h-5 w-5 flex-none" :class="{ 'stroke-gradient1': componentStatus[index] === 'preview' }" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path>
                          <circle cx="10" cy="10" r="2.25"></circle>
                        </svg>
                        <span class="sr-only lg:not-sr-only lg:ml-2 text-darker/80">Preview</span>
                      </button>
                      <button 
                        @click="selectTab('code', index)" 
                        :class="{ 'bg-white shadow': componentStatus[index] === 'code' }" 
                        class="stroke-slate-600 flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3" id="headlessui-tabs-tab-20" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-22">
                        <svg class="h-5 w-5 flex-none" :class="{ 'stroke-gradient1': componentStatus[index] === 'code' }"  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                          <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path>
                        </svg>
                        <span class="sr-only lg:not-sr-only lg:ml-2 text-darker">Code</span>
                      </button>
                    </div>
                    <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
                    <div class="relative hidden sm:block">
                        <select @change="$event => changeComponentLanguage($event.target.value, index)" class="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-darker focus:shadow-none focus-visible:ring-2 focus-visible:ring-gradient1 sm:text-sm">
                            <option value="html">HTML</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button @click="copyToClipboard(component, index)" class="group transition ease-in-out duration-200 relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex">
                        <svg :class="componentCopy[index] === true ? 'hidden' : '' " class="translate-y-0 h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-darker" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g class="opacity-0">
                                <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <svg :class="componentCopy[index] === false ? 'hidden ' : '' " class="h-8 w-8 rotate-[-8deg] stroke-gradient1" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><g class=""><path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        <span  class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center scale-100 translate-y-0 opacity-100"><span class="rounded-md bg-gradient-to-r from-gradient1 to-gradient2 shadowcopied px-3 py-1 text-[0.625rem] font-semibold uppercase leading-4 tracking-wide text-white drop-shadow-md filter transition ease-in-out duration-200" :class="componentCopy[index] === false ? 'translate-y-2 opacity-0' : '' "><svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6" class="absolute left-1/2 top-full -ml-2 -mt-px text-gradient1"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z" fill="currentColor"></path></svg>Copied!</span></span>
                    </button>
                </div>
            </div>  
            <div v-if="componentStatus[index] === 'preview'" class="h-64 bg-white backdrop-blur backdrop-filter rounded-xl m-2 flex flex-col justify-center items-center cursor-auto" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.15); --tw-bg-opacity: 0.6;">
                <div v-html="component.codeHtml"></div>
            </div>
            <div v-if="componentStatus[index] === 'code' && componentLanguage[index] === 'html'" class="h-content p-0.5 bg-[#202c3c] rounded-xl m-2" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.15);">
                <highlightjs id="code"  language='javascript' :code="component.codeHtml" class="ml-5 max-w-[1300px] overflow-auto my-5" />
            </div>
            <div v-if="componentStatus[index] === 'code' && componentLanguage[index] === 'vue'" class="h-content p-0.5 bg-[#202c3c] rounded-xl m-2" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.15);">
                <highlightjs id="code"  language='javascript' :code="component.codeVue" class="ml-5 max-w-[1300px] overflow-auto my-5" />
            </div>
            <div v-if="componentStatus[index] === 'code' && componentLanguage[index] === 'react'" class="h-content p-0.5 bg-[#202c3c] rounded-xl m-2" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.15);">
                <highlightjs id="code"  language='javascript' :code="component.codeReact" class="ml-5 max-w-[1300px] overflow-auto my-5" />
            </div>
            <div v-if="componentStatus[index] === 'code' && componentLanguage[index] === 'angular'" class="h-content p-0.5 bg-[#202c3c] rounded-xl m-2" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.15);">
                <highlightjs id="code"  language='javascript' :code="component.codeAngular" class="ml-5 max-w-[1300px] overflow-auto my-5" />
            </div>

          </div> 
    </div>
  </div> 
  <FooterComponent /> 
</template>

<script>
import BDD from '../bdd.js';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import hljs from 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
    name: "ComponentCategoryPage",
    components: {
        HeaderComponent,
        highlightjs: hljsVuePlugin.component,
        FooterComponent
    },
    setup(){
        const route = useRoute();
        const cat = BDD.find((cat) => cat.categoryName === route.params.name);

        const componentStatus = ref(cat.components.map(() => 'preview'));
        const componentCopy = ref(cat.components.map(() => false));
        const componentLanguage = ref(cat.components.map(() => 'html'));

        return {
            cat,
            componentStatus,
            hljs,
            componentCopy,
            componentLanguage
        }
    },
    methods: {
        selectTab(tab, index) {
            this.componentStatus[index] = tab;
        },
        copyToClipboard(component, index) {
            switch(this.componentLanguage[index]){
                case 'html':
                    navigator.clipboard.writeText(component.codeHtml);
                    break;
                case 'vue':
                    navigator.clipboard.writeText(component.codeVue);
                    break;
                case 'react':
                    navigator.clipboard.writeText(component.codeReact);
                    break;
                case 'angular':
                    navigator.clipboard.writeText(component.codeAngular);
                    break;
                default:
                    navigator.clipboard.writeText(component.codeHtml);
                    break;
            }
            this.componentCopy[index] = true;
            setTimeout(() => {
                this.componentCopy[index] = false;
            }, 2000);
        },
        changeComponentLanguage(language, index) {
            this.componentLanguage[index] = language;
        }
    }
}



</script>

<style>

</style>