import CONFIG from '../../globals/config';

const createRestoListsTemplate = (m) => `
    <a tabindex="0" class="col-resto" href="/#/detail/${m.id}" aria-label="tautan menuju laman detail restoran ${m.name} dengan rating ${m.rating} dari kota ${m.city}">
            <div tabindex="0" class="rating-wrapper"><span class="icon-rating" aria-label="peringkat"><i class="fas fa-star fa-xs"></i></span>${m.rating}</div>
        <div class="card-image">
            <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL_SMALL + m.pictureId}" alt="restoran ${m.name} dari kota ${m.city}">
        </div>
        <div class="card-text">
            <h5 tabindex="0" class="resto-name"><b>${m.name}</b></h5>
            <span tabindex="0" class="sub-text"><i class="fas fa-map-marker-alt fa-lg" style="color: #ef6c00; margin-right: .5rem;"></i>Kota ${m.city}</span>
        </div>
    </a>
`;

const createDetailRestoTemplate = (m) => `
    <div class="sub-text" tabindex="0">
        <span class="icon-rating" aria-label="peringkat"><i class="fas fa-star fa-xs"></i></span>${m.rating} &nbsp &middot &nbsp Kota ${m.city}
    </div>
    <h2 tabindex="0"><b>${m.name}</b></h2>
    <div class="detail-text-list">
        <div tabindex="0">
            <span class="title-list">Alamat: &nbsp</span>
            <span>${m.address}, ${m.city}</span>
        </div>
        <div>
            <span class="title-list" tabindex="0">Kategori: &nbsp</span>
            <span id="category__link"></span>
        </div>
    </div>
    <p class="detail-description" tabindex="0">
        <span>${(m.description).substr(0, 150)}</span><span id="dots">...</span><span id="more__text" class="hidden">${(m.description).substr(150, (m.description).length)}</span>
    </p>
    <button class="btn-seeMore" id="btn__seeMore">Lihat Selengkapnya</button>
`;

const createimageDetailTemplate = (m) => `
    <img src="${CONFIG.BASE_IMAGE_URL_LARGE + m.pictureId}" alt="restoran ${m.name} dari kota ${m.city}" tabindex="0">
`;

const createReviewsTemplate = (m) => `
    <div class="review-card skip-review" tabindex="0">
        <div class="review-header-card">
            <img src="./images/avatar-image.png" alt="">
            <div class="reviewer-wrapper">
                <span><b>${m.name}</b></span>
                <span class="review-date">${m.date}</span>
            </div>
        </div>
        <p>${m.review}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
    <div class="like-icon-wrapper">
        <button aria-label="favoritkan" id="like__button" class="like-icon-button" tabindex="0"><i class="fas fa-heart"></i></button>
    </div>
`;

const createLikedButtonTemplate = () => `
    <div class="like-icon-wrapper">
        <button aria-label="hapus dari daftar favorit" id="like__button" class="like-icon-button like-clicked" tabindex="0"><i class="fas fa-heart"></i></button>
    </div>
`;

export {
    createimageDetailTemplate,
    createRestoListsTemplate,
    createDetailRestoTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createReviewsTemplate,
};