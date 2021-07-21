import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#like__wrapper'),
        resto,
    });
};

export {
    createLikeButtonPresenterWithResto
};