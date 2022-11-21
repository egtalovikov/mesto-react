import React from 'react';
import api from '../utils/api'
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {

    api.getInitialCards()
      .then((values) => {
        setCards(values)
      })
      .catch((err) => {

        console.log(err);

      })
  }, [])

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

  return (
    <main className="content">
      <section className="profile" aria-label="профиль">
        <div className="profile__avatar-block">
          <button onClick={props.onEditAvatar} type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button onClick={props.onEditProfile} type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
      </section>
      <section className="posts" aria-label="посты">
        {cards.map((item) => (
          <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        ))}
      </section>
    </main>
  )
}

export default Main;