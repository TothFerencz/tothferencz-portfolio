<template>
  <section
    class="max-w-7xl mx-auto flex flex-col items-center justify-start pt-24 pb-24 px-4 text-black
           "
  >
<h1
  class="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase
         transition-all duration-700 ease-out transform"
  :class="showLinks[0]
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4'"
>
  <span>I am a</span><br />
  <span>full stack developer</span><br />
  <span>based in Romania</span>
</h1>
    <!-- Egy közös group a hover-hez -->
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
        href="#contact"
        class="uppercase text-base md:text-lg lg:text-xl font-inter font-[600] tracking-wide
               cursor-pointer transition-colors duration-300"
      >
        LET’S CONNECT
      </a>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAnimations } from '@/composables/useAnimationsMenu';
import ArrowIcon from '@/assets/arrow.svg';

const { showLinks, animateIn } = useAnimations(2, 0);
onMounted(() => animateIn());
// A parallax-hoz kapcsolódó kódokat már el is távolítottad, elég a CSS-es hover.
</script>
