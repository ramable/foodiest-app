import FavoriteRestoIdb from '../../data/database-idb';
import {
    createRestoListsTemplate
} from '../templates/template-creator';
import emptyImage from '../../../public/images/undraw_empty_xct9.svg';

const Favorite = {
    async render() {
        return `
        <section class="body-favorite" id="content__favorite">
            <div class="empty-state-wrapper container" id="empty__state">
                <img src="${emptyImage}" alt="">
                <h1 tabindex="0">Hmm... kosong &#128564</h1>
                <p tabindex="0">Kamu belum punya restaurant favorit. <br> Yuk, isi dengan restaurant terbaik lainnya <a href="#/home" aria-label="tautan menuju homepage">di sini</a></p>
            </div>
            <div class="container">
                <h3 id="heading__page" class="hidden" tabindex="0"><b>Restoran Favoritmu &#128077</b></h3>
                <div id="resto__card" class="row-resto"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const dataResto = await FavoriteRestoIdb.getAllResto();
        const emptyState = document.querySelector('#empty__state');
        const headingPage = document.querySelector('#heading__page');
        const restoContainer = document.querySelector('#resto__card');
        const skipButton = document.querySelector('#skip__button');

        if (dataResto.length > 0) {
            dataResto.forEach((m) => {
                restoContainer.innerHTML += createRestoListsTemplate(m);
            });
            emptyState.classList.add('hidden');
            headingPage.classList.remove('hidden');
        } else {
            emptyState.classList.remove('hidden');
            headingPage.classList.add('hidden');
        }

        skipButton.addEventListener('click', (event) => {
            event.preventDefault();
            headingPage.focus();
            // document.querySelectorAll('.skip-on-tab').forEach((e) => {
            //     e.tabIndex = '1';
            // });
        });
    },
};

export default Favorite;