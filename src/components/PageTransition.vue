<template>
  <div>
    <PageReveal @done="handleDone" />
    <div v-show="revealed">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PageReveal from '@/components/PageReveal.vue';

const revealed = ref(false);

function handleDone() {
	revealed.value = true;
}
</script>
