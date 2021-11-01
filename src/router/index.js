import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    metadata: { title: "Úvod" },
  },
  {
    path: "/uvod",
    name: "home",
    component: Home,
    metadata: { title: "Úvod", hide: true },
  },
  {
    path: "/sluzby",
    name: "services",
    component: () => import("../views/Services.vue"),
    redirect: { name: "lashes" },
    metadata: { title: "Služby" },
    children: [
      {
        path: "/objemove-prodluzovani-ras",
        name: "lashes",
        component: () => import("../views/Lashes.vue"),
        metadata: { title: "Objemové prodlužování řas" },
      },
      {
        path: "/parafinovy-zabal",
        name: "wax",
        component: () => import("../views/Wax.vue"),
        metadata: { title: "Parafínový zábal na ruce" },
      },
      {
        path: "/kosmetika",
        name: "cosmetic",
        component: () => import("../views/Cosmetic.vue"),
        metadata: { title: "Kosmetika SynCare" },
      },
      {
        path: "/epilace-lycon",
        name: "epilace-lycon",
        component: () => import("../views/Lycon.vue"),
        metadata: { title: "Epilace Lycon" },
      },
    ],
  },
  {
    path: "/partylite",
    name: "partylite",
    component: () => import("../views/PartyLite.vue"),
    metadata: { title: "PartyLite" },
  },
  {
    path: "/cenik",
    name: "pricing",
    component: () => import("../views/Pricing.vue"),
    metadata: { title: "Ceník" },
  },
  {
    path: "/kontakt",
    name: "contact",
    component: () => import("../views/Contact.vue"),
    metadata: { title: "Kontakt" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/PageNotFound.vue"),
    metadata: { hide: true },
  },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
