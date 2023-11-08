<template>
    <div class="mx-auto max-w-[1300px] flex">
        <div class="flex flex-col gap-12 w-3/5 justify-center z-10">
            <div class="flex gap-6 items-center">
                <img src="../assets/supa-icon.png" alt="" class="h-14 w-14">
                <h1 class="font-semibold text-6xl text-darkest tracking-tight">Supa <span class="bg-gradient-to-r from-gradient2 to-gradient1 bg-clip-text text-transparent w-min">UI Kit</span></h1> 
            </div>
            <h1 class="text-4xl font-medium tracking-tight text-darker">Moderns, cleans and supa <br/>customizables components.</h1>
            <div class="flex gap-8 w-[900px]">
                <div  class="w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-gradient-to-r from-gradient1 to-gradient2 mb-3 text-white flex items-center justify-center font-bold">M</div>
                    <h1 class="text-2xl font-semibold text-gradient1">Multi-framework</h1>
                </div>
                <div  class="w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap pr-10" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-gradient-to-r from-gradient1 to-gradient2 mb-3 text-white flex items-center justify-center font-bold">+</div>
                    <h1 class="text-2xl font-semibold text-gradient1">+300 Components</h1>
                </div>
                <div  class="w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-gradient-to-r from-gradient1 to-gradient2 mb-3 text-white flex items-center justify-center font-bold">&</div>
                    <h1 class="text-2xl font-semibold text-gradient1">Light & Dark</h1>
                </div>
            </div>
            <div class="flex items-center gap-8">
            <button style="box-shadow: 0px 4px 48px rgba(130, 115, 238, 0.7)" class="bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg">Explore
            </button>  
            <a href="/docs" class="font-medium text-lg flex items-center gap-3">Read the docs <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg></a>
            </div>

            
        </div>
        <div class="w-2/5 flex items-center py-20 z-1">
            <img src="../assets/mockup.jpg" alt="" class="w-[900px] max-w-[1000px] rounded-2xl" style="box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.10)">
        </div>
    </div>
</template>

<script>
export default {
    name: "WelcomeContentComponent"
}
</script>

<style>

</style>