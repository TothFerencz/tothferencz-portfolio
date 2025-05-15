import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Work from '../pages/Work.vue';
import ProjectList from '@/components/ProjectList.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/works',
		name: 'Works',
		component: ProjectList,

	},
	{
		path: '/works/:slug',
		name: 'Work',
		component: Work,
		props: true // fontos, hogy a slug propként átadódjon
	}
];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
