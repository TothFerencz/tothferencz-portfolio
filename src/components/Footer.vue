<template>
  <footer class="bg-black text-white min-h-screen w-full px-4">
    <div class="max-w-7xl w-full min-h-screen mx-auto flex flex-col justify-between py-16">

      <!-- Középen a tartalom -->
      <div class="flex flex-col items-center justify-center flex-1 text-center">
        <div class="text-6xl md:text-8xl font-extrabold tracking-tight mb-12">
          SAY HELLO
        </div>

        <div
      class="mt-8 flex items-center space-x-4 transition-all duration-700 ease-out transform group"
      :class="showLinks[1]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-4'"
    >
      <!-- IKON KÖRREL -->
      <div
        class="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center
               transform transition-transform duration-300 group-hover:scale-125 cursor-pointer"
      >
        <img
          :src="ArrowIcon"
          alt="arrow"
          class="w-4 h-4 transform transition-transform duration-300
                 group-hover:rotate-45 group-hover:"
        />
      </div>

   <a
  href="mailto:ferencztothdev@gmail.com"
  class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide
         cursor-pointer transition-colors duration-300"
>
  LET’S CONNECT
</a>
    </div>
      </div>

     <!-- Footer alja -->
<div class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-xs pt-10">
  <span class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transform transition-all duration-700 ease-out cursor-pointer md:block hidden">
    Made by Ferencz
  </span>

  <div class="flex flex-row flex-wrap justify-center items-center gap-6 uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide transform transition-all duration-700 ease-out cursor-pointer">
    <a
      href="https://www.instagram.com/tothferencz_/"
      target="_blank"
      rel="noopener"
      class="hover-slide-up transform transition-all duration-300 ease-out"
    >
      <span>Instagram</span>
      <span>Instagram</span>
    </a>
    <a
      href="https://linkedin.com/in/ferencz-toth/"
      target="_blank"
      rel="noopener"
      class="hover-slide-up transform transition-all duration-300 ease-out"
    >
      <span>LinkedIn</span>
      <span>LinkedIn</span>
    </a>
    <a
      href="https://github.com/TothFerencz"
      target="_blank"
      rel="noopener"
      class="hover-slide-up transform transition-all duration-300 ease-out"
    >
      <span>Github</span>
      <span>Github</span>
    </a>
  </div>
</div>


    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAnimations } from '@/composables/useAnimationsMenu';
import ArrowIcon from '@/assets/arrow-white.svg';

const { showLinks, animateIn } = useAnimations(2, 0);
onMounted(() => animateIn());
// A parallax-hoz kapcsolódó kódokat már el is távolítottad, elég a CSS-es hover.
</script>
