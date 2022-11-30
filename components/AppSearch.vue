<template>
  <div class="flex flex-col lg:flex-row gap-4 mt-4 ">
    <input type="text" name="search" id="search" class="p-4 rounded-lg truncate text-black md:w-96" :placeholder="item">
    <button class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-4 rounded-lg w-48  m-auto">Search</button>
  </div>
</template>

<script setup>

const props = defineProps ({
  item: {
    type: String,
    default: "Search for a movie or tv show...",
  }
})
</script>