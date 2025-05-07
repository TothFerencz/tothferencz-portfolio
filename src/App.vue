<script setup>
import { useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import About from './components/About.vue';
import RecentProjects from './components/RecentProjects.vue';
import MiniHeadline from './components/MiniHeadline.vue';
import MyStacks from './components/MyStacks.vue';

import { SpeedInsights } from '@vercel/speed-insights/vue';

// Vercel / env változó alapján mutassuk-e az "Under Construction" képernyőt
const route = useRoute();
const showUnderConstruction = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';
</script>

<template>
  <!-- UNDER CONSTRUCTION nézet (csak ha a környezeti változó true) -->
  <div
    v-if="showUnderConstruction"
    class="min-h-screen bg-neutral-100 flex flex-col justify-center items-center text-center px-4"
  >
    <!-- Animált ikon -->
    

    <!-- Szövegek -->
    <h1 class="text-4xl md:text-6xl font-bold text-neutral-800">🚧 Under Construction</h1>
    <p class="mt-4 text-lg text-neutral-600 max-w-xl">
      This portfolio is currently being updated. Thank you for your patience — please check back soon!
    </p>
  </div>

  <!-- NORMÁL APP nézet -->
  <div v-else class="font-['DM Sans'] bg-neutral-50">
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
      </template>
      <template v-else>
        <router-view />
      </template>
    </main>


  </div>
</template>
