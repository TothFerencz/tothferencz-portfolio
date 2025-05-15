// composables/useLenis.js
import { onMounted, onUnmounted, ref } from 'vue';
import Lenis from '@studio-freight/lenis';

export function useLenis(options = {}) {
  const lenis = ref(null);

  const initLenis = () => {
    lenis.value = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      ...options
    });

    const raf = (time) => {
      lenis.value?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  };

  onMounted(() => {
    initLenis();
  });

  onUnmounted(() => {
    lenis.value?.destroy();
  });

  return {
    lenis
  };
}
