<template>
  <div v-if="project" class="max-w-7xl mx-auto py-10 px-6 space-y-16">
    <h1 data-animate-in class="text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-700 ease-out transform">
      {{ project.title }}
    </h1>

   <div class="grid grid-cols-3 text-sm gap-y-1 uppercase tracking-wide">
  <!-- BALRA: Client -->
  <div data-animate-in>
    <p class="text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">Name</p>
    <p class="text-gray-500 text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">{{ project.title }}</p>
  </div>

  <!-- KÖZÉPRE: Service -->
  <div data-animate-in>
    <p class="text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">Category</p>
    <p class="text-gray-500 text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">{{ project.category }}</p>
  </div>

  <!-- JOBBRA: Date -->
  <div data-animate-in class="text-right">
    <p class="text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">Date</p>
    <p class="text-gray-500 text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">{{ project.date }}</p>
  </div>
</div>


    <img data-animate-in
      :src="`/mockups/${project.image}`"
      :alt="project.title"
      class="w-full"
    />

    <div data-animate-in class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
      <h2 class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">
        Summary
      </h2>

      <div class="flex flex-col space-y-6 w-full">
        <p class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150">
          {{ project.summary }}
        </p>

        <div data-animate-in 
          class="flex items-center space-x-4 transition-all duration-700 ease-out transform group cursor-pointer"
        >
          <div
            class="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center
                   transform transition-transform duration-300 group-hover:scale-125"
          >
            <img
              :src="ArrowIcon"
              alt="arrow"
              class="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45"
            />
          </div>

          <a
            :href="project.url"
            class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide
                   transition-colors duration-300"
          >
            View Live
          </a>
        </div>
      </div>
    </div>

    <!-- MORE gomb szekció – oldalszintű alján középre igazítva -->
    <div
  class="relative h-64 flex items-center justify-center cursor-pointer"
  @mouseenter="showMore = true"
  @mouseleave="onMoreLeave"
  @mousemove="moveMoreEffect"
  @click="goToWorks"
>
      <!-- Statikus, nem mozgó szöveg -->
      <div class="absolute z-20 pointer-events-none text-black font-bold text-sm">
        MORE
      </div>

      <!-- Mozgó kör -->
      <div
        class="absolute w-32 h-32 rounded-full border border-gray-400 pointer-events-none z-10"
        :style="{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(${moreOffset.x}px, ${moreOffset.y}px) scale(${showMore ? 1.1 : 1})`,
          transition: 'transform 0.1s ease'
        }"
      ></div>
    </div>

    <div v-if="project.url" class="flex items-center space-x-2">
      <!-- opcionálisan más linkek -->
    </div>
  </div>

  <div v-else class="text-center py-20">
    <p>Loading project...</p>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePageAnimations } from '@/composables/usePageAnimations.js';
import ArrowIcon from '@/assets/arrow.svg';
import { useRouter } from 'vue-router';
const router = useRouter();

function goToWorks() {
	router.push('/works');
}

const route = useRoute();
const project = ref(null);
const { animateIn } = usePageAnimations();

const showMore = ref(false);
const moreOffset = reactive({ x: 0, y: 0 });

function moveMoreEffect(e) {
	if (!showMore.value) return;

	const container = e.currentTarget.getBoundingClientRect();
	const centerX = container.width / 2;
	const centerY = container.height / 2;

	const x = e.clientX - container.left;
	const y = e.clientY - container.top;

	const maxOffset = 30;
	moreOffset.x = ((x - centerX) / centerX) * maxOffset;
	moreOffset.y = ((y - centerY) / centerY) * maxOffset;
}

function onMoreLeave() {
	showMore.value = false;
	moreOffset.x = 0;
	moreOffset.y = 0;
}

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
