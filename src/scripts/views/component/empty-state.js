import pageNotFoundLarge from '../../../public/assets/desktop/undraw_page_not_found_su7k.png';
import pageNotFoundMedium from '../../../public/assets/mobile/undraw_page_not_found_su7k-medium.jpg';
import pageNotFoundSmall from '../../../public/assets/mobile/undraw_page_not_found_su7k-small.jpg';
import searchNotFoundLarge from '../../../public/assets/desktop/undraw_Location_search_re_ttoj.png';
import searchNotFoundMedium from '../../../public/assets/mobile/undraw_Location_search_re_ttoj-medium.jpg';
import searchNotFoundSmall from '../../../public/assets/mobile/undraw_Location_search_re_ttoj-small.jpg';

class EmptyState extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="empty-state-wrapper hidden" id="empty__state">
            <picture>
                <source media="(max-width: 600px)" srcset="${pageNotFoundSmall}">
                <source media="(max-width: 1024px)" srcset="${pageNotFoundMedium}">
                <img src='${pageNotFoundLarge}' alt="page not found"></img>
            </picture>
            <h1>Ooops... &#128580</h1>
            <h4>Gagal memuat request</h4>
            <p>Coba periksa lagi koneksimu, atau klik <a href="#">muat ulang</a></p>
        </div>
        <div class="empty-state-wrapper hidden" id="search__not__found">
            <picture>
                <source media="(max-width: 600px)" srcset="${searchNotFoundSmall}">
                <source media="(max-width: 1024px)" srcset="${searchNotFoundMedium}">
                <img src='${searchNotFoundLarge}' alt="search not found"></img>
            </picture>
            <h1>Whoops... &#128558</h1>
            <h4>Restoran yang kamu cari tidak ada</h4>
            <p id="caption__notFound"></p>
        </div>
        `;
    }
}

customElements.define('empty-state', EmptyState);