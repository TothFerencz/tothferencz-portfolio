<template>
  <div class="relative bg-white text-black overflow-hidden">
    <!-- Szöveg blokk -->
 <div
  ref="textSection"
  class="text-center py-24 md:py-32 transition-all duration-700 ease-out"
  :class="{
    'opacity-100 scale-100 translate-y-0': visible,
    'opacity-0 scale-75 translate-y-20': !visible
  }"
>
 <h1 class="font-bold text-[10vw] uppercase leading-none">
  FERENCZ TOTH
</h1>
</div>

   
    <div class="w-full relative pb-16 mx-auto">
      <div class="w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lg">
        <img
          src="../assets/headerimage.png"
          alt="Ferencz Toth"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Scroll down animáció a kép alján -->
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


