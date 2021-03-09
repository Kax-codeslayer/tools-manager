import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import loginPage from "../views/login-form.vue";
import tickets from "../views/ticketsolve.vue";
import reports from "../views/report.vue";
import helpDeskInDepth from "../views/HelpDeskInDepth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "loginPage",
    component:loginPage
  },
   {
    path: "/report",
    name: "report",
    component:reports
  },

  {
    path: "/ticketsolve",
    name: "ticketsolve",
    component:tickets
  },

  {
    path: "/HelpDeskInDepth",
    name: "HelpDeskInDepth",
    component:helpDeskInDepth
  },
  {
    path: "/comContacts",
    name: "comContacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/comContacts.vue")
  },

  {
    path: "/individualContacts",
    name: "individualContacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/individualContacts.vue")
  },
  {
    path: "/ticket",
    name: "ticket",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ticket.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
