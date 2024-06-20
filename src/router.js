import { createRouter, createWebHistory } from 'vue-router'
import ContactForm from './components/ContactForm.vue';
import ProductList from './components/ProductList.vue';
import PaginaPrincipal from './components/PaginaPrincipal.vue';

const routes = [
    {
        path: '/',
        component: PaginaPrincipal
    },
    {
        path: '/contact-form',
        component: ContactForm,
    },
    {
        path: '/lista-produto',
        component: ProductList,
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;