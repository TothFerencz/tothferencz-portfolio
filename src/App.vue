<script setup>
import { useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import About from './components/About.vue';
import RecentProjects from './components/RecentProjects.vue';
import MiniHeadline from './components/MiniHeadline.vue';
import MyStacks from './components/MyStacks.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';

import { SpeedInsights } from '@vercel/speed-insights/vue';

const route = useRoute();
</script>

<template>
	<div class="font-['DM Sans'] bg-neutral-50">
		<header>
			<SpeedInsights />
			<Navbar />
			<MiniHeadline />
		</header>

		<main>
			<template v-if="route.path === '/'">
				<Headline />
				<About />
				<RecentProjects />
				<MyStacks />
				<Contact />
			</template>

			<template v-else>
				<router-view />
			</template>
		</main>

		<Footer /> <!-- Minden oldalon meg fog jelenni -->
	</div>
</template>
