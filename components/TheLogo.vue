<template>
  <div>
    <div :class="size" class=" font-serif">
          <NuxtLink to="/">
            <span class="font-serif">Film</span>
            <span class="text-yellow-500">Junkies</span>
            <span class="text-3xl text-yellow-500">.</span>
          </NuxtLink>
          
        </div>
        
  </div>
</template>

<script setup>
  const props = defineProps ({
    size: {
      type: String,
      default: "text-2xl",
    }
  })
</script>