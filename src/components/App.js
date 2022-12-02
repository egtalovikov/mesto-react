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
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setCard] = React.useState({ name: '', link: '' });;
  const [currentUser, setCurrentUser] = React.useState({});;
  const [isLoading, setIsLoading] = React.useState(false);


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
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlace(true);
  }

  function handleCardClick(card) {
    setCard(card);
  }

  function handlePopupClose(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closeAllPopups()
    }
  }

  function closeAllPopups() {
    setEditAvatar(false);
    setIsEditProfilePopupOpen(false);
    setAddPlace(false);
    setCard({ name: '', link: '' });
  }

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link

  React.useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]) 


  function handleUpdateUser(user) {
    setIsLoading(true);
    api.editProfile(user)
      .then(res => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {

        console.log(err);

      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api.changeAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        setEditAvatar(false);
      })
      .catch((err) => {

        console.log(err);

      })
      .finally(() => setIsLoading(false));
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
    setIsLoading(true);
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setAddPlace(false);
      })
      .catch((err) => {

        console.log(err);

      })
      .finally(() => setIsLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
      <Footer />
      <EditAvatarPopup isLoading={isLoading} isOpen={isEditAvatarPopupOpen} onClose={handlePopupClose} onUpdateAvatar={handleUpdateAvatar} />
      <AddPlacePopup isLoading={isLoading} isOpen={isAddPlacePopupOpen} onClose={handlePopupClose} onAddPlace={handleAddPlaceSubmit} />
      <PopupWithForm isLoading={isLoading} name={'confirmation'} title={'Вы уверены?'} buttonText={'Да'} onClose={handlePopupClose} />
      <EditProfilePopup isLoading={isLoading} isOpen={isEditProfilePopupOpen} onClose={handlePopupClose} onUpdateUser={handleUpdateUser} />
      <ImagePopup card={selectedCard} onClose={handlePopupClose} />
    </CurrentUserContext.Provider>
  );
}

export default App;
