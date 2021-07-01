class EmptyState extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="empty-state-wrapper container hidden" id="empty__state">
            <img src="../images/undraw_page_not_found_su7k.svg" alt="">
            <h1>Ooops... &#128580</h1>
            <h4>Konten tidak ditemukan</h4>
            <p>Coba periksa lagi koneksimu, atau klik <a href="">muat ulang</a></p>
        </div>
        <div class="empty-state-wrapper container hidden" id="not__found">
            <img src="../images/undraw_Location_search_re_ttoj.svg" alt="">
            <h1>Whoops... &#128558</h1>
            <h4>Restoran yang kamu cari tidak ada</h4>
            <p id="caption__notFound"></p>
        </div>
        `;
    }
}

customElements.define('empty-state', EmptyState);