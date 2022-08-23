const dynamicImport = name => {
  return () => import(`@/views/new-student/${name}.vue`)
}

const basePath = '/new-student'

export default [
  {
    path: basePath + '/home',
    component: dynamicImport('Home')
  },
  {
    path: basePath + '/history',
    component: dynamicImport('History')
  },
  {
    path: basePath + '/time',
    component: dynamicImport('Time')
  },
  {
    path: basePath + '/distance',
    component: dynamicImport('Distance')
  },
  {
    path: basePath + '/photo',
    component: () => import(`@/views/teacher/Photo.vue`)
  },
  {
    path: basePath + '/end',
    component: dynamicImport('End')
  }
]