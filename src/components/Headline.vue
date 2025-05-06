<template>
  <div class="relative bg-white text-black overflow-hidden">
    <!-- Szövegek -->
    <div class="text-center py-24 md:py-32">
      <h1 class="text-7xl md:text-9xl font-extrabold uppercase leading-none">
        FERENCZ
      </h1>
      <h1 class="text-7xl md:text-9xl font-extrabold uppercase leading-none">
        TOTH
      </h1>
    </div>

    <!-- Parallax kép -->
    <div class="relative pb-16">
      <img
        src="../assets/headerimage.png"
        alt="Ferencz Toth"
        class="w-full rounded-[2rem] shadow-lg"
        :style="{ transform: `translateY(${imageOffset * 0.2}px)` }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imageOffset = ref(0);

const handleScroll = () => {
	imageOffset.value = window.scrollY;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>
