<template>
    <nav class="flex justify-between items-center px-6 py-6 bg-neutral-50 relative z-50 container mx-auto">
        <div class="text-3xl font-bold text-neutral-900">FT</div>

        <!-- Desktop nav -->
        <div class="hidden md:flex ">
            <button v-for="(item, index) in navItems" :key="index" @click="setActive(item)"
                :class="[
      'border border-neutral-400 rounded-full text-xs transition-all duration-300 ease-in-out cursor-pointer',
      activeItem === item
        ? 'px-6 py-3 bg-black text-white hover:px-7 hover:py-2'
        : 'px-6 py-3 text-neutral-900 hover:bg-black hover:text-white hover:px-7 hover:py-2'
    ]"
  >
                {{ item }}
            </button>
        </div>
        <!-- Mobile hamburger -->
        <div class="md:hidden">
            <button @click="toggleMenu"
                class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-400">
                <img src="@/assets/hamburger.svg" alt="Menu" class="w-5 h-5" />
            </button>
        </div>

        <!-- Mobile menu (full screen) -->
        <transition name="fade">
            <div v-if="isMenuOpen" class="fixed inset-0 bg-neutral-50 flex flex-col px-8 py-12 z-40">
                <button @click="toggleMenu"
                    class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-400">
                    <img src="@/assets/close.svg" alt="Close" class="w-5 h-5" />
                </button>

                <div class="pt-10 w-full space-y-6">
                    <button v-for="(item, index) in navItems" :key="index"
                        @click="setActive(item); toggleMenu()"
                        :class="[
                            'w-full text-left text-2xl font-bold border-b border-neutral-300 pb-3',
                            activeItem === item ? 'text-black' : 'text-neutral-800'
                        ]">
                        {{ item }}
                    </button>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navItems = ['HOME', 'PORTFOLIO', 'ABOUT', 'CONTACT ME'];
const isMenuOpen = ref(false);
const activeItem = ref(navItems[0]); // Alapértelmezetten az első menüpont aktív

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
}

function setActive(item) {
	activeItem.value = item;
}

const handleResize = () => {
	if (window.innerWidth >= 768) {
		isMenuOpen.value = false;
	}
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
