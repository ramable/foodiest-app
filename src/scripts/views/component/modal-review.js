class ModalReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                animation-name: fadeIn;
                animation-duration: 0.4s;
                -webkit-animation-name: fadeIn;
                -webkit-animation-duration: 0.4s;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0
                }
            
                to {
                    opacity: 1
                }
            }
            
            @-webkit-keyframes fadeIn {
                from {
                    opacity: 0
                }
            
                to {
                    opacity: 1
                }
            }
            
            .modal-content {
                position: fixed;
                left: 0;
                bottom: 0;
                background-color: white;
                width: 100%;
                border-radius: 5rem 5rem 0 0;
                animation-name: slideIn;
                animation-duration: 0.4s;
                -webkit-animation-name: slideIn;
                -webkit-animation-duration: 0.4s;
            }
            
            @keyframes slideIn {
                from {
                    bottom: -300px;
                    opacity: 0
                }
            
                to {
                    bottom: 0;
                    opacity: 1
                }
            }
            
            @-webkit-keyframes slideIn {
                from {
                    bottom: -300px;
                    opacity: 0
                }
            
                to {
                    bottom: 0;
                    opacity: 1
                }
            }
            
            .modal-header {
                padding: 5rem 30rem 0;
            }
            
            .fa-comment-dots {
                margin-right: .75rem;
                color: #ef6c00;
            }
            
            .modal-body {
                padding: 2rem 30rem;
            }
            
            .modal-body input {
                padding: 1.5rem;
                margin-bottom: 1.5rem;
                font-size: var(--font-size);
                background-color: #f3f4f5;
                font-weight: 300;
                border-radius: .35rem;
                border: none;
                width: 100%;
            }
            
            .modal-body textarea {
                display: block;
                background-color: #f3f4f5;
                font-weight: 300;
                font-size: var(--font-size);
                font-family: 'Open Sans', sans-serif;
                border-radius: .35rem;
                border: none;
                padding: 1.5rem;
                width: 100%;
                height: 15rem;
            }
            
            .modal-footer {
                display: grid;
                grid-template-columns: 1fr 1fr 2fr;
                gap: 1rem;
                padding: 0 30rem 5rem;
            }
            
            .modal-footer button {
                width: 100%;
            }

            @media screen and (max-width: 768px) {
                .modal-footer {
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media screen and (max-width: 1024px) {
                .modal-header,
                .modal-body,
                .modal-footer {
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        </style>

        <div id="modal__review" class="modal hidden close-input">
            <div class="modal-content">
                <div class="container">
                    <div class="modal-header">
                        <h3 tabindex="0"><i class="fas fa-comment-dots fa-lg"></i><b>Berikan Ulasanmu</b></h3>
                    </div>
                    <form>
                        <div class="modal-body">
                            <input class="input-username" id="input__name" type="text" placeholder="Username" aria-label="masukan username" required>
                            <textarea id="input__review" name="reviews" placeholder="Please send me your feedback :)" maxlength=250 aria-label="masukan ulasanmu" required ></textarea>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary close-input" id="btn__cancel">Cancel</button>
                            <button type="submit" class="btn btn-primary" id="btn__submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('modal-review', ModalReview);