import {
    createLikeButtonTemplate,
    createLikedButtonTemplate
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
    async init({
        likeButtonContainer,
        favoriteRestaurants: FavoriteRestoIdb,
        resto,
    }) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto = resto;
        this._favoriteRestaurants = FavoriteRestoIdb;

        await this._renderButton();
    },

    async _renderButton() {
        const {
            id
        } = this._resto;

        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const resto = await this._favoriteRestaurants.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#like__button');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.putResto(this._resto);
            likeButton.classList.add('like-clicked');
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#like__button');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.deleteResto(this._resto.id);
            likeButton.classList.remove('like-clicked');
            this._renderButton();
        });
    },
};

export default LikeButtonPresenter;