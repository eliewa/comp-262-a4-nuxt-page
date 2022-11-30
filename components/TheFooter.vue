<template>
  <div>
    <footer >
      <div class="p-4 text-center border-b border-gray-200">
        <TheLogo 
          size="text-4xl"
          class="p-4"
        />
        <ul class="text-center flex md:flex-row flex-col gap-10 justify-center">
          <li class="hover:text-yellow-500"><NuxtLink to="/movies">Movies</NuxtLink></li>
          <li class="hover:text-yellow-500"><NuxtLink to="/tv-shows">TV Shows</NuxtLink></li>
          <li class="hover:text-yellow-500"><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>

      <p class="text-center p-5 text">&copy; 2012 FilmJunkies inc.</p>
    </footer>
  </div>
</template>

<script setup></script>
