class ModalReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
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
                            <div id="connection__alert" class="connection-alert hidden">
                                <span>Not connected! Sambungkan internet untuk submit ulasan</span>
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