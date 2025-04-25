<script setup>
import { useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Headline from './components/Headline.vue';
import Contact from './components/Contact.vue';
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
		<Contact />
      </template>
      <template v-else>
        <router-view />
      </template>
    </main>

    <Footer />
  </div>
</template>
