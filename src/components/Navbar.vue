<template>
  <nav class="flex justify-between items-center px-6 py-6 bg-neutral-50 relative z-50 container mx-auto">
    <div class="text-3xl font-bold text-neutral-900">FT</div>

    <!-- Desktop nav -->
    <div class="hidden md:flex">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="px-4 py-2 border border-neutral-400 rounded-full text-sm text-neutral-900 transition-all duration-200 hover:bg-black hover:text-white"
      >
        {{ item }}
      </button>
    </div>

    <!-- Mobile hamburger -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-400">
        <img src="@/assets/hamburger.svg" alt="Menu" class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile menu (full screen) -->
   <!-- Mobile menu (full screen) -->
<!-- Mobile menu (full screen) -->
<transition name="fade">
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-neutral-50 flex flex-col px-8 py-12 z-40"
  >
    <!-- Close button -->
    <button
      @click="toggleMenu"
      class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-400"
    >
      <img src="@/assets/close.svg" alt="Close" class="w-5 h-5" />
    </button>

    <!-- Nav items -->
    <div class="pt-10 w-full space-y-6">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="w-full text-left text-2xl font-bold text-neutral-800 border-b border-neutral-300 pb-3"
      >
        {{ item }}
      </button>
    </div>
  </div>
</transition>


  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navItems = ['HOME', 'PORTFOLIO', 'ABOUT', 'SERVICES', 'CONTACT ME'];
const isMenuOpen = ref(false);

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
}

// Zárja be a mobilmenüt ha nagy kijelzőre váltunk
const handleResize = () => {
	if (window.innerWidth >= 768) {
		isMenuOpen.value = false;
	}
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
