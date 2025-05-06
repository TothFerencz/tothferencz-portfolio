<template>
  <nav class="flex justify-between items-center px-8 py-8 bg-neutral-50">
    <div class="text-3xl font-bold text-neutral-900">FT</div>
    <div class="flex ">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="px-4 p-2 border  border-neutral-400 rounded-full text-sm font-prm-regular  text-neutral-900 transition-all duration-200 hover:bg-black hover:text-white "
      >
        {{ item }}
      </button>
    </div>
  </nav>
</template>

<script setup>
const navItems = ['PORTFOLIO', 'ABOUT', 'SERVICES', 'CONTACT ME'];
</script>
