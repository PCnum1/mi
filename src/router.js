import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import Home from './views/home.vue'
import Index from './views/index.vue'
import Product from './views/product.vue'
import Detail from './views/detail.vue'
import Cart from './views/cart.vue'
import Order from './views/order.vue'
import OrderList from './views/orderList.vue'
import OrderConfirm from './views/orderConfirm.vue'
import OrderPay from './views/orderPay.vue'
import Alipay from './views/alipay.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            // redirect:'/index',
            path:'/',
            name:'home',
            component:Home,
            children:[
                {path:'/index',name: 'index', component:Index},
                {path:'/product/:id',name: 'product', component:Product},
                {path:'/detail/:id',name: 'detail', component:Detail},
            ]
        },
        {
            path:'/login', name:'login',component:Login
        },
        {
            path: '/cart', name: 'cart', component: Cart
        },
        {
            path: '/order', name: 'order', component: Order,
            children:[
                { path:'list',name: 'order-list', component:OrderList },
                { path:'confirm',name: 'order-confirm', component:OrderConfirm },
                { path:'pay',name: 'order-pay', component:OrderPay },
                { path:'alipay',name: 'alipay', component:Alipay }
            ]
        }
    ]
})