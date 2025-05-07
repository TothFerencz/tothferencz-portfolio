import { createRouter, createWebHistory } from 'vue-router';
import RecentProjects from '@/components/RecentProjects.vue';
import ProjectDetail from '@/components/ProjectDetail.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: RecentProjects
	},
	{
		path: '/portfolio/:projectName',
		name: 'ProjectDetail',
		component: ProjectDetail
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
