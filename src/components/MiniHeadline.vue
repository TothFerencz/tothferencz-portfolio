<template>
  <div class="relative h-6 overflow-hidden bg-neutral-200 border text-neutral-600 uppercase tracking-wide text-xs ">
    <div class="absolute top-0 left-0 flex animate-marquee h-full items-center whitespace-nowrap">
      <div
        v-for="i in repeat"
        :key="i"
        class="flex items-center h-full"
      >
        <!-- bal oldali távolság -->
        <div class="w-4"></div>

        <!-- csillag ikon -->
        <img src="@/assets/star.svg" alt="Star" class="h-4 w-4 object-contain" />

        <!-- jobb oldali távolság -->
        <div class="w-4"></div>

        <!-- szöveg -->
        <span class="leading-none ">
          AVAILABLE AND EAGER TO LEND MY EXPERTISE TO GROUNDBREAKING DEVELOPMENT PROJECTS
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const repeat = 10;
</script>

<style>
@keyframes marquee {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}
.animate-marquee {
	animation: marquee 50s linear infinite;
}
</style>
