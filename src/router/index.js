// index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
// import Projects from '../views/projects.vue'; 
import Projects from '../views/projectsNewCombined.vue'; 
import Skills from '../views/skills.vue'; 
import Contact from '../views/contact.vue'; 
import Languages from '../views/languages.vue'; 
// import Footer from '../views/footer.vue';
import FooterNew from '../views/footerNew.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
			name: 'Home',
			children: [
				{
					path: 'about',
					component: About,
					name: 'About',
				},
				{
					path: 'projects',
					component: Projects,
					name: 'Projects',
				},
				{
					path: 'skills',
					component: Skills,
					name: 'Skills',
				},
				{
					path: 'languages',
					component: Languages,
					name: 'Languages',
				},
				{
					path: 'contact',
					component: Contact,
					name: 'Contact',
				},
				{
					path: 'footerNew',
					component: FooterNew,
					name: 'Footer',
				},
			],
		},
	],
})

export default router