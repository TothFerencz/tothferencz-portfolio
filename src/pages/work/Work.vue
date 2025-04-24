<template>
  <section class="max-w-2xl mx-auto px-4 py-16 mt-12">
    <h2 class="text-base font-prm-semibold text-gray-800 mb-12">All Work Experience</h2>

    <div v-for="(job, index) in jobs" :key="index" class="mb-6">
<div class="space-y-q">
 <h3 class="text-basefont-semibold">{{ job.company }}</h3>
      <p class="text-sm text-gray-700 font-prm font-prm-light">{{ job.role }}</p>
      <p class="text-sm text-gray-700 font-prm font-prm-light">{{ job.period }}</p>
</div>
      <p class="text-base text-gray-700 font-prm font-prm-light mt-8">{{ job.description }}</p>
    </div>
  </section>
</template>

<script setup>
const jobs = [
	{
		company: 'PomsCloud Ltd.',
		role: 'Full Stack Developer',
		period: 'Dec 2023 - Current',
		description: 'Currently, I am a full stack developer at PomsCloud Ltd. where I do website development.'
	}
];
</script>
