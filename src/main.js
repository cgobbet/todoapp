import Vue from 'vue'
import App from './App.vue'
import { MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

Vue.use(MdField);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
