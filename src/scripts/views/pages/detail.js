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
                <div class="review-head-wrapper">
                    <h6 tabindex="0"><b>Ulasan (<span id="reviews__amount"></span>)</b></h6>
                    <button class="btn btn-primary" id="btn__addReview"><i class="fas fa-edit"></i> Tambah Ulasan</button>
                </div>
                <div id="customer__reviews"></div>
                <div id="hidden__reviews" class="hidden"></div>
            </div>
            <button class="btn-seeMore btn-more-review" id="btn__moreReview">Tampilkan Semua<i class="fas fa-caret-down" style="margin-left: .7rem;"></i></button>
            <div class="hidden-overlay" id="hidden__overlay"></div>
            <div id="modal__review" class="modal hidden close-input">
                <div class="modal-content">
                    <div class="container">
                        <div class="modal-header">
                            <h3><i class="fas fa-comment-dots fa-lg"></i><b>Berikan Ulasanmu</b></h3>
                        </div>
                        <div class="modal-body">
                            <input class="input-username" id="input__name" type="text" placeholder="Username">
                            <textarea id="input__review" placeholder="Please give me your Feedback :)"></textarea>
                        </div>
                        <div class="modal-footer">
                        <button class="btn btn-secondary close-input" id="btn__cancel">Cancel</button>
                        <button class="btn btn-primary" id="btn__submit">Submit</button>
                        </div>
                    </div>
                </div>
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
        const reviewsContainer = document.querySelector('#customer__reviews');
        const reviewAmount = document.querySelector('#reviews__amount');
        const foodWrapper = document.querySelector('#food__menus');
        const drinkWrapper = document.querySelector('#drink__menus');
        const hiddenContainer = document.querySelector('#hidden__reviews');
        const hiddenOverlay = document.querySelector('#hidden__overlay');
        const btnMoreReview = document.querySelector('#btn__moreReview');
        const btnAddReview = document.querySelector('#btn__addReview');
        const modalReview = document.querySelector('#modal__review');

        try {
            restoContainer.innerHTML = createDetailRestoTemplate(dataResto);
            imageResto.innerHTML = createimageDetailTemplate(dataResto);
            reviewAmount.innerHTML = dataReviews.length;

            const lastReviews = dataReviews.slice(0, 2);
            const hiddenReviews = dataReviews.slice(2, dataReviews.length);

            lastReviews.forEach((m) => {
                reviewsContainer.innerHTML += createReviewsTemplate(m);
            });
            hiddenReviews.forEach((m) => {
                hiddenContainer.innerHTML += createReviewsTemplate(m);
            });

            btnMoreReview.addEventListener('click', () => {
                switch (hiddenContainer.getAttribute('class')) {
                    case 'hidden':
                        hiddenContainer.classList.remove('hidden');
                        hiddenOverlay.classList.add('hidden');
                        btnMoreReview.innerHTML = 'Tampilkan Sedikit<i class="fas fa-caret-up" style="margin-left: .7rem;">';
                        btnMoreReview.style.bottom = '0';
                        break;
                    case '':
                        hiddenContainer.classList.add('hidden');
                        hiddenOverlay.classList.remove('hidden');
                        btnMoreReview.innerHTML = 'Tampilkan Semua<i class="fas fa-caret-down" style="margin-left: .7rem;">';
                        btnMoreReview.style.bottom = '8rem';
                        break;
                    default:
                        hiddenContainer.classList.add('hidden');
                        hiddenOverlay.classList.remove('hidden');
                        btnMoreReview.innerHTML = 'Tampilkan Semua<i class="fas fa-caret-down" style="margin-left: .7rem;">';
                        btnMoreReview.style.bottom = '8rem';
                }
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
                    moreText.classList.toggle('hidden');
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

            btnAddReview.addEventListener('click', () => {
                modalReview.classList.remove('hidden');
            });

            document.querySelectorAll('.close-input').forEach((elm) => {
                elm.addEventListener('click', (e) => {
                    if (e.target === document.querySelector('#modal__review')) {
                        modalReview.classList.add('hidden');
                    } else if (e.target === document.querySelector('#btn__cancel')) {
                        modalReview.classList.add('hidden');
                    }
                });
            });
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    },
};

export default Detail;