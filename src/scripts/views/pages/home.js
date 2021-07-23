import RestoDataSource from '../../data/data-source';
import {
    createRestoListsTemplate
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <hero-banner></hero-banner>
            <section class="body-home" id="content__home">
                <empty-state></empty-state>
                <div class="container">
                    <div id="content__wrapper">
                        <div id="recommend__resto">
                            <h3 tabindex="0" id="heading__page"><b>Rekomendasi Restoran &#128071</b></h3>
                            <div id="resto__card" class="row-resto"></div>
                        </div>
                        <div id="searchResult__resto" class="hidden">
                            <h3 id="heading__page" tabindex="0"><b>Hasil Pencarian</b></h3>
                            <p id="title__search" tabindex="0"></p>
                            <div id="search__card" class="row-resto"></div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    async afterRender() {
        try {
            const dataResto = await RestoDataSource.restoLists();
            const restoContainer = document.querySelector('#resto__card');
            const skipButton = document.querySelector('#skip__button');
            const recommendList = document.querySelector('#recommend__resto');
            const searchAmount = document.querySelector('#title__search');
            const restoSearchCard = document.querySelector('#search__card');
            const inputKeyword = document.querySelector('#input__keyword');
            const searchButton = document.querySelector('#search__button');
            const searchWrapper = document.querySelector('#searchResult__resto');
            const searchNotFound = document.querySelector('#search__not__found');
            const captionNotFound = document.querySelector('#caption__notFound');

            dataResto.forEach((m) => {
                restoContainer.innerHTML += createRestoListsTemplate(m);
            });

            inputKeyword.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    searchButton.click();
                }
            });

            searchButton.addEventListener('click', async (e) => {
                e.preventDefault();
                recommendList.classList.add('hidden');
                const searchResult = await RestoDataSource.searchResto(inputKeyword.value);
                if (searchResult.length > 0) {
                    searchAmount.innerHTML = `Kamu menemukan <strong>${searchResult.length} Restoran</strong> dengan kata kunci <strong>"${inputKeyword.value}"</strong>`;
                    let cards = '';
                    searchResult.forEach((m) => {
                        cards += createRestoListsTemplate(m);
                    });
                    searchNotFound.classList.add('hidden');
                    searchWrapper.classList.remove('hidden');
                    restoSearchCard.innerHTML = cards;
                } else {
                    searchNotFound.classList.remove('hidden');
                    searchWrapper.classList.add('hidden');
                    captionNotFound.innerHTML = `Kami tidak menemukan daftar restoran dari kata kunci <strong>"${inputKeyword.value}"</strong>`;
                }
                skipButton.click();
            });

            skipButton.addEventListener('click', (event) => {
                event.preventDefault();
                const windowHeight = window.screen.height;
                const windowWidth = window.screen.width;
                if (windowWidth === 320) {
                    document.body.scrollTop = windowHeight / 2.5;
                    document.documentElement.scrollTop = windowHeight / 2.5;
                } else if (windowWidth < 800) {
                    document.body.scrollTop = windowHeight / 2.3;
                    document.documentElement.scrollTop = windowHeight / 2.3;
                } else if (windowHeight > 800) {
                    document.body.scrollTop = windowHeight / 1.2;
                    document.documentElement.scrollTop = windowHeight / 1.2;
                }
            });
        } catch (err) {
            document.querySelector('#empty__state').classList.remove('hidden');
            document.querySelector('#content__wrapper').classList.add('hidden');
            document.querySelector('.background-hero').classList.add('hidden');
        }
    },
};

export default Home;