
import HomePage from '../pages/home.svelte';
import MembersPage from '../pages/members.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/members',
    component: MembersPage,
  }
];

export default routes;
