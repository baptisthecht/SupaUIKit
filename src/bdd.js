const components = [
  {
    categoryName: 'Buttons',
    soon: false,
    components: [
      {
        name: 'Primary Button',
        category: 'Buttons',
        codeReact: `import React from 'react';

const PrimaryButton = () => {
  return (
    <button className="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
      Log in
    </button>
  );
}

export default PrimaryButton;`,
        codeVue: `<template>
  <button class="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
    Log in
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
};
</script>

<style scoped>
</style>`,
        codeHtml: `<button class="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
  Log in
</button>`,
        codeAngular: `<button class="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
  Log in
</button>`,
      },
      {
        name: 'Secondary Button',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<a class="font-medium text-lg flex items-center gap-3 text-darker">Register</a>',
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Primary & Secondary group',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<div class="flex gap-5">
  <button class="bg-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">Log in</button>
  <a class="font-medium text-lg flex items-center gap-3 text-darker">Register</a>
</div>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Primary Button with icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<button class="bg-gradient1 w-max px-6 py-2 pr-4 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
  <div>Add </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 ml-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
  </svg>
</button>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Primary Button with rotating icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<button class="group bg-gradient1 w-max px-6 py-2 pr-4 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
  <div>Add </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 ml-2 transition ease-in-out duration-300 group-hover:rotate-[90deg]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
  </svg>
</button>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Secondary Button with icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<a class="font-medium text-lg flex items-center gap-2 text-darker">Remove 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
    </path>
  </svg>
</a>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Secondary Button with rotating icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<a class="group font-medium text-lg flex items-center gap-2 text-darker">Remove 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 transition ease-in-out duration-300 group-hover:rotate-[-15deg] group-hover:-translate-y-1">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
    </path>
  </svg>
</a>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Secondary Button with hover sliding arrow',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<a href="/docs" class="font-medium text-lg flex items-center gap-3 text-darker group">
        See more 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition ease-in-out duration-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </a>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Primary & Secondary group with icons',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<div class="flex gap-5">
  <button class="bg-gradient1 w-max px-6 py-2 pr-4 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">
    <div>Add</div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 ml-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  </button>
  <a class="font-medium text-lg flex items-center gap-2 text-darker">
    Remove 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
      </path>
    </svg>
  </a>
</div>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Special CTA with hover shadow',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<button class="bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg shadowbutton">Explore</button>',
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Special CTA with hover shadow and icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<button class="bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center gap-3 transition ease-in-out duration-300 text-lg shadowbutton">
  <span>Buy</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
    </path>
  </svg>
</button>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Special CTA with hover shadow and rotating icon',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: `<button class="group bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center gap-3 transition ease-in-out duration-300 text-lg shadowbutton">
  <span>Buy</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 transition ease-in-out duration-300 group-hover:rotate-[-15deg]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
    </path>
  </svg>
</button>`,
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
    ]
  },
  {
    categoryName: 'Cards',
    soon: true,
    components: [
      {
        name: 'Primary Button',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<button style="border: 1px solid blue">Primary</button>',
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Secondary Button',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<button class="btn btn-primary">Primary</button>',
        codeAngular: '<button class="btn btn-primary">Primary</button>',
      },
      {
        name: 'Primary CTA',
        category: 'Buttons',
        codeReact: '<Button variant="primary">Primary</Button>',
        codeVue: '<Button variant="primary">Primary</Button>',
        codeHtml: '<button class="btn btn-primary">Primary</button>',
       

        },
        {
          name: 'Secondary CTA',
          category: 'Buttons',
          codeReact: '<Button variant="primary">Primary</Button>',
          codeVue: '<Button variant="primary">Primary</Button>',
          codeHtml: '<button class="btn btn-primary">Primary</button>',
          codeAngular: '<button class="btn btn-primary">Primary</button>',
        },
      ]
    },
    {
      categoryName: 'Inputs',
      soon: true,
      components: [
        {
          name: 'Primary Button',
          category: 'Buttons',
          codeReact: '<Button variant="primary">Primary</Button>',
          codeVue: '<Button variant="primary">Primary</Button>',
          codeHtml: '<button class="btn btn-primary">Primary</button>',
          codeAngular: '<button class="btn btn-primary">Primary</button>',
        },
        {
          name: 'Secondary Button',
          category: 'Buttons',
          codeReact: '<Button variant="primary">Primary</Button>',
          codeVue: '<Button variant="primary">Primary</Button>',
          codeHtml: '<button class="btn btn-primary">Primary</button>',
          codeAngular: '<button class="btn btn-primary">Primary</button>',
        },
        {
          name: 'Primary CTA',
          category: 'Buttons',
          codeReact: '<Button variant="primary">Primary</Button>',
          codeVue: '<Button variant="primary">Primary</Button>',
          codeHtml: '<button class="btn btn-primary">Primary</button>',
          codeAngular: '<button class="btn btn-primary">Primary</button>',
        },
        {
          name: 'Secondary CTA',
          category: 'Buttons',
          codeReact: '<Button variant="primary">Primary</Button>',
          codeVue: '<Button variant="primary">Primary</Button>',
          codeHtml: '<button class="btn btn-primary">Primary</button>',
          codeAngular: '<button class="btn btn-primary">Primary</button>',
        },
      ]
    },
    {
      categoryName: 'Modals',
      soon: true,
      components: []
    },
    {
      categoryName: 'Badges',
      soon: true,
      components: []
    },
    {
      categoryName: 'Banners',
      soon: true,
      components: []
    },
    {
      categoryName: 'Parters Logos',
      soon: true,
      components: []
    }
  ]
  module.exports = components;