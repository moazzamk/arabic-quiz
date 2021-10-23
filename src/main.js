import Vue from "vue";
import VueRouter from "vue-router";
import Login from './components/Login'
import App from "./App";
import Quiz from "./components/Quiz";
import Chart from './components/Chart';
import VueMaterial from 'vue-material'


const routes = [
  { path: '/', component: Login },
  { path: '/quizzes/:quizId', component: Login, props: true },
  { path: '/quizzes/:quizId/:name', component: Quiz , props: true },
  { path: '/charts', component: Chart }
];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);
Vue.use(VueMaterial);

 new Vue({
   router: router,
   render: h => h(App),
 }).$mount('#app')