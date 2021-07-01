import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({
        appBar,
        button,
        drawer,
        content,
    }) {
        this._appBar = appBar;
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            appBar: this._appBar,
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        const preLoader = document.querySelector('#preloader');

        preLoader.classList.remove('hidden');
        this._appBarRender();
        this._content.innerHTML = await page.render();
        await page.afterRender();
        preLoader.classList.add('hidden');
    }

    _appBarRender() {
        let url = window.location.hash.slice(1);
        if (url === '/') url = '/home';
        if (url === '/favorite') {
            this._appBar.classList.add('light');
            this._button.classList.add('btn-dark');
        } else {
            this._appBar.classList.remove('light');
            this._button.classList.remove('btn-dark');
        }
    }
}

export default App;