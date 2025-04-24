<script setup>
import { useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import Footer from './components/Footer.vue';
import WorkPreview from './components/WorkPreview.vue';

const route = useRoute();
</script>

<template>
  <div class="font-prm">
    <header>
      <Navbar />
    </header>

    <main>
      <template v-if="route.path === '/'">
        <Headline />
        <WorkPreview />
      </template>
      <template v-else>
        <router-view />
      </template>
    </main>

    <Footer />
  </div>
</template>
