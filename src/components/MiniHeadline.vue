<template>
  <div class="flex items-center h-8 overflow-hidden whitespace-nowrap bg-neutral-200 text-xs font-semibold text-neutral-600 uppercase tracking-wide border">
    <div class="inline-block animate-marquee">
      <span
        v-for="i in repeat"
        :key="i"
        class="inline-flex items-center space-x-2"
      >
        <!-- bal oldali távolság -->
        <div class="w-4"></div>

        <!-- csillag ikon -->
        <img src="@/assets/star.svg" alt="Star" class="h-4 w-4" />

        <!-- jobb oldali távolság -->
        <div class="w-4"></div>

        <!-- szöveg -->
        <span>AVAILABLE AND EAGER TO LEND MY EXPERTISE TO GROUNDBREAKING DEVELOPMENT PROJECTS</span>
      </span>
    </div>
  </div>
</template>



<script setup>
const repeat = 10; // ahányszor ismétlődjön a szöveg
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
