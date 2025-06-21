import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeComponent.vue';
import About from '../views/AboutComponent.vue';
import UserDashboard from '../views/Dashboard/UserDashboard.vue';
import ObjectComponent from '@/views/ObjectComponent.vue';
import ObjectDetails from '@/views/ObjectDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/object/',
    children: [
      {
        path: 'list/:id',
        name: 'ObjectComponent',
        component: ObjectComponent,
        props: true
      },
      {
        path: 'details/:id',
        name: 'ObjectDetails',
        component: ObjectDetails,
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// Mock user role (replace this with actual user authentication logic)
const getUserAccess = () => {
    return 'oooo'; // Example: Change to 'admin', 'user', etc.
  };
  
  router.beforeEach((to, from, next) => {
    const userAccess = getUserAccess();
  
    // Role-based access control
    if (userAccess == null) {
      next('/'); // Redirect unauthorized users to the default dashboard
    } 
    // else if (to.path === '/manager' && userRole !== 'manager') {
    //   next('/about');
    // } 
    else {
      next(); // Allow access
    }
  });

export default router;
