<template>
  <div class="relative bg-[#f2f2f2] overflow-hidden">
    <div v-if="isMaintenance">
      <div class="h-screen flex items-center justify-center text-center text-xl font-semibold">
        Page under maintenance
      </div>
    </div>
    <div v-else>
      <!-- Oldalváltásnál újrainduló page reveal -->
      <PageReveal :key="$route.fullPath" @done="handleRevealDone" />

      <!-- Tartalom csak akkor jelenik meg, ha a PageReveal lefutott -->
      <div v-if="revealed">
        <SpeedInsights />
        <Navbar />

        <main>
          <RouterView />
        </main>

<Footer v-if="!isProjectDetailPage" />
      </div>
    </div>
  </div>
</template>

<script>
import { SpeedInsights } from '@vercel/speed-insights/vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import PageReveal from './components/PageReveal.vue';
import Lenis from '@studio-freight/lenis';
import { usePageAnimations } from './composables/usePageAnimations.js'; // ÚJ

export default {
	components: {
		SpeedInsights,
		Navbar,
		Footer,
		PageReveal
	},
	computed: {
		isProjectDetailPage() {
			return this.$route.name === 'Work';
		}
	},
	data() {
		return {
			revealed: false,
			lenis: null
		};
	},
	watch: {
		// Minden route váltásnál újraindul a PageReveal és animáció
		$route() {
			this.revealed = false;
		}
	},
	methods: {
		handleRevealDone() {
			this.revealed = true;

			this.$nextTick(() => {
				// DOM megjelent -> indítjuk az animációkat
				const { animateIn } = usePageAnimations();
				animateIn();

				this.initLenis();
			});
		},
		initLenis() {
			if (this.lenis) return;

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

<style>
html,
body {
	background: #f2f2f2;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}
</style>
