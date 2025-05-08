// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RecentProjects from '@/components/RecentProjects.vue';
import ProjectDetail from '@/components/ProjectDetail.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Portfolio from '@/components/Portfolio.vue';

const routes = [
	{ path: '/', name: 'Home', component: RecentProjects },
	{ path: '/portfolio', name: 'Portfolio', component: Portfolio },
	{ path: '/about', name: 'About', component: About },
	{ path: '/contact', name: 'Contact', component: Contact },
	{ path: '/portfolio/:projectName', name: 'ProjectDetail', component: ProjectDetail }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// minden navigációnál görgess a lap tetejére, ne jegyezze meg a korábbi pozíciót
		return { top: 0 };
	}
});

export default router;
