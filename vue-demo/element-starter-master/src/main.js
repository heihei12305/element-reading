import Vue from 'vue'
import App from './App.vue'
import Upload from '../packages/upload/index.js';
import Tooltip from '../packages/tooltip/index'
// import DatePicker from '../packages/date-picker/index'

import 'element-ui/lib/theme-chalk/index.css'

const components = [
  Upload,
  Tooltip
]

components.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
