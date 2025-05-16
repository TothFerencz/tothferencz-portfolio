<script setup>
import { ref, onMounted, defineEmits, nextTick } from 'vue';

const emit = defineEmits(['done']);

const show = ref(true); // splash látható
const hidden = ref(false); // splash el van távolítva a DOM-ból

function startHide() {
	show.value = false;

	// Várjuk ki az animáció végét (1000ms), utána DOM-ból eltüntetjük
	setTimeout(() => {
		hidden.value = true;
		emit('done');
	}, 1000);
}

onMounted(async () => {
	await nextTick();

	// Vár 1 másodpercet indulás előtt, majd elindítja az eltűnést
	setTimeout(() => {
		startHide();
	}, 1000);
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
/* (opcionális) biztos, ami biztos: body háttér is fekete, hogy ne villogjon fehér háttér */
html,
body {
	background-color: #000;
}
</style>
