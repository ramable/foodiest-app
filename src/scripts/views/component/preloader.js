import loaderImage from '../../../public/assets/static/loader.gif';

class PreLoader extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
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