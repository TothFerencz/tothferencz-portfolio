import { ref, watchEffect, onMounted } from 'vue';

const theme = ref('light');

const setTheme = (value) => {
	theme.value = value;
};

const toggleTheme = () => {
	theme.value = theme.value === 'light' ? 'dark' : 'light';
};

// Sync html <html class="dark"> attribútum
watchEffect(() => {
	const html = document.documentElement;
	if (theme.value === 'dark') {
		html.classList.add('dark');
	} else {
		html.classList.remove('dark');
	}
	localStorage.setItem('theme', theme.value);
});

// Init from localStorage
onMounted(() => {
	const saved = localStorage.getItem('theme');
	if (saved === 'dark' || saved === 'light') {
		theme.value = saved;
	}
});

export function useTheme() {
	return {
		theme,
		toggleTheme,
		setTheme
	};
}