import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm isOpen={props.isOpen} name={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'} onClose={props.onClose}>
        <div className="popup__field">
          <input type="text" placeholder="Имя" name="name" className="popup__input popup__input_type_name" id="name-input"
            required minLength="2" maxLength="40" />
          <span className="popup__error name-input-error"></span>
        </div>
        <div className="popup__field">
          <input type="text" placeholder="О Себе" name="about" className="popup__input popup__input_type_about" id="about-input"
            required minLength="2" maxLength="200" />
          <span className="popup__error about-input-error"></span>
        </div>
      </PopupWithForm>
    )
}

export default EditProfilePopup;