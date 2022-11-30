<template>
  <div>
    <section class="border-b-2 pb-4 ">
      <div class="lg:flex lg:justify-left gap-10 inline-block mx-auto">
      <h1 class="text-4xl font-bold font-serif mt-10 pl-5">{{title}}</h1>
      <div class="text-lg self-center mt-10 font-semibold bg-slate-400 rounded-md ">
        <label for="genre" class="p-10">Select Genre:</label>
        <select name="genre" id="genre" class="p-2">
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="adventure">Adventure</option>
          <option value="romance">Romance</option>
          <option value="comedy">Comedy</option>
        </select>
      </div>

      <div class="text-lg self-center mt-10 font-semibold bg-slate-400 rounded-md p-2">
        <label for="year" class="p-5">Select Year:</label>
        <input type="text" name="year" id="year">
      </div>

     </div>
    </section>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "Browse Genre",
    }
  })


</script>