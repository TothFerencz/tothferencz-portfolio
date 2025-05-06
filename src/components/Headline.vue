<template>
  <div class="relative bg-white text-black overflow-hidden">
    <!-- Szöveg blokk -->
    <div
      ref="textSection"
      class="flex flex-col md:flex-row justify-center items-center gap-4 py-24 md:py-32 transition-all duration-700 ease-out"
      :class="{ 'opacity-100 scale-100': visible, 'opacity-0 scale-75': !visible }"
    >
      <h1
        class="text-5xl md:text-9xl uppercase leading-none font-prm-black transition-all duration-700"
      >
        FERENCZ
      </h1>
      <h1
        class="text-5xl md:text-9xl uppercase leading-none font-prm-black transition-all duration-700"
      >
        TOTH
      </h1>
    </div>

    <!-- Parallax kép -->
    <div class="relative pb-16">
      <img
        src="../assets/headerimage.png"
        alt="Ferencz Toth"
        class="w-full rounded-[2rem] shadow-lg transition-transform duration-300 ease-out will-change-transform"
        :style="{ transform: `translateY(${imageOffset * 0.2}px)` }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imageOffset = ref(0);
const visible = ref(false);
const textSection = ref(null);

const handleScroll = () => {
	imageOffset.value = window.scrollY;

	if (textSection.value) {
		const rect = textSection.value.getBoundingClientRect();
		if (rect.top < window.innerHeight - 100) {
			visible.value = true;
		}
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Alapértelmezett animáció induló állapota */
.opacity-0 {
	opacity: 0;
}
.scale-75 {
	transform: scale(0.75);
}
.opacity-100 {
	opacity: 1;
}
.scale-100 {
	transform: scale(1);
}
</style>
