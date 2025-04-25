<template>
    <nav class="fixed top-0 w-full bg-white/80 py-6 px-2 z-50 backdrop-blur-md  ">
        <div class="mx-auto px-4  max-w-2xl flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
                <svg width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="none" />
                    <path d="M60 40 H140 V60 H110 V160 H90 V60 H60 Z" fill="black" />
                    <path d="M110 100 H140 V120 H110 V160 H90 V120 H70 V100 H90 V80 H110 Z" fill="black" />
                </svg>
            </div>

            <!-- Nav Links + Toggle -->
            <div class="flex items-center gap-1 text-gray-800 font-prm-thin">
                <router-link to="/" class="hover:bg-gray-200/40 px-4 py-1 rounded-md transition-colors">
                    home
                </router-link>
                <router-link to="/work" class="hover:bg-gray-200/40 px-4 py-1 rounded-md transition-colors">
                    work
                </router-link>
                <router-link to="/projects" class="hover:bg-gray-200/40 px-4 py-1 rounded-md transition-colors">
                    projects
                </router-link>


                <!-- Toggle Button -->
                <button @click="toggleTheme"
                    class=" cursor-pointer  hover:bg-gray-200/40 px-4 py-1 rounded-md transition-colors">
                    <transition name="fade-scale" mode="out-in">
                        <span :key="theme">
                            <svg v-if="theme === 'light'" id="light" width="20" height="20"
                                viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M7.75 10.25C9.54493 10.25 11 8.79493 11 7C11 5.20507 9.54493 3.75 7.75 3.75C5.95507 3.75 4.5 5.20507 4.5 7C4.5 8.79493 5.95507 10.25 7.75 10.25Z"
                                        stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.75 0.5V1.5" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7.75 12.5V13.5" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14.25 7H13.25" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M2.25 7H1.25" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12.35 2.3999L11.64 3.1099" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M3.85999 10.8899L3.14999 11.5999" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12.35 11.5999L11.64 10.8899" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M3.85999 3.1099L3.14999 2.3999" stroke="#000001" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="14" height="14" fill="white"
                                            transform="translate(0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg v-else id="dark" width="20" height="20" viewBox="0 0 15 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.75 10.48C10.5883 10.4729 9.44946 10.157 8.45014 9.56463C7.45083 8.97228 6.62703 8.12482 6.06321 7.10913C5.4994 6.09345 5.21585 4.94609 5.24164 3.78469C5.26743 2.6233 5.60164 1.48965 6.20999 0.5C4.60717 0.781382 3.16649 1.64934 2.16859 2.9348C1.17069 4.22026 0.687035 5.83116 0.811846 7.4537C0.936656 9.07624 1.66099 10.5942 2.84375 11.7119C4.02651 12.8297 5.58299 13.4671 7.20999 13.5C8.32312 13.5028 9.41809 13.218 10.3887 12.6731C11.3594 12.1282 12.1728 11.3418 12.75 10.39C12.4193 10.4446 12.0851 10.4747 11.75 10.48Z"
                                    stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </transition>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue';

const theme = ref('light');

const toggleTheme = () => {
	theme.value = theme.value === 'light' ? 'dark' : 'light';
};

// Beállítjuk a html class-t a dark mode-hoz
watchEffect(() => {
	const html = document.documentElement;
	if (theme.value === 'dark') {
		html.classList.add('dark');
	} else {
		html.classList.remove('dark');
	}
});

// (opcionális) elmentjük localStorage-ba
onMounted(() => {
	const saved = localStorage.getItem('theme');
	if (saved === 'dark' || saved === 'light') {
		theme.value = saved;
	}
});

watchEffect(() => {
	localStorage.setItem('theme', theme.value);
});
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
	transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
	opacity: 0;
	transform: scale(0.8);
}
</style>
