import RestoDataSource from '../data/data-source';

const PostReview = (url, name, review) => {
    const dataInput = {
        id: url.id,
        name,
        review,
    };
    RestoDataSource.postRestoReview(dataInput);

    const reviewsContainer = document.querySelector('#customer__reviews');
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = new Date().toLocaleDateString('id-ID', options);
    const newReview = `
        <div class="review-card" tabindex="0">
            <div class="review-header-card">
                <img src="./images/avatar-image.png" alt="">
                <div class="reviewer-wrapper">
                    <span><b>${name}</b></span>
                    <span class="review-date">${date}</span>
                </div>
            </div>
            <p>${review}</p>
        </div>
    `;
    reviewsContainer.innerHTML += newReview;
};

export default PostReview;