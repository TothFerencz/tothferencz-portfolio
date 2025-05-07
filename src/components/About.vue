<template>
  <section
    ref="aboutSection"
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden container mx-auto"
  >
    <transition name="zoom-in">
      <div v-if="visible" class="space-y-6">
        <img src="@/assets/star.svg" alt="Star" class="mx-auto w-12 h-12" />

        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-transform duration-500"
          :style="{ transform: `translateY(${parallaxOffset.value}px)` }"
        >
          I’M A FULL STACK DEVELOPER<br />
          TRANSFORMING VISIONARY CONCEPTS<br />
          INTO IMMERSIVE DIGITAL EXPERIENCES
        </h1>

        <img src="@/assets/star.svg" alt="Star" class="mx-auto w-12 h-12" />

        <p
          class="text-lg sm:text-xl max-w-2xl mx-auto transition-transform duration-500"
          :style="{ transform: `translateY(${parallaxOffset.value * 0.6}px)` }"
        >
          I am committed to delivering cutting-edge solutions that redefine the digital landscape.
        </p>

<button class="mt-6 px-4 py-3 bg-black text-white text-sm rounded-full border border-black transition-all duration-300 hover:px-6 hover:bg-gray-900 hover:cursor-pointer">
  LEARN MORE
</button>


      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const aboutSection = ref(null);
const parallaxOffset = ref(0);

const handleScroll = () => {
	if (!aboutSection.value) return;
	const rect = aboutSection.value.getBoundingClientRect();
	const offset = window.innerHeight - rect.top;
	parallaxOffset.value = offset * 0.1; // Parallax intenzitás
};

onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) visible.value = true;
		},
		{ threshold: 0.3 }
	);

	if (aboutSection.value) observer.observe(aboutSection.value);
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.zoom-in-enter-active {
	transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
}
.zoom-in-enter-from {
	opacity: 0;
	transform: scale(0.8) translateY(40px);
	filter: blur(6px);
}
.zoom-in-enter-to {
	opacity: 1;
	transform: scale(1) translateY(0);
	filter: blur(0);
}
</style>
