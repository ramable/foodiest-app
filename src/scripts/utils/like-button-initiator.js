import FavoriteRestoIdb from '../data/database-idb';
import {
    createLikeButtonTemplate,
    createLikedButtonTemplate
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
    async init({
        likeButtonContainer,
        resto,
    }) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto = resto;

        await this._renderButton();
    },

    async _renderButton() {
        const {
            id
        } = this._resto;

        if (await this._isRestoExist(id)) {
            this._renderLiked();;
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
            await FavoriteRestoIdb.putResto(this._resto);
            likeButton.classList.add('like-clicked');
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#like__button');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestoIdb.deleteResto(this._resto.id);
            likeButton.classList.remove('like-clicked');
            this._renderButton();
        });
    },
};

export default LikeButtonPresenter;