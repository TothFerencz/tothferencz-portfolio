<template>
  <div class="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
    <!-- Background image -->
    <img
      src="../assets/stacks.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 z-10 rounded-3xl"></div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto">
      <h1 class="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-12 conta">
		MY STACKS
      </h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(stack, index) in stacks"
          :key="index"
          class="bg-gradient-to-br from-black/90 to-black/10 backdrop-blur-md text-gray-300 text-2lg sm:text-xl font-semibold py-8 px-8 sm:px-6 rounded-2xl text-center shadow-md transition transform hover:scale-95"
        >
          {{ stack }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'MyStacks',
	data() {
		return {
			stacks: []
		};
	},
	async mounted() {
		try {
			const response = await fetch('/data/stacks.json');
			if (!response.ok) throw new Error('Failed to fetch stacks');
			this.stacks = await response.json();
		} catch (error) {
			console.error(error);
		}
	}
};
</script>
