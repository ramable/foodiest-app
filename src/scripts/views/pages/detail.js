import {
    createDetailRestoTemplate,
    createimageDetailTemplate,
    createReviewsTemplate,

} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestoDataSource from '../../data/data-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <div class="container" id="like__wrapper"></div>
        <div class="detail-image" id="detail__image"></div>
        <section class="body-detail container" id="detail">
            <div id="detail__content"></div>
            <ul class="menu-text-list" tabindex="0">
                <li><b>Makanan:</b><br>
                    <span id="food__menus"></span>
                </li>
                <li><b>Minuman:</b><br>
                    <span id="drink__menus"></span>
                </li>
            </ul>
            <div class="reviews-wrapper">
                <h6 tabindex="0"><b>Ulasan (<span id="reviews__amount"></span>)</b></h6>
                <div id="customer__reviews"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const dataResto = await RestoDataSource.detailResto(url.id);
        const dataReviews = dataResto.customerReviews.reverse();
        const dataFood = dataResto.menus.foods;
        const dataDrink = dataResto.menus.drinks;
        const dataCategories = dataResto.categories;

        const imageResto = document.querySelector('#detail__image');
        const restoContainer = document.querySelector('#detail__content');
        const reviewContainer = document.querySelector('#customer__reviews');
        const reviewAmount = document.querySelector('#reviews__amount');
        const foodWrapper = document.querySelector('#food__menus');
        const drinkWrapper = document.querySelector('#drink__menus');

        try {
            restoContainer.innerHTML = createDetailRestoTemplate(dataResto);
            imageResto.innerHTML = createimageDetailTemplate(dataResto);
            reviewAmount.innerHTML = dataReviews.length;

            dataReviews.forEach((m) => {
                reviewContainer.innerHTML += createReviewsTemplate(m);
            });
            dataFood.forEach((m) => {
                foodWrapper.innerHTML += `${m.name}, `;
            });
            dataDrink.forEach((m) => {
                drinkWrapper.innerHTML += `${m.name}, `;
            });

            const categoryWrapper = document.querySelector('#category__link');
            dataCategories.forEach((m) => {
                categoryWrapper.innerHTML += `<span tabindex="0" class="category-tag">${m.name}</span>`;
            });

            const buttonSeeMore = document.querySelector('#btn__seeMore');
            buttonSeeMore.addEventListener('click', () => {
                const dots = document.querySelector('#dots');
                const moreText = document.querySelector('#more__text');

                if (dots.style.display === 'none') {
                    dots.style.display = 'inline';
                    moreText.classList.add('hidden');
                    buttonSeeMore.innerHTML = 'Lihat Selengkapnya';
                } else {
                    dots.style.display = 'none';
                    moreText.classList.remove('hidden');
                    buttonSeeMore.innerHTML = 'Lihat Sedikit aja';
                }
            });

            LikeButtonInitiator.init({
                likeButtonContainer: document.querySelector('#like__wrapper'),
                resto: {
                    id: dataResto.id,
                    name: dataResto.name,
                    city: dataResto.city,
                    rating: dataResto.rating,
                    pictureId: dataResto.pictureId,
                    description: dataResto.description,
                }
            });
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    },
};

export default Detail;