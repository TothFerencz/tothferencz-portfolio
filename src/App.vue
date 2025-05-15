<script setup>
import { ref, nextTick, onMounted } from 'vue';
import PageReveal from './components/PageReveal.vue';
import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import ProjectsGrid from './components/ProjectsGrid.vue';
import Footer from './components/Footer.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useAnimations } from './composables/useAnimations.js';

const { animateIn } = useAnimations();
const revealed = ref(false);
const isMaintenance = ref(false);

onMounted(() => {
	// Show maintenance message on the root URL
	if (window.location.hostname === 'www.ferencztoth.site' && window.location.pathname === '/') {
		isMaintenance.value = true;
	}
});

function handleRevealDone() {
	revealed.value = true;

	nextTick(() => {
		animateIn();
	});
}
</script>

<template>
  <div>
    <!-- Maintenance state -->
    <div v-if="isMaintenance" class="flex items-center justify-center h-screen bg-white">
      <h1 class="text-2xl font-semibold">Page under maintenance</h1>
    </div>

    <!-- Normal site content -->
    <div v-else class="relative bg-[#f2f2f2] overflow-hidden">
      <PageReveal @done="handleRevealDone" />

      <div>
        <header>
          <SpeedInsights />
          <Navbar />
          <Headline />
        </header>

        <main>
          <ProjectsGrid />
        </main>

        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
	background: #f2f2f2;
	scroll-behavior: smooth;
}
</style>