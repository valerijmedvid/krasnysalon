import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// import VueGtag from "vue-gtag"
import VueSilentbox from "vue-silentbox"
import "vue-silentbox/dist/style.css"

// Vue.use(VueGtag, {
//   config: { id: "G-HMQ5R408FB" },
// })

const myApp = createApp(App)

myApp.use(router)
myApp.use(VueSilentbox)

myApp.mount("#app")
