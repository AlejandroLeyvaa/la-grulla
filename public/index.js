import { onNavigate } from './utils/onNavigate.js';

function init() {
  onNavigate();
}


window.addEventListener('load', async () => {
  init();
});

window.addEventListener('hashchange', async () => {
  init();
});

console.log('Hello world')