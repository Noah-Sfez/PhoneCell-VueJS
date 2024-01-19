import { createRouter, createWebHistory } from 'vue-router'
import ClavierView from '../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue'
import NewContactView from '../views/NewContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/newcontact',
      name: 'newcontact',
      component: NewContactView
    },
  ]
})

export default router
