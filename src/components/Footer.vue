<template>
  <footer class="bg-[#12120f] text-gray-300 py-6 px-4 rounded-3xl">
    <div class="container mx-auto space-y-6">
      
      <!-- Felső sor: logo, gombok, ikonok -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-6">
        
        <!-- Logo -->
        <div class="text-white text-2xl font-bold">FT</div>

        <!-- Gombok -->
        <div class="flex flex-wrap md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-left">
          <button
            v-for="(item, index) in footerItems"
            :key="index"
            @click="navigateTo(item.route)"
            class="px-6 py-3 border border-neutral-400 rounded-full text-xs transition-all duration-300 ease-in-out cursor-pointer text-white hover:px-7 hover:py-2 hover:bg-white hover:text-black"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Social ikonok -->
        <div class="flex items-center space-x-4 text-xl text-gray-400 md:relative">
          <a href="#" class="hover:text-white"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-white"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="hover:text-white"><i class="fab fa-github"></i></a>
        </div>
      </div>

      <hr class="border-gray-700" />

      <!-- Alsó sor: jogi rész -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400 gap-2">
        <p>© 2025, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const footerItems = [
	{ label: 'HOME', route: '/' },
	{ label: 'PORTFOLIO', route: '/portfolio' },
	{ label: 'CONTACT ME', route: '/contact' }
];

function navigateTo(route) {
	router.push(route);
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
