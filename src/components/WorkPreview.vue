<template>
  <section class="max-w-2xl mx-auto px-4 py-16">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-base font-prm-semibold text-gray-800">Work</h2>
      <button @click="goToWork" class="text-gray-600 text-sm font-prm-semibold cursor-pointer hover:bg-gray-200/40 px-4 py-1 rounded-md transition-colors ">
        See all work
      </button>
    </div>

    <div class="mb-6">
<div class="space-y-1">
<h3 class="text-basefont-semibold">{{ currentJob.company }}</h3>
      <p class="text-sm text-gray-700 font-prm font-prm-light">{{ currentJob.position }}</p>
      <p class="text-sm text-gray-700 font-prm font-prm-light">{{ currentJob.period }}</p>
</div>
      
      <p class="text-base text-gray-700 font-prm font-prm-light mt-8">
        {{ currentJob.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();

function goToWork() {
	router.push('/work');
}

const currentJob = reactive({
	company: 'PomsCloud Ltd.',
	position: 'Full Stack Developer',
	period: 'Dec 2023 - Current',
	description: 'Currently, I am a full stack developer at PomsCloud Ltd. where I do website development.'
});
</script>
