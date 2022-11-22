import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setCard] = React.useState({ name: '', link: '' });;
  const [currentUser, setCurrentUser] = React.useState({});;

  React.useEffect(() => {
    api.loadUserInfo()
      .then(res => {
        setCurrentUser(res)
      })
      .catch((err) => {

        console.log(err);

      })
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
      setCard({ name: '', link: '' });
    }
  }

  function handleUpdateUser(user) {
    api.editProfile(user)
    .then(res => {
      setCurrentUser(res);
      setEditProfile(false);
    })
    .catch((err) => {

      console.log(err);

    })
  }

  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      setEditAvatar(false);
    })
    .catch((err) => {

      console.log(err);

    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
