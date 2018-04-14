
import './assets/css/common.css'
import {cube} from './math.js'

// import './assets/img/bg-box.png'

function component () {
    var el = document.createElement('div');
    el.innerHTML = 'cube 55 is:sss ' + cube(55);
    console.log(el)
    return el
}
document.body.appendChild(component())
if (module.hot) {
   module.hot.accept('./print.js', function() {
       console.log('Accepting the updated the printMe module!')
   })
}

