const login = () => import('@/pages/login/index.vue')
const errorPage = () => import('@/pages/common/error.vue')
export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/error',
        name: 'error',
        component: errorPage,
        meta: {
            title: '系统出错了'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录'
        }
    }
]
