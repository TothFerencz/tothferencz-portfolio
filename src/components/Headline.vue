<template>
  <div class="relative bg-white text-black overflow-hidden container mx-auto">
    <!-- Szöveg blokk -->
    <div
      ref="textSection"
      class="flex flex-col md:flex-row justify-center items-center gap-4 py-24 md:py-32 transition-all duration-700 ease-out"
      :class="{
        'opacity-100 scale-100 translate-y-0': visible,
        'opacity-0 scale-75 translate-y-20': !visible
      }"
    >
      <h1 class="text-5xl md:text-9xl uppercase leading-none font-prm-black transition-all duration-700">
        FERENCZ
      </h1>
      <h1 class="text-5xl md:text-9xl uppercase leading-none font-prm-black transition-all duration-700">
        TOTH
      </h1>
    </div>

    <!-- 16:9 képarányú kép parallax nélkül -->
    <div class="relative pb-16">
      <div class="w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lg">
        <img
          src="../assets/headerimage.png"
          alt="Ferencz Toth"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Scroll down animáció a kép alján -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="w-[30px] h-[50px] border-2 border-white rounded-full flex items-start justify-center">
          <div class="w-1 h-3 bg-white rounded-full animate-scroll-bounce mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const textSection = ref(null);

const handleScroll = () => {
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
/* Animáció kezdő állapotai */
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
