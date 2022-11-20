import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setCard] = React.useState({name: '', link: ''});;
  const [currentUser, setCurrentUser] = React.useState('');;

  React.useEffect(() => {
    setCurrentUser(api.loadUserInfo());
  }, [])

  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleAddPlaceClick() {
    setAddPlace(true);
  }

  function handleCardClick(card) {
    setCard(card);
  }

  function closeAllPopups(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      setEditAvatar(false);
      setEditProfile(false);
      setAddPlace(false);
      setCard({name: '', link: ''});
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
            id="avatar-input" required />
          <span className="popup__error avatar-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name={'confirmation'} title={'Вы уверены?'} buttonText={'Да'} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} onClose={closeAllPopups}>
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
      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'} onClose={closeAllPopups}>
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
