
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/hello-world',
      component: (resolve) => require(['common/components/hello-world'], resolve)
    }
  ]
})