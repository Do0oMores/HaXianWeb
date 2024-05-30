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

export default router
