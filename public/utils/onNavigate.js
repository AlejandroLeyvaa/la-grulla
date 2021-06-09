import { routes } from '../router/routes.js';
const root = document.getElementById('root');

export const onNavigate = (data) => {
  const path = window.location.hash.slice(1).toLocaleLowerCase() || '/';
  const template = routes[path](data);
  root.innerHTML = template;
};
