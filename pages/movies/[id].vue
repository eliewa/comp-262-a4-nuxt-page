<template>
  <div>
    <p>Movie details for {{id}}</p>
  </div>
</template>

<script setup>
  const {id} = useRoute().params 
</script>