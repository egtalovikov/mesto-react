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
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [cards, setCards] = React.useState([]);
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

  React.useEffect(() => {

    api.getInitialCards()
      .then((values) => {
        setCards(values)
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {

        console.log(err);

      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((c) => c !== card))
      })
      .catch((err) => {

        console.log(err);

      })
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      setAddPlace(false);
    })
    .catch((err) => {

      console.log(err);

    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
      <Footer />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <PopupWithForm name={'confirmation'} title={'Вы уверены?'} buttonText={'Да'} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
