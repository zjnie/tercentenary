import Vue from 'vue'
import VueRouter from 'vue-router'
import teacher from './teacher'
import student from './student'
import newStudent from './new_student'

Vue.use(VueRouter)

const routes = [
  {
    path: '/teacher',
    redirect: '/teacher/home',
  },
  {
    path: '/student',
    redirect: '/student/home',
  },
  {
    path: '/new-student',
    redirect: '/new-student/home',
  },
  ...teacher,
  ...student,
  ...newStudent
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (Vue.prototype.$userInfo) return next()
  if (to.path !== '/') return next('/')
  next()
})

export default router
