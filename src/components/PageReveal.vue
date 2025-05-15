<script setup>
import { ref, onMounted, defineEmits, nextTick } from 'vue';

const emit = defineEmits(['done']);
const show = ref(true);
const hidden = ref(false);

function startHide() {
	show.value = false;
}

function onTransitionEnd() {
	if (!show.value) {
		hidden.value = true;
		emit('done');
	}
}

onMounted(async () => {
	await nextTick();
	setTimeout(() => {
		startHide();
	}, 1000); // vár 1 másodpercet, majd elindítja az animációt
});
</script>

<template>
  <div
    v-if="!hidden"
    @transitionend="onTransitionEnd"
    class="fixed inset-0 bg-black z-50 flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] transform-gpu will-change-transform"
    :class="show ? 'translate-y-0' : '-translate-y-full'"
  >
    <h1 class="text-white uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
      FERENCZ PORTFOLIO
    </h1>
  </div>
</template>
