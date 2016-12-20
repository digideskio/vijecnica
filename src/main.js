// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { VueRouter, router } from './router'
import App from './App'
import './styles.js'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
})
