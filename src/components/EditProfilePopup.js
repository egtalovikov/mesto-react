import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

    return (
        <PopupWithForm isOpen={props.isOpen} name={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'} onClose={props.onClose}>
        <div className="popup__field">
          <input type="text" value={name} onChange={handleNameChange} placeholder="Имя" name="name" className="popup__input popup__input_type_name" id="name-input"
            required minLength="2" maxLength="40" />
          <span className="popup__error name-input-error"></span>
        </div>
        <div className="popup__field">
          <input type="text" value={description} onChange={handleDescriptionChange} placeholder="О Себе" name="about" className="popup__input popup__input_type_about" id="about-input"
            required minLength="2" maxLength="200" />
          <span className="popup__error about-input-error"></span>
        </div>
      </PopupWithForm>
    )
}

export default EditProfilePopup;