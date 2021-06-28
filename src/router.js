import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes:[
        {
            redirect:'/index',
            path:'/',
            name:'home',
            component:()=>import('./views/home.vue'),
            children:[
                {path:'/index',name: 'index', component:()=>import('./views/index.vue')},
                {path:'/product/:id',name: 'product', component:()=>import('./views/product.vue')},
                {path:'/detail/:id',name: 'detail', component:()=>import('./views/detail.vue')},
            ]
        },
        {
            path:'/login', name:'login',component:()=>import('./views/login.vue')
        },
        {
            path: '/cart', name: 'cart', component: ()=>import('./views/cart.vue')
        },
        {
            path: '/order', name: 'order', component: ()=>import('./views/order.vue'),
            children:[
                { path:'list',name: 'order-list', component:()=>import('./views/orderList.vue') },
                { path:'confirm',name: 'order-confirm', component:()=>import('./views/orderConfirm.vue') },
                { path:'pay',name: 'order-pay', component:()=>import('./views/orderPay.vue') },
                { path:'alipay',name: 'alipay', component:()=>import('./views/alipay.vue') }
            ]
        }
    ]
})