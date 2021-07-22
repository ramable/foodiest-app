import FavoriteRestoIdb from '../../src/scripts/data/database-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#like__wrapper'),
        favoriteRestaurants: FavoriteRestoIdb,
        resto,
    });
};

export {
    createLikeButtonPresenterWithResto
};