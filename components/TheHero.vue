<template>
  <div class="hero flex flex-col justify-center items-center text-white font-bold text-2xl p-10 ">
    <div class="banner md:w-2/3 p-5 rounded-lg">
      <h1 class="text-yellow-500 text-4xl font-serif">Welcome.</h1>
      <h2 class="hidden lg:block">Millions of movies, TV shows and people to discover.</h2>
      <h2>Explore now.</h2>
    
    </div>
    <AppSearch class="text-lg" />
    
  </div>
</template>

<script setup>

</script>

<style scoped>
  .hero {
    background-image: linear-gradient(rgba(100, 116, 139, 0.719), rgba(100, 116, 139, 0.699)), url("../public/images/hero.jpg");
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 100%;
    margin: 0 auto;
  }

  .banner {
    background: linear-gradient(rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.473));
  }
</style>

