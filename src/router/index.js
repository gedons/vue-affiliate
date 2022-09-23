import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
//import DefaultLayout from '../components/defaultLayout.vue';
import Home from '../views/Index.vue';
import Tutorials from '../views/Tutorials.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
        
    },
    {
        path: '/tutorials',
        name: 'Tutorials',
        component: Tutorials
        
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
        
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }

    

];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;