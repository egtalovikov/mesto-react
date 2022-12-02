import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {
    const editAvatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: editAvatarRef.current.value,
        });
    }

    return (
        <PopupWithForm isOpen={isOpen} name={'avatar'} title={'Обновить аватар'} buttonText={isLoading ? 'Сохранение...' : 'Сохранить'} onClose={onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
                <input ref={editAvatarRef} type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
                    id="avatar-input" required />
                <span className="popup__error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;