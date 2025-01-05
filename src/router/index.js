import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Education from '../components/Education.vue';
import Skills from '../components/Skills.vue';
import Portfolio from '../components/Portfolio.vue';
import Weather from '../components/Weather.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/education', 
      name: 'education',
      component: Education,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});

export default router;
