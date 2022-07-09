import vueRouter from 'vue-router'
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

const router = new vueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: MyAbout,
      meta: {
        title: '关于'
      }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: MyHome,
      meta: {
        title: '主页'
      },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: MyNews,
          meta: {
            isAuth: true,
            title: '新闻'
          },
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.name === 'atguigu') {
                next()
              }
              else {
                alert('无权限')
              }
            } 
            else {
              next()
            }
          }
        },
        {
          name: 'xiaoxi',
          path: 'messages',
          component: MyMessage,
          meta: {
            isAuth: true,
            title: '消息'
          },
          children: [
            {
              name:'xiangqing',
              path: 'detail/:id/:title',
              component: MyDetail,
              meta: {
                title: '详情'
              },
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

// router.beforeEach((to, from, next) => {  //全局前置路由守卫 初始化执行一次 路由切换前执行
//   // if (to.path === '/home/messages' || to.path === '/home/news') {
//   // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
//   if (to.meta.isAuth) {
//     if (localStorage.name === 'atguigu') {
//       next()
//     }
//     else {
//       alert('无权限')
//     }
//   } 
//   else {
//     next()
//   }
// })

router.afterEach((to, from) => {  //全局后置路由守卫 初始化执行一次 路由切换后执行
  console.log(to, from)
  document.title = to.meta.title || '系统' //这样改初始界面一直刷新还会有一瞬间undefined，可以通过改index.html解决
})

export default router