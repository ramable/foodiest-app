import FavoriteRestoIdb from '../../data/database-idb';
import {
    createRestoListsTemplate
} from '../templates/template-creator';
import favoriteNotFound from '../../../public/images/undraw_empty_xct9.svg';

const Favorite = {
    async render() {
        return `
        <section class="body-favorite" id="content__favorite">
            <div class="container" id="fav__container"></div>
        </section>
        `;
    },

    async afterRender() {
        const dataResto = await FavoriteRestoIdb.getAllResto();
        const favoriteContainer = document.querySelector('#fav__container');
        const skipButton = document.querySelector('#skip__button');

        if (dataResto.length === 0) {
            favoriteContainer.innerHTML = showEmptyStateFavorite();
        } else {
            favoriteContainer.innerHTML = showCardFavorite();
            dataResto.forEach((m) => {
                document.querySelector('#resto__card').innerHTML += createRestoListsTemplate(m);
            });
        }

        function showEmptyStateFavorite() {
            return `
                <div class="empty-state-wrapper" id="favorite__notFound">
                    <img src="${favoriteNotFound}" alt="">
                    <h1 tabindex="0">Hmm... kosong &#128564</h1>
                    <p tabindex="0">Kamu belum punya restaurant favorit. <br> Yuk, isi dengan restaurant terbaik lainnya <a href="#/home" aria-label="tautan menuju homepage">di sini</a></p>
                </div>
            `;
        };

        function showCardFavorite() {
            return `
                <h3 id="heading__page" tabindex="0"><b>Restoran Favoritmu &#128077</b></h3>
                <div id="resto__card" class="row-resto"></div>
            `;
        };

        skipButton.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#heading__page').focus();
        });
    },
};

export default Favorite;