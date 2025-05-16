<template>
  <footer class="bg-black text-white min-h-screen w-full px-4">
    <div class="max-w-7xl w-full min-h-screen mx-auto flex flex-col justify-between py-16">

      <!-- Középen a tartalom -->
      <div class="flex flex-col items-center justify-center flex-1 text-center">
        <div class="text-6xl md:text-8xl font-extrabold tracking-tight mb-12">
          SAY HELLO
        </div>

        <!-- Animált kapcsolat rész -->
        <div
          class="mt-8 flex items-center space-x-4 transition-all duration-700 ease-out transform group opacity-0 translate-y-4"
          :class="isMounted && showLinks[1] ? 'opacity-100 translate-y-0' : ''"
        >
          <!-- Ikon -->
          <div
            class="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center
                   transform transition-transform duration-300 group-hover:scale-125 cursor-pointer"
          >
            <img
              :src="ArrowIcon"
              alt="arrow"
              class="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45"
            />
          </div>

          <!-- Mailto link -->
          <a
            href="mailto:ferencztothdev@gmail.com"
            class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide
                   cursor-pointer transition-colors duration-300"
          >
            LET’S CONNECT
          </a>
        </div>
      </div>

      <!-- Footer alja (nincs animáció) -->
      <div class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-xs pt-10">
        <!-- Made by -->
        <span
          class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide cursor-pointer md:block hidden"
        >
          Made by Ferencz
        </span>

        <!-- Social linkek -->
        <div class="flex flex-row flex-wrap justify-center items-center gap-6 uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="hover-slide-up transform transition-all duration-300 ease-out"
          >
            <span>{{ link.label }}</span>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAnimations } from '@/composables/useAnimationsMenu';
import ArrowIcon from '@/assets/arrow-white.svg';

// Csak a LET’S CONNECT szekciót animáljuk (2 anim slotból az egyik)
const { showLinks, animateIn } = useAnimations(2, 0);

const socialLinks = [
	{ label: 'Instagram', href: 'https://www.instagram.com/tothferencz_/' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/ferencz-toth/' },
	{ label: 'Github', href: 'https://github.com/TothFerencz' }
];

const isMounted = ref(false);

onMounted(() => {
	isMounted.value = true;
	requestAnimationFrame(() => animateIn());
});
</script>
