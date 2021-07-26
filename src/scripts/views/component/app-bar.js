class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="app-bar" id="app__bar">
            <nav class="container wrapper-header">
                <div class="app-bar-brand">
                    <a href="" aria-label="logo foodiestapp">FoodiestApp</a>
                </div>
                <div class="app-bar-menu">
                    <button id="burger__button" aria-label="tombol menu"><i class="fas fa-bars"></i></button>
                </div>
                <div id="navigation__drawer" class="app-bar-navigation">
                    <ul class="nav-list">
                        <li><a class="close-drawer nav-link" href="#/home">Home</a></li>
                        <li><a class="close-drawer nav-link" href="#/favorite">Favorite</a></li>
                        <li><a class="close-drawer nav-link" target="_blank" rel="noopener" href="https://www.dicoding.com/users/ramable">About Us</a></li>
                    </ul>
                </div>
                <div class="sidebar-overlay hidden">
                    <button class="close-drawer" aria-label="tombol tutup menu"><i class="fas fa-times fa-lg"></i></button>
                </div>
            </nav>
        </header>
        `;
    }
}

customElements.define('app-bar', AppBar);