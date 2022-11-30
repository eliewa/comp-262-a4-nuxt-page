<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "Andor",
    },
    genre: {
      type: String,
      default: "Action",
    },

    date: {
      type: Number,
      default: 2022, 
    },

    image: {
      type: String,
      default: "/images/andor.jpg",
    },

    alt: {
      type: String,
      default: "Andor poster",
    }
  })

</script>
<template>
  <article class="font-bold">
    <img :src="image" :alt="alt" class="h-56 rounded-md drop-shadow-xl hover:drop-shadow-none">
        {{title}}
        ({{date}})
        <div class="italic">{{genre}}</div>
        
  </article>

</template>