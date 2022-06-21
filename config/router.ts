import { Login, Live, Monitor } from './componets';

const router = [
  {
    path: '/user',
    routers: [
      {
        name: 'login',
        path: '/user/login',
        component: Login
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    routers: [
      {
        name: 'monitor',
        path: '/dashboard/monitor',
        component: Monitor
      },
      {
        name: 'live',
        path: '/dashboard/live',
        component: Live
      }
    ]
  }
]

export default router
