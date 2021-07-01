import UrlParser from '../routes/url-parser';

const navList = document.querySelector('.nav-list');
const appBarBrand = document.querySelector('.app-bar-brand');
const buttonCloseNav = document.querySelector('.btn-close-nav');
const sideBarOverlay = document.querySelector('.sidebar-overlay');

const DrawerInitiator = {

    init({
        appBar,
        button,
        drawer,
        content
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer({
                drawer,
                event,
                button,
                content
            });
        });

        document.querySelectorAll('.close-drawer').forEach((elm) => {
            elm.addEventListener('click', (event) => {
                this._closeDrawer({
                    drawer,
                    button,
                    content,
                    event
                });
            });
        });

        window.addEventListener('scroll', () => {
            this._eventScrollNavbar(button, appBar);
        });
    },

    _toggleDrawer({
        drawer,
        button,
        content,
        event
    }) {
        event.stopPropagation();
        drawer.classList.toggle('open');
        button.classList.add('hidden');
        content.classList.toggle('fixed');
        navList.classList.toggle('show');
        appBarBrand.classList.add('hidden');
        buttonCloseNav.classList.remove('hidden');
        sideBarOverlay.classList.remove('hidden');
    },

    _closeDrawer({
        drawer,
        button,
        content,
        event
    }) {
        event.stopPropagation();
        drawer.classList.remove('open');
        button.classList.remove('hidden');
        content.classList.remove('fixed');
        navList.classList.remove('show');
        appBarBrand.classList.remove('hidden');
        buttonCloseNav.classList.add('hidden');
        sideBarOverlay.classList.add('hidden');
    },

    _eventScrollNavbar(button, appBar) {
        let url = UrlParser.parseActiveUrlWithCombiner();
        if (url === '/') url = '/home';
        if (url === '/home') {
            if (window.pageYOffset > 0) {
                button.classList.add('btn-dark');
                appBar.classList.add('light');
            } else {
                button.classList.remove('btn-dark');
                appBar.classList.remove('light');
            }
        } else {
            button.classList.add('btn-dark');
            appBar.classList.add('light');
        }
    },
};

export default DrawerInitiator;