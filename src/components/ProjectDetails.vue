<template>
  <div v-if="project" class="max-w-7xl mx-auto py-10 px-6 space-y-16">
    <h1 data-animate-in class="text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-700 ease-out transform">{{ project.title }}</h1>

    <div class="grid grid-cols-3 text-sm gap-y-1 uppercase tracking-wide">
      <div data-animate-in>
        <p  class="font-bold">Client</p>
        <p class="text-gray-500">{{ project.client }}</p>
      </div>
      <div data-animate-in>
        <p class="font-bold">Service</p>
        <p class="text-gray-500">{{ project.service }}</p>
      </div >
      <div data-animate-in>
        <p class="font-bold">Date</p>
        <p class="text-gray-500">{{ project.date }}</p>
      </div>
    </div>

    <img data-animate-in
      :src="`/mockups/${project.image}`"
      :alt="project.title"
      class="w-full"
    />

    <div data-animate-in>
      <h2 class="text-2xl font-bold mb-4">Summary</h2>
      <p class="max-w-3xl text-lg leading-relaxed">{{ project.summary }}</p>
    </div>

    <div v-if="project.url" class="flex items-center space-x-2">

    </div>
  </div>

  <div v-else class="text-center py-20">
    <p>Loading project...</p>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePageAnimations } from '@/composables/usePageAnimations.js';

const route = useRoute();
const project = ref(null);
const { animateIn } = usePageAnimations();

async function loadProject() {
	const res = await fetch('/data/projects.json');
	const projects = await res.json();
	project.value = projects.find((p) => p.slug === route.params.slug);

	if (project.value) {
		await nextTick();
		animateIn();
	}
}

watch(() => route.params.slug, loadProject, { immediate: true });
</script>
