import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CustomHello from '@/components/CustomHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/custom',
      name: 'CustomHello',
      component: CustomHello
    }
  ]
})
