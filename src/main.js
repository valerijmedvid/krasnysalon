import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueGtag from "vue-gtag"
import VueSilentbox from "vue-silentbox"

Vue.config.productionTip = false

Vue.use(VueSilentbox)

Vue.use(VueGtag, {
  config: { id: "G-HMQ5R408FB" },
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
