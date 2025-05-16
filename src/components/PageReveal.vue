<script setup>
import { ref, onMounted, defineEmits, nextTick } from 'vue';

const emit = defineEmits(['done']);

const show = ref(false); // animáció trigger
const hidden = ref(false); // eltávolítás a DOM-ból

// Indítja a kifelé animációt
function startExitAnimation() {
	show.value = false;

	// 1000ms == transition duration
	setTimeout(() => {
		hidden.value = true;
		emit('done'); // csak az animáció teljes vége után
	}, 1000);
}

onMounted(async () => {
	await nextTick();

	// Kis delay, hogy a belépő animáció biztosan triggereződjön
	setTimeout(() => {
		show.value = true;
	}, 10);

	// Megjelenés után kis várakozás, majd kifelé animáció
	setTimeout(() => {
		startExitAnimation();
	}, 2000); // pl. 1s bent marad + 1s kifelé animáció
});
</script>

<template>
  <div
    v-if="!hidden"
    class="fixed inset-0 bg-black z-50 flex items-center justify-center
           transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]
           transform-gpu will-change-transform"
    :class="show ? 'translate-y-0' : '-translate-y-full'"
  >
    <h1 class="text-white uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
      FERENCZ PORTFOLIO
    </h1>
  </div>
</template>
