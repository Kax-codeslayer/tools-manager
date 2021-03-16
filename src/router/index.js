import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import loginPage from "../views/login-form.vue";
import tickets from "../views/ticketsolve.vue";
import dashBoard from "../views/dashboard.vue";
import comContacts from "../views/comContacts.vue";
import individualContacts from "../views/individualContacts.vue";
import ticket from "../views/ticket.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "loginPage",
    component:loginPage
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashBoard,
    children:[
      {path: "",component: Home},
      {path: "ticketsolve",component:tickets},
      {path: "comContacts",component:comContacts},
      {path: "individualContacts",component:individualContacts},
      {path: "ticket",component:ticket},
    ]
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
