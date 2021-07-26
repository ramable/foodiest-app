class HeroBanner extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
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