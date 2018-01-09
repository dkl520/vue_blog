const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: resolve => { require(['@/views/index.vue'], resolve); }
    },
    {
        path: '/login',
        name:"login",
        meta: {
            title: ''
        },
        component: resolve => { require(['@/views/login/login.vue'], resolve); }
    },
{ path: 'home', title: {i18n: 'home'}, name: 'home', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
];
export default routers;