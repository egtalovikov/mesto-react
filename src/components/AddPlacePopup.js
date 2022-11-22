import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    return (
        <PopupWithForm isOpen={props.isOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} onClose={props.onClose}>
            <div className="popup__field">
                <input type="text" placeholder="Название" name="postname" className="popup__input popup__input_type_postname"
                    id="postname-input" minLength="2" maxLength="30" required />
                <span className="popup__error postname-input-error"></span>
            </div>
            <div className="popup__field">
                <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_link"
                    id="link-input" required />
                <span className="popup__error link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;