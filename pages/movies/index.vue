<template>
  <div>
    <h1 class="text-4xl font-serif font-bold text-center pt-16 pb-5">Search Your Favourite Movies</h1>
    <div class="flex justify-center ">
      <AppSearch class="text-white font-bold" item="Search for a movie..."/>
    </div>
    
    <AppSection 
    title="Results"
    class="flex justify-center "
    />
    <div class="flex w-92 justify-center mx-auto p-10 gap-10 flex-wrap">
      <AppCard
        :title="movie.title"
        :genre="movie.genre"
        :date="movie.date"
        :image="movie.image"
        :alt="movie.alt"
        v-for="movie in movies"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script setup>
const movies = [
  {
    id: 1,
    title: "Batman",
    genre: "Action",
    date: 2022,
    image: "/images/batman.jpg",
    alt: "Batman Poster",
  },
  {
    id: 2,
    title: "Avatar",
    genre: "Adventure",
    date: 2004,
    image: "/images/avatar.jpg",
    alt: "Avatar Poster",
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    date: 1997,
    image: "/images/titanic.jpg",
    alt: "Titanic Poster",
  },
  {
    id: 4,
    title: "Andor",
    genre: "Sci-Fi",
    date: 2022,
    image: "/images/andor.jpg",
    alt: "Andor Poster",
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    date: 2008,
    image: "/images/dark-knight.jpg",
    alt: "Dark Knight Poster",
  },
  {
    id: 6,
    title: "The Godfather",
    genre: "Drama",
    date: 1972,
    image: "/images/godfather.jpg",
    alt: "Godfather Poster",
  },
  {
    id: 7,
    title: "Inception",
    genre: "Sci-Fi",
    date: 2010,
    image: "/images/inception.jpg",
    alt: "Inception",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    genre: "Drama",
    date: 1994,
    image: "/images/pulp-fiction.jpg",
    alt: "Pulp-Fiction Poster",
  },
  {
    id: 9,
    title: "Taxi Driver",
    genre: "Drama",
    date: 1976,
    image: "/images/taxi.jpg",
    alt: "Taxi Poster",
  },
];

</script>