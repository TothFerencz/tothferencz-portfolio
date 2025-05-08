<template>
  <div class="relative text-black">
    <!-- Szöveg blokk -->
    <div
      ref="textSection"
      class="text-center py-24 md:py-32  container mx-auto"
      :class="{
      
      }"
    >
      <h1 class="w-full font-[900] uppercase leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        <span class="block sm:inline sm:mr-4">FERENCZ</span>
        <span class="block sm:inline">TOTH</span>
      </h1>
    </div>

    <!-- Parallax kép szekció -->
    <div class="relative w-full overflow-hidden h-[100vh]">
      <img
        ref="parallaxImage"
        src="../assets/headerimage.png"
        alt="Ferencz Toth"
        class="absolute top-0 left-0 w-full h-auto object-cover will-change-transform"
        style="min-height: 120vh"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const textSection = ref(null);
const parallaxImage = ref(null);

const handleParallax = () => {
	if (parallaxImage.value) {
		const scrollY = window.scrollY;
		const offset = scrollY * 0.3;
		parallaxImage.value.style.transform = `translateY(${offset}px)`;
	}
};

const handleScroll = () => {
	// szöveg aktiválása
	if (textSection.value) {
		const rect = textSection.value.getBoundingClientRect();
		if (rect.top < window.innerHeight - 100) {
			visible.value = true;
		}
	}

	handleParallax();
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>
