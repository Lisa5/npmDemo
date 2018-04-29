
// import './assets/css/common.css'
import {cube} from './math.js'
import Vue from 'vue'
import App from './App'
import router from './router'

// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

// function component () {
//     var el = document.createElement('div');
//     el.innerHTML = 'cube 55 is: ' + cube(55);
//     console.log(el)
//     return el
// }
// document.body.appendChild(component())
// if (module.hot) {
//    module.hot.accept('./print.js', function() {
//        console.log('Accepting the updated the printMe module!')
//    })
// }
console.log(router)

new Vue({
  el: '#app',
  router: router,
//   components: { App },
//   template: '<App/>',
  render: h => h(App)
})

