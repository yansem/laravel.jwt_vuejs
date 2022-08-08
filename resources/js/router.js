import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/fruit', component: () => import('./components/Fruit/Index'),
            name: 'fruit.index'
        }
    ]
})
