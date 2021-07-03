import FavoriteRestoIdb from '../data/database-idb';
import {
    createLikeButtonTemplate,
    createLikedButtonTemplate
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
    async init({
        likeButtonContainer,
        favoriteCartNumber,
        resto,
    }) {
        this._likeButtonContainer = likeButtonContainer;
        this._favoriteCartNumber = favoriteCartNumber;
        this._resto = resto;

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
        const resto = await FavoriteRestoIdb.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#like__button');
        likeButton.addEventListener('click', async () => {
            const amountFavorite = await FavoriteRestoIdb.getAllResto();
            await FavoriteRestoIdb.putResto(this._resto);
            likeButton.classList.add('like-clicked');
            this._renderButton();
            this._favoriteCartNumber.classList.remove('hidden');
            this._favoriteCartNumber.innerHTML = amountFavorite.length + 1;
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#like__button');
        likeButton.addEventListener('click', async () => {
            const amountFavorite = await FavoriteRestoIdb.getAllResto();
            await FavoriteRestoIdb.deleteResto(this._resto.id);
            likeButton.classList.remove('like-clicked');
            this._renderButton();
            this._favoriteCartNumber.innerHTML = amountFavorite.length - 1;
            if (amountFavorite.length === 1) {
                this._favoriteCartNumber.classList.add('hidden');
            }
        });
    },
};

export default LikeButtonInitiator;