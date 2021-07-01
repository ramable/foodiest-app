class HeroBanner extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .background-hero {
                background-image: url(/images/heros/hero-image_4.jpg);
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                position: relative;
                width: 100%;
                height: 100vh;
            }
            
            .hero-text-wrapper {
                position: relative;
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                height: 100vh;
            }
            
            .hero-text {
                position: relative;
                width: 100%;
                color: white;
                padding: 5rem;
                background-color: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 1rem;
            }
            
            .hero-text h1 {
                font-weight: 800;
            }
            
            .search-bar input {
                padding: 1.5rem;
                margin: 2rem 0 1rem;
                font-size: var(--font-size);
                font-weight: 300;
                border-radius: .3rem;
                border: none;
                width: 100%;
            }
            
            ::placeholder {
                color: #a1a1a1;
            }
            
            .search-bar button {
                padding: 1.5rem;
                width: 100%;
                font-size: var(--font-size);
                font-weight: 700;
                border: none;
                border-radius: .3rem;
                background-color: #ef6c00;
                color: white;
                cursor: pointer;
            }
            
            .search-bar button:hover {
                background-color: #fa9a4b;
            }
            
            .search-bar button:active {
                background-color: #fa9a4b;
                border-style: solid;
                border-width: 4px;
                border-color: #f7ca4291;
            }

            @media screen and (max-width: 320px) {
                .hero-text {
                    padding: 1.5rem !important;
                }
            
                .hero-text h1 {
                    font-size: var(--h2);
                }
            
                .search-bar input {
                    text-overflow: ellipsis;
                }
            }

            @media screen and (max-width: 600px) {
                .hero-text-wrapper {
                    grid-template-columns: 1fr !important;
                }
            
                .hero-text h5 {
                    font-size: var(--font-size);
                }
            
                .hero-text {
                    padding: 2rem;
                }
            
                .search-bar input {
                    margin-top: 1rem;
                    padding: 1.25rem;
                    font-size: var(--min-font-size);
                }
            
                .search-bar button {
                    padding: 1.25rem;
                    font-size: var(--min-font-size);
                }
            }
            
            @media screen and (max-width: 1024px) {
                .background-hero {
                    height: 50vh;
                }

                .hero-text-wrapper {
                    grid-template-columns: 2fr 1fr;
                    height: 55vh;
                }
            }
            
            @media only screen and (min-width: 1533px) {
                .hero-text-wrapper {
                    gap: 35rem;
                }
            }
        </style>

        <div class="background-hero">
                <div class="container hero-text-wrapper">
                    <div class="hero-text">
                        <h1 tabindex="0">Udah makan belum?</h1>
                        <h5 tabindex="0">Yuk, cari restoran favorit kamu di sini!</h5>
                        <div class="search-bar">
                            <input id="input__keyword" type="text" placeholder="Cari berdasarkan nama, kategori, dan menu ...">
                            <button id="search__button" tabindex="-1" type="button">Cari</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
}

customElements.define('hero-banner', HeroBanner);