<template>
  <!-- Top Navbar -->
  <nav class="relative mx-auto max-w-7xl flex items-center justify-between py-10 px-6 text-black">
    <!-- Left: Logo -->
    <div
      @click="router.push('/')"
      :class="[
        'uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transform transition-all duration-700 ease-out cursor-pointer',
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
    >
      FERENCZ
    </div>

    <!-- Center: Portfolio - absolute centered -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden"
      :class="[
        'text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-700 ease-out delay-150',
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
    >
      PORTFOLIO/2025
    </div>

    <!-- Right: Menu Button -->
    <button
      @click="toggle"
      class="menu-btn flex items-center focus:outline-none"
      :class="[
        'transform transition-all duration-700 ease-out delay-300',
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
    >
      <span class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide cursor-pointer">MENU</span>
    </button>
  </nav>

  <!-- Slide-Down Panel -->
  <transition
    enter-active-class="transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-[#f2f2f2] z-50 text-black">
      <div class="relative mx-auto max-w-7xl flex flex-col justify-center h-full py-10 px-6">
        <!-- Slide Menu Top Row -->
        <div class="absolute top-10 left-6 right-6 flex items-center justify-between z-50">
          <div class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">FERENCZ</div>
          <button @click="toggle" class="flex items-center focus:outline-none">
            <span class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide cursor-pointer">CLOSE</span>
          </button>
        </div>

        <!-- Slide Menu Links -->
        <div class="flex-1 flex flex-col justify-center items-start md:items-start space-y-8">
          <a
            href="javascript:void(0)"
            @click="navigateTo('Home')"
            :class="[
              'hover-slide-up text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-300 ease-out text-center md:text-left',
              showLinks[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            ]"
          >
            <span>Home</span>
            <span>Home</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="navigateTo('Work')"
            :class="[
              'hover-slide-up text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-300 ease-out text-center md:text-left',
              showLinks[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            ]"
          >
            <span>Projects</span>
            <span>Projects</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="navigateTo('About')"
            :class="[
              'hover-slide-up text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-300 ease-out text-center md:text-left',
              showLinks[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            ]"
          >
            <span>About</span>
            <span>About</span>
          </a>
          <a
         href="mailto:ferencztothdev@gmail.com"
           
            :class="[
              'hover-slide-up text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase transition-all duration-300 ease-out text-center md:text-left',
              showLinks[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            ]"
          >
            <span>Contact</span>
            <span>Contact</span>
          </a>
        </div>

        <!-- Footer -->
        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center py-8 space-y-6 md:space-y-0">
          <span
            class="hidden md:inline uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transition-all duration-300 ease-out"
            :class="[showFooter[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
          >
         Made by Ferencz
          </span>

          <div class="flex space-x-6 justify-center md:justify-end uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide text-center w-full md:w-auto">
            <a
              href="https://www.instagram.com/tothferencz_/"
              target="_blank"
              rel="noopener"
              :class="[
                'hover-slide-up transform transition-all duration-300 ease-out',
                showFooter[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              ]"
            >
              <span>Instagram</span>
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com/in/ferencz-toth/"
              target="_blank"
              rel="noopener"
              :class="[
                'hover-slide-up transform transition-all duration-300 ease-out',
                showFooter[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              ]"
            >
              <span>LinkedIn</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/TothFerencz"
              target="_blank"
              rel="noopener"
              :class="[
                'hover-slide-up transform transition-all duration-300 ease-out',
                showFooter[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              ]"
            >
              <span>Github</span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAnimations } from '@/composables/useAnimationsMenu';
import { useRouter } from 'vue-router';

const router = useRouter();

const isOpen = ref(false);
const showNavbar = ref(false);
const { showLinks, showFooter, animateIn, animateOut } = useAnimations();

onMounted(() => {
	setTimeout(() => {
		showNavbar.value = true;
	}, 100);
});

function openMenu() {
	isOpen.value = true;
	animateIn();
}

function closeMenu() {
	animateOut(() => {
		isOpen.value = false;
	});
}

function toggle() {
	isOpen.value ? closeMenu() : openMenu();
}

function navigateTo(label) {
	const routes = {
		Home: '/',
		Work: '/works',
		About: '/about',
		Contact: '/contact'
	};

	const targetRoute = routes[label];

	animateOut(async () => {
		isOpen.value = false;
		await new Promise((resolve) => setTimeout(resolve, 700));
		router.push(targetRoute);
	});
}
</script>
