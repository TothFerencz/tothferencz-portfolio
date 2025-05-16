<template>
  <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="space-y-4 transition-all duration-700 ease-out transform"
      :class="showLinks[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
     <div
  class="relative group cursor-pointer"
  @click="goToDetails(project.slug)"
  @mouseenter="() => showCursor(index)"
  @mouseleave="hideCursor"
  @mousemove="(e) => moveEffect(e, index)"
>
  <img
    :src="`/mockups/${project.image}`"
    :alt="project.title"
    class="w-full  object-cover transition duration-200 group-hover:brightness-75"
  />
  <!-- VIEW hover effekthez -->
<div
  v-show="true"
  :class="{
    'opacity-100 scale-100': activeIndex === index,
    'opacity-0 scale-75 pointer-events-none': activeIndex !== index
  }"
  class="absolute w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold transition-all duration-300 ease-out"
  :style="{
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`
  }"
>
  VIEW
</div>
</div>

      <div>
        <h2 class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
          {{ project.title }}
        </h2>
      </div>
    </div>
  </div>

  <!-- MORE gomb szekció -->
  <div
 @click.prevent="goToProjects"
    class="relative h-64 flex items-center justify-center cursor-pointer"
    @mouseenter="showMore = true"
    @mouseleave="onMoreLeave"
    @mousemove="moveMoreEffect"
  >
    <!-- Statikus, nem mozgó szöveg -->
    <div class="absolute z-20 pointer-events-none text-black font-bold text-sm">
      MORE
    </div>

    <!-- Mozgó, nagyuló kör -->
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
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { useAnimations } from '@/composables/useAnimationsMenu';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToDetails(slug) {
	router.push(`/works/${slug}`);
}
function goToProjects() {
	router.push('/works');
}

const projects = ref([]);
const activeIndex = ref(null);
const offset = reactive({ x: 0, y: 0 });

const { showLinks, animateIn } = useAnimations();

onMounted(async () => {
	const res = await fetch('/data/projects.json');
	projects.value = await res.json();

	await nextTick();
	showLinks.value = Array(projects.value.length).fill(false);
	animateIn();
});

function showCursor(index) {
	activeIndex.value = index;
}

function hideCursor() {
	activeIndex.value = null;
	offset.x = 0;
	offset.y = 0;
}

function moveEffect(event, index) {
	if (activeIndex.value !== index) return;

	const container = event.currentTarget.getBoundingClientRect();
	const centerX = container.width / 2;
	const centerY = container.height / 2;

	const x = event.clientX - container.left;
	const y = event.clientY - container.top;

	const maxOffset = 50;

	offset.x = ((x - centerX) / centerX) * maxOffset;
	offset.y = ((y - centerY) / centerY) * maxOffset;
}

// MORE gombhoz
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

// Hover kilépéskor – animált visszacsúszás középre
function onMoreLeave() {
	showMore.value = false;

	// finom átmenettel vissza középre
	moreOffset.x = 0;
	moreOffset.y = 0;
}
</script>
