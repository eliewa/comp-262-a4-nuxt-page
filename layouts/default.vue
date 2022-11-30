<template>
  <div>
    <TheNav />
    <div class="container mx-auto">
      <slot></slot>
    </div>
    <TheFooter class="text-xl text-white bg-gray-900 mt-auto h-auto p-5"/>
    
  </div>
    
</template>

<script setup></script>

<style>
body {
  background-color: #f3f4f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
