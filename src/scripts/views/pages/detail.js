import {
    createDetailRestoTemplate,
    createimageDetailTemplate,
} from '../templates/template-creator';
import '../component/modal-review';
import UrlParser from '../../routes/url-parser';
import RestoDataSource from '../../data/data-source';
import PostReview from '../../utils/post-review';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/database-idb';
import avatarImage from '../../../public/images/assets/avatar-image.png';

const Detail = {
    async render() {
        return `
        <div class="container" id="like__wrapper"></div>
        <div class="detail-image" id="detail__image"></div>
        <empty-state></empty-state>
        <section class="body-detail container" id="detail">
            <div id="detail__content" class="detail-content"></div>
            <ul class="menu-text-list" tabindex="0">
                <li><b>Makanan:</b><br>
                    <span id="food__menus"></span>
                </li>
                <li><b>Minuman:</b><br>
                    <span id="drink__menus"></span>
                </li>
            </ul>
            <div class="toast-wrapper">
                <div id="success__toast" class="toast-success">
                    <span>Yeay! Ulasan berhasil di submit</span>
                </div>
            </div>
            <div class="reviews-wrapper">
                <div class="review-head-wrapper">
                    <h2 tabindex="0"><b>Ulasan (<span id="reviews__amount"></span>)</b></h2>
                    <button tabindex="0" class="btn btn-primary" id="btn__addReview"><i class="fas fa-edit"></i> Tambah Ulasan</button>
                </div>
                <div id="customer__reviews"></div>
                <div id="hidden__reviews" class="hidden"></div>
            </div>
            <button class="btn-seeMore btn-more-review skip-review" id="btn__moreReview">Tampilkan Semua<i class="fas fa-caret-down" style="margin-left: .7rem;"></i></button>
            <div class="hidden-overlay" id="hidden__overlay"></div>
            <modal-review></modal-review>
        </section>
        `;
    },

    async afterRender() {
        try {
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
            const modalReview = document.querySelector('#modal__review');
            const btnSubmitReview = document.querySelector('#btn__submit');
            const inputUsername = document.querySelector('#input__name');
            const inputReview = document.querySelector('#input__review');
            const connectionAlert = document.querySelector('#connection__alert');
            const successToast = document.querySelector('#success__toast');

            restoContainer.innerHTML = createDetailRestoTemplate(dataResto);
            imageResto.innerHTML = createimageDetailTemplate(dataResto);

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

            LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#like__wrapper'),
                favoriteRestaurants: FavoriteRestoIdb,
                resto: {
                    id: dataResto.id,
                    name: dataResto.name,
                    city: dataResto.city,
                    rating: dataResto.rating,
                    pictureId: dataResto.pictureId,
                    description: dataResto.description,
                }
            });

            reviewAmount.innerHTML = dataReviews.length;
            const lastReviews = dataReviews.slice(0, 2);
            const hiddenReviews = dataReviews.slice(2, dataReviews.length);

            lastReviews.forEach((m) => {
                reviewsContainer.innerHTML += showReviewsTemplate(m);
            });
            hiddenReviews.forEach((m) => {
                hiddenContainer.innerHTML += showReviewsTemplate(m);
            });

            function showReviewsTemplate(m) {
                return `
                    <div class="review-card skip-review" tabindex="0">
                        <div class="review-header-card">
                            <img src="${avatarImage}" alt="avatar reviewer">
                            <div class="reviewer-wrapper">
                                <span><b>${m.name}</b></span>
                                <span class="review-date">${m.date}</span>
                            </div>
                        </div>
                        <p>${m.review}</p>
                    </div>
                `;
            }

            document.querySelector('#btn__addReview').addEventListener('click', () => {
                modalReview.classList.remove('hidden');
                if (window.navigator.onLine === false) {
                    connectionAlert.classList.remove('hidden');
                    btnSubmitReview.classList.add('disable');
                } else {
                    connectionAlert.classList.add('hidden');
                    btnSubmitReview.classList.remove('disable');
                }
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

            btnSubmitReview.addEventListener('click', () => {
                if (inputUsername.value !== '' && inputReview.value !== '') {
                    PostReview(url, inputUsername.value, inputReview.value);
                    modalReview.classList.add('hidden');
                    successToast.classList.toggle('show');
                }
            });
        } catch (err) {
            document.querySelector('#empty__state').classList.remove('hidden');
            document.querySelector('#detail').classList.add('hidden');
        }
    },
};

export default Detail;