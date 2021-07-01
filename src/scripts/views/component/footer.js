class FooterWrapper extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            footer {
                padding: 3rem 0;
                text-align: center;
                background-color: #fff3e0;
                color: #a1a1a1;
            }

            @media screen and (max-width: 768px) {
                footer {
                    font-size: var(--min-font-size);
                }
            }
        </style>
        
        <footer>
            <span>Copyright © 2021 &middot <b>FoodiestApp</b> &middot All Rights Reserved</span>
        </footer>
        `;
    }
}

customElements.define('footer-wrapper', FooterWrapper);