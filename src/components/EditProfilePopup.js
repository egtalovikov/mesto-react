import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, isLoading, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm isOpen={isOpen} name={'edit'} title={'Редактировать профиль'} buttonText={isLoading ? 'Сохранение...' : 'Сохранить'} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="text" value={name || ''} onChange={handleNameChange} placeholder="Имя" name="name" className="popup__input popup__input_type_name" id="name-input"
          required minLength="2" maxLength="40" />
        <span className="popup__error name-input-error"></span>
      </div>
      <div className="popup__field">
        <input type="text" value={description || ''} onChange={handleDescriptionChange} placeholder="О Себе" name="about" className="popup__input popup__input_type_about" id="about-input"
          required minLength="2" maxLength="200" />
        <span className="popup__error about-input-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup;