import { createRouter, createWebHistory } from 'vue-router';
import Categories from '@/views/Categories.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';

const routes = [
    { path: '/', name: 'Categories', component: Categories },
    { path: '/product/:id', name: 'Product', component: Product },
    { path: '/cart', name: 'Cart', component: Cart }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
