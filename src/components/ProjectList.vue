<template>
  <section class="min-h-screen flex flex-col items-center justify-center py-20 text-center container mx-auto">
    <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      <div>YOU MAY</div>
      <div>ALSO LIKE</div>
    </h2>

    <div class="grid xl:grid-cols-3 gap-8 mt-16">
      <router-link
        v-for="project in visibleProjects"
        :key="project.title"
        :to="`/portfolio/${slugify(project.title)}`"
        :class="[
          'rounded-2xl overflow-hidden transition-transform duration-300 cursor-pointer group',
          project.bgColor,
          'hover:scale-99 flex flex-col min-h-[400px] sm:min-h-[450px] md:min-h-[500px] xl:min-h-[550px]'
        ]"
      >
        <div class="p-8 flex items-center justify-center flex-grow">
          <img
            :src="`/images/${project.image}`"
            alt=""
            class="rounded-lg transform transition-transform duration-300 scale-99 group-hover:scale-105 max-h-full"
          />
        </div>

        <div :class="['p-5 text-left', project.footerColor]">
          <div class="flex flex-wrap mb-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs border border-gray-800 text-gray-800 px-2 py-1 rounded-full"
            >
              {{ tag.toUpperCase() }}
            </span>
          </div>
          <h3 class="font-semibold text-lg">{{ project.title }}</h3>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const projects = ref([]);

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

// Kizárjuk az aktuális slug-ot:
const visibleProjects = computed(() => projects.value.filter((p) => p.visible && slugify(p.title) !== route.params.projectName).slice(0, 3));

onMounted(async () => {
	const res = await fetch('/data/projects.json');
	projects.value = await res.json();
});
</script>
