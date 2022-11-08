import React from 'react';
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
    <>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
            id="avatar-input" required />
          <span className="popup__error avatar-input-error"></span>
        </div>
        <button type="submit" className="popup__button buttons">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm name={'confirmation'} title={'Вы уверены?'} onClose={closeAllPopups}>
        <button type="button" className="popup__button buttons">
          Да
        </button>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} onClose={closeAllPopups}>
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
        <button type="submit" className="popup__button buttons">
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} title={'Редактировать профиль'} onClose={closeAllPopups}>
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
        <button type="submit" className="popup__button buttons">
          Сохранить
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
