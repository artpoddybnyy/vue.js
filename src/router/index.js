import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import CustomHello from '@/components/CustomHello';
import PostsComponent from '@/components/PostsComponent';
import HomeWorks from '@/components/HomeWorks';
import HomeWorkForm from '@/components/home-works/HomeWorkForm';
import HomeWorkSlider from '@/components/home-works/HomeWorkSlider';


Vue.use(Router);

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
    },
    {
      path: '/posts',
      name: 'PostsComponent',
      component: PostsComponent
    },
    {
      path: '/home-works',
      name: 'HomeWorks',
      component: HomeWorks,
      children: [
        {
        path: '/form',
        name: 'HomeWorkForm',
        component: HomeWorkForm
      },
      {
        path: '/slider',
        name: 'HomeWorkSlider',
        component: HomeWorkSlider
      }
      ]
    },

  ]
})
