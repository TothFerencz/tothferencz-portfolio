import { ref } from 'vue';

export function useAnimations(linkCount = 4, footerCount = 4) {
	const showLinks = ref(Array(linkCount).fill(false));
	const showFooter = ref(Array(footerCount).fill(false));

	const linkDelay = 120;
	const footerDelay = 90;


	function animateIn() {
		showLinks.value.fill(false);
		showFooter.value.fill(false);

		setTimeout(() => {
			showLinks.value.forEach((_, idx) => {
				setTimeout(() => {
					showLinks.value[idx] = true;
				}, idx * linkDelay);
			});

			setTimeout(() => {
				showFooter.value.forEach((_, idx) => {
					setTimeout(() => {
						showFooter.value[idx] = true;
					}, idx * footerDelay);
				});
			}, showLinks.value.length * linkDelay + 100);
		}, 300);
	}

	function animateOut(callback) {
		showLinks.value.forEach((_, idx) => {
			setTimeout(() => {
				showLinks.value[showLinks.value.length - 1 - idx] = false;
			}, idx * linkDelay);
		});

		setTimeout(() => {
			showFooter.value.forEach((_, idx) => {
				setTimeout(() => {
					showFooter.value[showFooter.value.length - 1 - idx] = false;
				}, idx * footerDelay);
			});
		}, showLinks.value.length * linkDelay + 100);

		const totalDuration =
			showLinks.value.length * linkDelay +
			100 +
			showFooter.value.length * footerDelay +
			150;

		setTimeout(() => {
			if (callback) callback();
		}, totalDuration);
	}

	return {
		showLinks,
		showFooter,
		animateIn,
		animateOut,
	};
}
