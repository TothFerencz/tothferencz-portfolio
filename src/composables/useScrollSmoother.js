import { gsap } from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// ⬇️ IDE KERÜL a smoother globálisan
let smoother = null;

export function useScrollSmoother() {
	function initSmoother() {
		if (smoother) return;

		const wrapper = document.querySelector('#smooth-wrapper');
		const content = document.querySelector('#smooth-content');
		if (!wrapper || !content) {
			console.warn('ScrollSmoother: wrapper/content elem nem található.');
			return;
		}

		smoother = ScrollSmoother.create({
			wrapper,
			content,
			smooth: 1.2,
			effects: true,
			normalizeScroll: true,
			smoothTouch: 0.1,
		});
	}

	function disableSmoother() {
		if (smoother) {
			smoother.paused(true);
		}
	}

	function enableSmoother() {
		if (smoother) {
			smoother.paused(false);
		}
	}

	return {
		initSmoother,
		disableSmoother,
		enableSmoother,
	};
}
