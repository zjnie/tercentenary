const dynamicImport = name => {
  return () => import(`@/views/teacher/${name}.vue`)
}

const basePath = '/teacher'

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
    path: basePath + '/education',
    component: dynamicImport('Education')
  },
  {
    path: basePath + '/service',
    component: dynamicImport('Service')
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
    component: dynamicImport('Photo')
  },
  {
    path: basePath + '/end',
    component: dynamicImport('End')
  }
]