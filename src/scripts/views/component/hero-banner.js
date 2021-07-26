import heroImageLarge from '../../../public/assets/desktop/hero-image_4.jpg';
import heroImageMedium from '../../../public/assets/mobile/hero-image_4-medium.jpg';
import heroImageSmall from '../../../public/assets/mobile/hero-image_4-small.jpg';

class HeroBanner extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .background-hero {
                background-image: url(${heroImageLarge});
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

            .hero-text h2 {
                font-size: var(--h5);
            }
            
            .search-bar input {
                padding: 1.5rem;
                margin: 2rem 0 1rem;
                font-size: var(--font-size);
                font-weight: 300;
                border-radius: .35rem;
                border: none;
                width: 100%;
            }
            
            ::placeholder {
                color: #a1a1a1;
            }
            
            .search-bar button {
                width: 100%;
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
                .background-hero {
                    background-image: url(${heroImageSmall}) !important;
                }

                .hero-text-wrapper {
                    grid-template-columns: 1fr !important;
                }
            
                .hero-text h2 {
                    font-size: var(--font-size);
                }
            
                .hero-text {
                    padding: 2rem;
                }
            
                .search-bar input {
                    margin-top: 1rem;
                    padding: 1.75rem;
                    font-size: var(--min-font-size);
                }
            }
            
            @media screen and (max-width: 1024px) {
                .background-hero {
                    background-image: url(${heroImageMedium});
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
                        <h2 tabindex="0">Yuk, cari restoran favorit kamu di sini!</h2>
                        <div class="search-bar">
                            <input id="input__keyword" type="text" placeholder="Cari berdasarkan nama, kategori, dan menu ...">
                            <button id="search__button" class="btn btn-primary" type="button">Cari</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
}

customElements.define('hero-banner', HeroBanner);