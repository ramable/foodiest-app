class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .app-bar {
                padding: 2rem;
                position: sticky;
                top: 0;
                z-index: 10;
                color: white;
                background-color: unset;
            }
            
            .app-bar.light {
                background-color: white;
                color: #393d43;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                -moz-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
            }
            
            .wrapper-header {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 1rem;
                align-items: center;
            }
            
            .app-bar-menu {
                display: none;
            }
            
            .app-bar-menu button {
                background-color: transparent;
                border: none;
                padding: 2rem 2rem 2rem 0;
                cursor: pointer;
                font-size: 2.4rem;
            }
            
            .app-bar-brand a {
                color: #ef6c00;
                font-weight: 800;
                font-size: var(--h4);
                padding: 2rem 2rem 2rem 0;
            }
            
            .app-bar-brand a:hover {
                color: #fa9a4b;
            }
            
            .app-bar-brand a:active {
                opacity: 0.4;
            }
            
            .app-bar-navigation {
                position: static;
            }
            
            .app-bar-navigation ul li {
                display: inline-block;
            }
            
            .app-bar-navigation a {
                font-weight: 700;
                padding: 2.5rem 0 2.5rem 5rem;
            }
            
            .app-bar-navigation a:hover {
                color: #ef6c00;
            }
            
            .app-bar-navigation a:active {
                opacity: 0.4;
            }
            
            .btn-dark {
                color: #393d43 !important;
            }
            
            .sidebar-overlay {
                position: absolute;
                right: 0;
                width: 100vw;
                height: 100vh;
                background-color: black;
                opacity: 70%;
                z-index: -1;
            }

            @media screen and (max-width: 600px) {
                .app-bar-navigation {
                    width: 65vw !important;
                }
            }

            @media screen and (max-width: 768px) {
                .app-bar {
                    padding: 0;
                }
            
                .wrapper-header {
                    grid-template-columns: auto 1fr;
                    gap: 1rem;
                }
            
                .app-bar-menu {
                    display: block;
                    justify-self: right;
                }
            
                .app-bar-menu button {
                    padding: 1.5rem 0 1.5rem 2.5rem;
                    color: white;
                }

                .app-bar-brand a {
                    padding: 1.5rem 1.5rem 1.5rem 0;
                }
            
                .app-bar-navigation {
                    display: block;
                    position: absolute;
                    left: -100vw;
                    height: 100vh;
                    width: 45vw;
                    background-color: white;
                    box-shadow: 3px 0 8px rgba(0, 0, 0, 0.18);
                    -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.18);
                    -moz-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.18);
                    overflow: hidden;
                    transition: all 0.3s;
                    grid-column-start: 3;
                    grid-column-end: 4;
                }
            
                .app-bar-navigation.open {
                    left: -2rem;
                }
            
                .nav-list {
                    display: none;
                    margin-top: 2rem;
                }
            
                .nav-list li {
                    padding: 2rem 2rem 2rem 3rem;
                }
            
                .nav-list li a {
                    padding: 3rem;
                }
            
                .nav-list.show {
                    display: block !important;
                    color: #1a1a1a;
                }
            
                .btn-close-nav {
                    padding: 3rem;
                    margin-left: 4rem;
                    color: transparent;
                    background-color: transparent;
                    border: none;
                    position: relative;
                    left: -35rem;
                }
            
                .btn-close-nav:focus {
                    left: 0;
                }
            }
        </style>

        <header class="app-bar" id="app__bar">
            <nav class="container wrapper-header">
                <div class="app-bar-brand">
                    <a href="" aria-label="logo foodiestapp" class="skip-on-tab">FoodiestApp</a>
                </div>
                <div class="app-bar-menu">
                    <button id="burger__button" class="skip-on-tab" aria-label="tombol menu">☰</button>
                </div>
                <div id="navigation__drawer" class="app-bar-navigation">
                    <ul class="nav-list">
                        <li><a class="close-drawer nav-link" href="#/home">Home</a></li>
                        <li><a class="close-drawer nav-link" href="#/favorite">Favorite</a></li>
                        <li><a class="close-drawer nav-link" target="_blank" href="https://github.com/ramable">About Us</a></li>
                    </ul>
                    <button class="btn-close-nav close-drawer hidden">tombol tutup menu</button>
                </div>
                <div class="sidebar-overlay hidden close-drawer"></div>
            </nav>
        </header>
        `;
    }
}

customElements.define('app-bar', AppBar);