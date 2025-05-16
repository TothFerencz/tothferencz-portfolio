<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto py-10 px-6 relative">
      <!-- Főcím -->
      <h1
        data-animate-in
        class="text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-700 ease-out transform"
      >
        Projects
      </h1>

      <!-- Projektlista -->
      <div data-animate-in class="mt-16 space-y-4">
        <div
          v-for="project in projects"
          :key="project.title"
          data-animate-in
          @click="goToDetails(project.slug)"
          class="group relative grid grid-cols-2 sm:grid-cols-3 items-center border-b border-black/10 py-6 transition-colors duration-300 hover:border-black cursor-pointer"
          @mouseenter="hoveredProject = project"
          @mouseleave="hoveredProject = null"
        >
          <!-- Title -->
          <div class="text-left uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
            {{ project.title }}
          </div>

          <!-- Category -->
          <div
            class="text-right uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide z-10"
          >
            {{ project.category }}
          </div>

          <!-- Év (csak SM+ mérettől) -->
          <div
            class="text-right uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide hidden sm:block"
          >
            2024
          </div>

          <!-- Hover kép -->
          <div
            class="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <transition name="fade-up">
              <img
                v-if="hoveredProject === project"
                :src="`/mockup/${project.image}`"
                alt=""
                class="w-40 md:w-64 object-cover opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out"
              />
            </transition>
          </div>

          <!-- Border anim -->
          <div
            class="absolute bottom-0 left-0 h-[1px] bg-black transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 w-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToDetails(slug) {
	router.push(`/works/${slug}`);
}

const projects = ref([]);
const hoveredProject = ref(null);

onMounted(async () => {
	try {
		const res = await fetch('/data/projects.json');
		projects.value = await res.json();
	} catch (err) {
		console.error('Hiba a projects.json betöltésekor:', err);
	}
});
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
	transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
	opacity: 0;
	transform: translateY(16px);
}
.fade-up-enter-to,
.fade-up-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>
