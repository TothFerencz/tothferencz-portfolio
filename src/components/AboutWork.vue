<template>
  <section class="  flex justify-center">
    <div class="w-full py-10 px-6 max-w-7xl flex flex-col gap-10">

      <!-- Kép -->
      <div data-animate-in class="w-full">
        <img
          src="/images/coding.png"
          alt="Coding Setup"
          class="w-full h-auto object-cover"
        />
      </div>

      <!-- Tartalom -->
      <div data-animate-in class="flex flex-col lg:flex-row gap-10">
        
        <!-- Bal oldal: cím -->
        <div data-animate-in class="w-full lg:w-1/2">
          <h2 class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">My Work Stacks</h2>
        </div>

        <!-- Jobb oldal: leírás + stack lista -->
        <div data-animate-in class="w-full lg:w-1/2 flex flex-col gap-10">
          <p class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150 leading-relaxed">
            I'm driven by complex problems and love building elegant, scalable solutions. Whether it's crafting intuitive UIs or architecting robust backends, I see every project as a chance to push boundaries, learn new technologies, and evolve as a developer.
          </p>

          <!-- Stack lista -->
          <div data-animate-in class="flex flex-col divide-y divide-gray-300 uppercase text-base md:text-lg lg:text-xl font-inter font-[600]  transition-all duration-700 ease-out delay-150 ">
            <div class="flex justify-between items-center py-4 hover:opacity-80 transition ">
              <span class="font-semibold">Frontend <span class="text-gray-500 text-sm">(Vue.js, React.js, Tailwind CSS)</span></span>
              
            </div>
            <div class="flex justify-between items-center py-4 hover:opacity-80 transition">
              <span class="font-semibold">Backend <span class="text-gray-500 text-sm">(PHP, Laravel, Filament, Node.js)</span></span>
              
            </div>
            <div class="flex justify-between items-center py-4 hover:opacity-80 transition">
              <span class="font-semibold">Tools <span class="text-gray-500 text-sm">(Visual Studio Code, Figma)</span></span>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
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
