import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
    return (
        <PopupWithForm isOpen={props.isOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} onClose={props.onClose}>
            <div className="popup__field">
                <input type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
                    id="avatar-input" required />
                <span className="popup__error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;