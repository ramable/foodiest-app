import 'regenerator-runtime';
import './views/component/preloader';
import './views/component/app-bar';
import './views/component/footer';
import '../styles/main.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    appBar: document.querySelector('#app__bar'),
    button: document.querySelector('#burger__button'),
    drawer: document.querySelector('#navigation__drawer'),
    content: document.querySelector('#main__element'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
    app.renderPage();
    swRegister();
});