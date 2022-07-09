import vueRouter from 'vue-router'
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

export default new vueRouter({
  routes: [
    {
      path: '/about',
      component: MyAbout
    },
    {
      path: '/home',
      component: MyHome,
      children: [
        {
          path: 'news',
          component: MyNews
        },
        {
          path: 'messages',
          component: MyMessage,
          children: [
            {
              name:'xiangqing',
              path: 'detail/:id/:title',
              component: MyDetail,
              //第一种写法
              // props: {id: 666, title: '111'}
              //第二种写法 值为true,将路由收到的所有params参数通过props传给detail组件
              // props: true
              // 第三种写法
              props(route) {
                return {
                  id: route.params.id,
                  title: route.params.title
                }
              }

            }
          ]
        }
      ]
    }
  ]
})