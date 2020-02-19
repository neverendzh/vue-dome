import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    mate: {
      name: "登陆"
    }
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    mate: {
      name: "登陆页"
    },
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/console",
    name: "console",
    redirect: "index",
    mate: {
      name: "操作台",
      icon:"el-icon-more"
    },
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        mate: {
          name: "个人信息"
        },
        component: () => import("../views/console/index.vue")
      },{
        path: "/account",
        name: "account",
        mate: {
          name: "用户管理"
        },
        component: () => import("../views/account/accountcrm.vue")
      }
    ]
  },
    {
    path: "/console",
    name: "console",
    redirect: "index",
    mate: {
      name: "操作台",
      icon:"el-icon-more"
    },
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        mate: {
          name: "个人信息"
        },
        component: () => import("../views/console/index.vue")
      },{
        path: "/account",
        name: "account",
        mate: {
          name: "用户管理"
        },
        component: () => import("../views/account/accountcrm.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
