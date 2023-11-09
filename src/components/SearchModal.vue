<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-50" @close="closeSearchModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 text-opacity-40" aria-hidden="true" />
                <ComboboxInput class="relative h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 focus:ring-0 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" />
                <span class="absolute right-5 top-4 ml-3 flex-none text-xs font-semibold text-gray-500">
                  <kbd class="font-sans">⌘</kbd>
                  <kbd class="font-sans">S</kbd>
                </span>
              </div>

              <ComboboxOptions v-if="query === '' || filteredProjects.length > 0" static class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
                <li class="p-2">
                  <h2 v-if="query === ''" class="mb-2 mt-4 px-3 text-xs font-semibold text-gray-900">Recent searches</h2>
                  <ul class="text-sm text-gray-700">
                    <ComboboxOption v-for="(project, i) in query === '' ? recent : filteredProjects" :key="i" :value="project" as="template" v-slot="{ active }">
                      <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
                        <CodeBracketIcon :class="['h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100']" aria-hidden="true" />
                        <span class="ml-3 flex-auto truncate">{{ project.name }}</span>
                        <span v-if="active" class="ml-3 flex-none text-gray-500">Jump to...</span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
                <li v-if="query === ''" class="p-2">
                  <h2 class="sr-only">Quick actions</h2>
                  <ul class="text-sm text-gray-700">
                    <ComboboxOption v-for="action in quickActions" :key="action.shortcut" :value="action" as="template" v-slot="{ active }">
                      <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
                        <component :is="action.icon" :class="['h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100']" aria-hidden="true" />
                        <span class="ml-3 flex-auto truncate">{{ action.name }}</span>
                        <span class="ml-3 flex-none text-xs font-semibold text-gray-500">
                          <kbd class="font-sans">⌘</kbd>
                          <kbd class="font-sans">{{ action.shortcut }}</kbd>
                        </span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <div v-if="query !== '' && filteredProjects.length === 0" class="px-6 py-14 text-center sm:px-14">
                <CodeBracketIcon class="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
                <p class="mt-4 text-sm text-gray-900">We couldn't find any components with that term. Please try again.</p>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { DocumentTextIcon, TagIcon, CodeBracketIcon, CubeIcon } from '@heroicons/vue/24/outline'
import BDD from '../bdd.js';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const store = useStore()

let data_components = ref([]);

for(const category of BDD){
  for(let i = 0; i < category.components.length; i++){
    const component = category.components[i];
    component.idincategory = i;
    data_components.value.push(component);
  }
}


const projects = data_components.value;


const quickActions = [
  { name: 'See docs...', icon: DocumentTextIcon, shortcut: 'D', url: '/docs' },
  { name: 'Browse templates...', icon: CubeIcon, shortcut: 'E', url: '/templates' },
  { name: 'Browse categories...', icon: TagIcon, shortcut: 'F', url: '/components' },
]

const open = computed(() => store.state.searchModalVisible)
const query = ref('')
const filteredProjects = computed(() =>
  query.value === ''
    ? []
    : projects.filter((project) => {
        return project.name.toLowerCase().includes(query.value.toLowerCase())
      })
)



const saveRecentSearches = (recents) => {
  localStorage.setItem('recentSearches', JSON.stringify(recents));
};

const loadRecentSearches = () => {
  const recentSearchesJSON = localStorage.getItem('recentSearches');
  if (recentSearchesJSON) {
    return JSON.parse(recentSearchesJSON);
  } else {
    return [{
        name: 'Primary Button',
        idincategory: 1,
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<button class="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">Log in</button>',
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      }];
  }
};

const recent = ref([]);
recent.value = loadRecentSearches();

function onSelect(item) {
  recent.value = [item, ...recent.value.filter((comp) => comp.idincategory !== item.idincategory || comp.category !== item.category).slice(0, 2)]
  saveRecentSearches(recent.value);
  if(!item.url){
    const url = '/'+item.category+'#'+'comp'+item.idincategory;
    window.location = url
  }else{
    window.location = item.url
  }

}

const closeSearchModal = () => {
  store.commit('closeSearchModal')
}

document.onkeydown = function(e) {
    if (e.key === "d" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); 
        window.location = '/docs'
    }
    if (e.key === "e" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); 
        window.location = '/templates'
    }
    if (e.key === "f" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); 
        window.location = '/components'
    }
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); 
        if(store.state.searchModalVisible){
          store.commit('closeSearchModal')
        }else{
        store.commit('showSearchModal')
    }
  }
};

</script>