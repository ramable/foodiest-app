import FavoriteRestoIdb from '../../data/database-idb';
import {
    createRestoListsTemplate
} from '../templates/template-creator';
import favoriteNotFoundLarge from '../../../public/assets/desktop/undraw_empty_xct9.png';
import favoriteNotFoundMedium from '../../../public/assets/mobile/undraw_empty_xct9-medium.jpg';
import favoriteNotFoundSmall from '../../../public/assets/mobile/undraw_empty_xct9-small.jpg';

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
                    <picture>
                        <source media="(max-width: 600px)" srcset="${favoriteNotFoundSmall}">
                        <source media="(max-width: 1024px)" srcset="${favoriteNotFoundMedium}">
                        <img src='${favoriteNotFoundLarge}' alt="favorite not found"></img>
                    </picture>
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