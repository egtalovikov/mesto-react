import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const editAvatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: editAvatarRef.current.value,
        });
    }

    return (
        <PopupWithForm isOpen={props.isOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
                <input ref={editAvatarRef} type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
                    id="avatar-input" required />
                <span className="popup__error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;