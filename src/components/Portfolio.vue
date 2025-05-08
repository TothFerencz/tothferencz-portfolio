<template>
  <section class="min-h-screen py-20 container mx-auto">
    <!-- Cím bal oldalon -->
    <h2 class="text-[64px] leading-none font-extrabold tracking-tight text-left">
      <div>MY WORK</div>
      <div>PORTFOLIO</div>
    </h2>
 
    <!-- Projekt kártyák -->
    <div class="grid md:grid-cols-2 gap-12 mt-20 items-stretch">
      <router-link
        v-for="project in projects"
        :key="project.title"
        :to="`/portfolio/${slugify(project.title)}`"
        class="rounded-2xl overflow-hidden transition-transform transform hover:scale-[0.99] shadow-md flex flex-col h-full"
        :class="project.bgColor"
      >
        <!-- Kép -->
        <div class="p-10 flex items-center justify-center flex-grow min-h-[300px] md:min-h-[400px] xl:min-h-[500px]">
          <img
            :src="`/images/${project.image}`"
            alt=""
            class="rounded-xl transition-transform duration-300 transform group-hover:scale-105 max-h-full"
          />
        </div>

        <!-- Lábléc -->
        <div :class="['p-5', project.footerColor]">
          <div class="flex flex-wrap mb-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs border border-gray-800 text-gray-800 px-2 py-1 rounded-full"
            >
              {{ tag.toUpperCase() }}
            </span>
          </div>
          <h3 class="font-semibold text-xl">{{ project.title }}</h3>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);

const slugify = (text) => {
	return text.toLowerCase().replace(/\s+/g, '-');
};

onMounted(async () => {
	const res = await fetch('/data/projects.json');
	projects.value = await res.json();
});
</script>
