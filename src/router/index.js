import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/Login/Login').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home/Home').default,
      children: [
        {
          path: "/home/",
          name: "judge-user",
          component: require('@/components/JudgeUser/JudgeUser').default
        },
        {
          path: 'buy',
          name: 'buy',
          component: require('@/components/Buy/Buy').default
        },
        {
          path: 'plane-ticket',
          name: 'plane-ticket',
          component: require('@/components/PlaneTicket/PlaneTicket').default
        },
        {
          path: 'company',
          name: 'company',
          component: require('@/components/Company/Company').default
        },
        {
          path: 'order',
          name: 'order',
          component: require('@/components/Order/Order').default
        },
        {
          path: 'approval',
          name: 'approval',
          component: require('@/components/Approval/Approval').default
        },
        {
          path: 'selfcenter',
          name: 'selfcenter',
          component: require('@/components/SelfCenter/SelfCenter').default
        },
        {
          path: 'order_details',
          name: 'order_details',
          component: require('@/components/Order_details/Order_details').default
        },
        {
          path: 'reserve',
          name: 'reserve',
          component: require('@/components/Reserve/Reserve').default
        },
        {
          path: 'hotel',
          name: 'hotel',
          component: require('@/components/Hotel/Hotel').default
        }
      ]
    }
  ]
})
