<template>
    <div class="h-[500px] flex flex-col items-center">
        <h1 class="pt-40 font-semibold text-4xl mb-2 text-darker">Hey!</h1>
        <h1 class="font-medium text-xl text-darker">Don't be so impatient, we're working on it!</h1>
        <router-link to="/">
            <button class="mt-10 bg-gradient-to-r from-gradient2 to-gradient1 w-max px-6 py-2 rounded-lg font-medium text-white flex items-center transition ease-in-out duration-300 text-lg shadowbutton">Go back home
            </button> 
        </router-link>
      </div>
</template>

<script>
export default {
    name: "WaitingForComponent"
}
</script>

<style>

</style>