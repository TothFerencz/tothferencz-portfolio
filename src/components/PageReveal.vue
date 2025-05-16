<script setup>
import { ref, onMounted, defineEmits, nextTick } from 'vue';

const emit = defineEmits(['done']);

const show = ref(false); // induláskor nincs animáltan bent
const hidden = ref(false); // DOM-ból eltávolítás

function startHide() {
	show.value = false; // indítjuk a kilépő animációt

	setTimeout(() => {
		hidden.value = true;
		emit('done');
	}, 1000);
}

onMounted(async () => {
	await nextTick();

	// Késleltetett belépő animáció (elkerüli a "initial class apply" villanást)
	setTimeout(() => {
		show.value = true;
	}, 4); // rövid delay, hogy az osztályváltás triggerezze a belépést

	// Majd 1s után kezdjük az eltűnést
	setTimeout(() => {
		startHide();
	}, 2000); // 1s megjelenés + 1s késleltetés
});
</script>

<template>
  <div
    v-if="!hidden"
    class="fixed inset-0 bg-black z-50 flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] transform-gpu will-change-transform"
    :class="show ? 'translate-y-0' : '-translate-y-full'"
  >
    <h1 class="text-white uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
      FERENCZ PORTFOLIO
    </h1>
  </div>
</template>

<style>
html,
body {
	background-color: #000;
}
</style>
