const dynamicImport = name => {
  return () => import(`@/views/student/${name}.vue`)
}

const basePath = '/student'

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
    path: basePath + '/study',
    component: dynamicImport('Study')
  },
  {
    path: basePath + '/sport',
    component: dynamicImport('Sport')
  },
  {
    path: basePath + '/read',
    component: dynamicImport('Read')
  },
  {
    path: basePath + '/food',
    component: dynamicImport('Food')
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