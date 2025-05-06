<script setup>
import { useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import About from './components/About.vue';
import RecentProjects from './components/RecentProjects.vue';

import MiniHeadline from './components/MiniHeadline.vue';
const route = useRoute();
</script>

<template >
  <div class="font-prm bg-neutral-50">
    <header>
      <Navbar />
    </header>

    <main>
      <template v-if="route.path === '/'">
      
        <MiniHeadline />
		<Headline />
		<About />
		<RecentProjects />

      </template>
      <template v-else>
        <router-view />
      </template>
    </main>

    <Footer />
  </div>
</template>
