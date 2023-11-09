<template>
    <div class="mx-auto w-full md:max-w-[1300px] flex flex-col lg:flex-row px-8">
        <div class="flex flex-col gap-12 w-auto lg:w-3/5 justify-center z-10 py-10 lg:py-0">
            <div class="flex gap-6 items-center">
                <img src="../assets/supa-icon.png" alt="" class="h-14 w-14">
                <h1 class="font-semibold text-6xl text-darkest tracking-tight">Supa <span class="bg-gradient-to-r from-gradient2 to-gradient1 bg-clip-text text-transparent w-min">UI Kit</span></h1> 
            </div>
            <h1 class="text-4xl font-medium tracking-tight text-darker">Moderns, cleans and supa <br/>customizables components.</h1>
            <div class="flex flex-col lg:flex-row gap-8 lg:w-[900px]">
                <div  class="w-full lg:w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-[#EFE2F9] mb-3 text-[#9251F7] flex items-center justify-center font-bold">M</div>
                    <h1 class="text-2xl font-semibold text-[#9251F7]">Multi-framework</h1>
                </div>
                <div  class="w-full lg:w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap pr-10" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-[#E7FAE5] mb-3 text-[#4AC06F] flex items-center justify-center font-bold">+</div>
                    <h1 class="text-2xl font-semibold text-[#4AC06F]">+300 Components</h1>
                </div>
                <div  class="w-full lg:w-1/3 bg-white rounded-2xl p-8 whitespace-nowrap" style="box-shadow: 0px 12px 64px rgba(130, 115, 238, 0.1)">
                    <div class="h-8 w-8 rounded-full bg-[#FEFCBF] mb-3 text-[#F4CE10] flex items-center justify-center font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                      </div>
                    <h1 class="text-2xl font-semibold text-gradient1"><span class="text-[#F4CE10]">Light</span> <span class="text-[#79819A]">&</span> <span class="text-[#857129]">Dark</span></h1>
                </div>
            </div>
            <div class="flex items-center justify-center sm:justify-start gap-8">
            <a href="/components" class="bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg shadowbutton ">Explore
            </a>  
            <a href="/docs" class="font-medium text-lg flex items-center gap-3 text-darker group">
                Read the docs 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition ease-in-out duration-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </a>
            </div>

            
        </div>
        <div class="hidden lg:block w-2/5 flex items-center py-20 z-1">
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