export function usePageAnimations() {
	function animateIn() {
		const els = document.querySelectorAll('[data-animate-in]');
		els.forEach((el, i) => {
			// Reset initial state
			el.style.opacity = '0';
			el.style.transform = 'translateY(24px)';
			el.style.transition = 'none';

			// Trigger reflow to ensure transition is reset
			void el.offsetHeight;

			setTimeout(() => {
				el.style.transition = 'all 0.6s ease-out';
				el.style.opacity = '1';
				el.style.transform = 'translateY(0)';
			}, i * 80);
		});
	}

	return { animateIn };
}
