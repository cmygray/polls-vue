import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/polls',
      name: 'poll.index',
      component: () =>
        import(/* webpackchunkname: "polls" */ './views/Polls.vue'),
    },
    {
      path: '/polls/:id/edit',
      name: 'poll.edit',
      component: () =>
        import(/* webpackchunkname: "polls.edit" */ './views/PollEdit.vue'),
      props: true,
    },
  ],
});
