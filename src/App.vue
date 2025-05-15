<template>
  <div class="relative bg-[#f2f2f2] overflow-hidden min-h-screen flex items-center justify-center">
    <template v-if="underMaintenance">
      <h1 class="text-2xl font-semibold text-center">Page under maintenance</h1>
    </template>

    <template v-else>
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
    </template>
  </div>
</template>
<script>
import PageReveal from './components/PageReveal.vue';
import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import ProjectsGrid from './components/ProjectsGrid.vue';
import Footer from './components/Footer.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useAnimations } from './composables/useAnimations.js';
import { useLenis } from './composables/useLenis.js';

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
			underMaintenance: false
		};
	},
	mounted() {
		if (window.location.hostname === 'www.ferencztoth.site') {
			this.underMaintenance = true;
		}
	},
	methods: {
		handleRevealDone() {
			if (this.underMaintenance) return;

			this.revealed = true;

			this.$nextTick(() => {
				const { animateIn } = useAnimations();
				animateIn();
				useLenis();
			});
		}
	}
};
</script>
