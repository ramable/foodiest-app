import loaderImage from '../../../public/images/loader.gif';

class PreLoader extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .preloader-container {
                position: absolute;
                right: 0;
                bottom: 0;
                z-index: 100;
                width: 100vw;
                height: 100vh;
                background-color: white;
                display: grid;
                align-items: center;
                justify-content: center;
            }
            
            .preloader-wrapper {
                display: grid;
                justify-items: center;
            }
            
            .preloader-wrapper img {
                width: 7rem;
                margin-bottom: 2rem;
            }
            
            .preloader-wrapper p {
                text-align: center;
                color: #ef6c00;
                font-weight: 700;
            }
        </style>


        <div id="preloader" class="preloader-container">
            <div class="preloader-wrapper">
                <!-- Source Preloader gif: https://tenor.com/view/loading-load-wait-load-bar-time-remaining-gif-13708895 -->
                <img src="${loaderImage}" alt="">
                <p>Lagi loading ...</p>
            </div>
        </div>
        `;
    }
}

customElements.define('pre-loader', PreLoader);