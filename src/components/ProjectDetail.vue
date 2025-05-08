<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div v-if="project" class="space-y-20">
      <!-- Projekt név + tagek -->
      <div class="text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          {{ project.title }}
        </h1>
        <div class="flex flex-wrap spaxe-y-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="inline-block text-xs border border-gray-800 text-gray-800 px-2 py-1 rounded-full"
          >
            {{ tag.toUpperCase() }}
          </span>
        </div>
      </div>

      <!-- Hero kép háttérrel -->
          <div :class="[project.bgColor, 'rounded-3xl p-6']">
        <img
          :src="`/images/${project.image}`"
          :alt="project.title"
          class="rounded-2xl  mx-auto"
        />
      </div>

      <!-- ABOUT THE PROJECT -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 class="text-3xl sm:text-3xl font-bold mb-6">ABOUT THE PROJECT</h2>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            class="inline-flex items-center mt-6 px-4 py-2 sm:px-4 sm:py-3 bg-black text-white text-sm rounded-full border border-black transition-all duration-300 hover:px-6 hover:bg-gray-900 hover:cursor-pointer"
          >
            VISIT PROJECT
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 7l-10 10m0-10h10v10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
        <div class="space-y-10">
          <div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Challenge</h3>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              {{ project.challenge }}
            </p>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Approach</h3>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              {{ project.approach }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 text-lg">Project not found.</div>
<ProjectList />
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProjectList from './ProjectList.vue';

const route = useRoute();
const project = ref(null);

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const loadProject = async () => {
	try {
		const res = await fetch('/data/projects.json');
		const data = await res.json();
		const slug = route.params.projectName;
		project.value = data.find((p) => slugify(p.title) === slug);
	} catch (err) {
		console.error('Failed to load project data:', err);
	}
};

onMounted(loadProject);


watch(
	() => route.params.projectName,
	() => {
		loadProject();
	}
);
</script>

