import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/pages/work/Work.vue'
import WorkPreview from '@/components/WorkPreview.vue' // 👈 ez lesz a kezdőoldal

const routes = [
	{
		path: '/',
		name: 'Home',
		component: WorkPreview
	},
	{
		path: '/work',
		name: 'Work',
		component: Work
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
