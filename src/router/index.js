import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'
import Modify from '../views/Modify.vue'
import entry from '../views/entry.vue'
import Course from '../views/Course.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'courses',
      component: CoursesView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
	{
	  path: '/modify',
	  name: 'modify',
	  component: Modify
	},
	{
	  path: '/entry',
	  name: 'entry',
	  component: entry
	},
  {
    path: "/course/dummy",
    name: "CourseView",
    component: Course,
    }
  ]
})

export default router
