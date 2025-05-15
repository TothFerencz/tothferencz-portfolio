<script setup>
import { ref, onMounted, defineEmits } from 'vue';

const emit = defineEmits(['done']);
const show = ref(true);
const hidden = ref(false);

function startHide() {
	show.value = false;
}

function onTransitionEnd() {
	hidden.value = true;
	emit('done');
}

onMounted(() => {
	setTimeout(() => {
		startHide();
	}, 1000); // vár 2 másodpercet, majd elindítja az eltűnést
});
</script>

<template>
  <div
    v-show="!hidden"
    class="fixed inset-0 bg-black z-50 transition-transform duration-[1100ms] ease-out flex items-center justify-center"
    :class="{ '-translate-y-full': !show, 'translate-y-0': show }"
    @transitionend="onTransitionEnd"
  >
    <h1 class="text-white uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">FERENCZ PORTFOLIO</h1>
  </div>
</template>
