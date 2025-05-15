<script>
import PageReveal from './components/PageReveal.vue';
import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import ProjectsGrid from './components/ProjectsGrid.vue';
import Footer from './components/Footer.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useAnimations } from './composables/useAnimations.js';
import Lenis from '@studio-freight/lenis';

export default {
	components: {
		PageReveal,
		Navbar,
		Headline,
		ProjectsGrid,
		Footer,
		SpeedInsights
	},
	data() {
		return {
			revealed: false,
			lenis: null
		};
	},
	methods: {
		handleRevealDone() {
			this.revealed = true;

			this.$nextTick(() => {
				const { animateIn } = useAnimations();
				animateIn();

				this.initLenis();
			});
		},
		initLenis() {
			this.lenis = new Lenis({
				smooth: true,
				direction: 'vertical',
				gestureDirection: 'vertical',
				smoothTouch: false
			});

			const raf = (time) => {
				this.lenis.raf(time);
				requestAnimationFrame(raf);
			};

			requestAnimationFrame(raf);
		}
	}
};
</script>

<template>
  <div class="relative bg-[#f2f2f2] overflow-hidden">
    <PageReveal @done="handleRevealDone" />

    <div v-if="revealed">
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
</template>

<style>
html,
body {
	background: #f2f2f2;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	/* scroll-behavior: smooth; -- ezt töröld, ha Lenis van */
}
</style>
