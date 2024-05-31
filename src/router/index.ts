import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/admin',
            name: 'adminRouter',
            meta:{
                requireAuth: true,
                roles:['admin']
            },
            component: () => import('../views/Admin.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../components/SelectBill.vue')
                },
                {
                    path: 'selectbill',
                    name: 'selectbill',
                    component: () => import('../components/SelectBill.vue')
                },
                {
                    path: 'selectresidue',
                    name: 'selectresidue',
                    component: () => import('../components/SelectResidue.vue')
                },
                {
                    path: 'printconsumptionorders',
                    name: 'printconsumptionorders',
                    component: () => import('../components/PrintConsumptionOrders.vue')
                },
                {
                    path: 'changepackage',
                    name: 'changepackage',
                    component: () => import('../components/ChangePackage.vue')
                },
                {
                    path: 'leavenet',
                    name: 'leavenet',
                    component: () => import('../components/LeaveNet.vue')
                },
                {
                    path: 'scenariousage',
                    name: 'scenariousage',
                    component: () => import('../components/ScenarioUsage.vue')
                },
                {
                    path: 'userrecharge',
                    name: 'userrecharge',
                    component: () => import('../components/UserRecharge.vue')
                },
                {
                    path: 'tariffdescription',
                    name: 'tariffdescription',
                    component: () => import('../components/TariffDescription.vue')
                }
            ]
        }
    ]
})

//检查登录状态
router.beforeEach((to, from, next) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!isLoggedIn) {
            next({
                path: '/login',
                //保存想要访问的地址，登录后再重定向过去
                query: { redirect: to.fullPath ,message:'您还未登录!'}    
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
