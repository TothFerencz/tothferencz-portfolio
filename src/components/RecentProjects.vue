<template>
  <section class="py-20 bg-neutral-100 text-center">
    <!-- Cím -->
    <h2 class="text-[48px] leading-none font-extrabold tracking-tight">
      <div>RECENT</div>
      <div>PROJECTS</div>
    </h2>

    <!-- Kártyák -->
    <div class="grid md:grid-cols-3 gap-8 mt-16 px-4">
      <div
        v-for="project in projects"
        :key="project.title"
        :class="[
          'rounded-3xl overflow-hidden transition-transform duration-300 cursor-pointer group',
          project.bgColor,
          'hover:scale-99',
          'flex flex-col min-h-[550px]'
        ]"
      >
        <!-- Kép -->
        <div class="p-8 flex items-center justify-center flex-grow">
          <img
            :src="`/images/${project.image}`"
            alt=""
            class="rounded-lg transform transition-transform duration-300 scale-99 group-hover:scale-105 max-h-full"
          />
        </div>

        <!-- Lábléc -->
        <div :class="['p-5 text-left', project.footerColor]">
          <div class="flex flex-wrap gap-2 mb-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs border border-black text-black px-2 py-1 rounded-full"
            >
              {{ tag.toUpperCase() }}
            </span>
          </div>
          <h3 class="font-semibold text-lg">{{ project.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Gomb -->
    <button class="mt-12 px-6 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition">
      VIEW MORE
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);

onMounted(async () => {
	const res = await fetch('/data/projects.json');
	projects.value = await res.json();
});
</script>
