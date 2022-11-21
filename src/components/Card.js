import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `post__delete-button ${isOwn ? 'post__delete-button_visible' : ''}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `post__like ${isLiked ? 'post__like_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  return (
    <article className="post">
      <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="post__photo" />
      <button type="button" aria-label="Удаление карточки" className={cardDeleteButtonClassName}></button>
      <div className="post__bottom">
        <h2 className="post__title">{props.card.name}</h2>
        <div className="post__like-block">
          <button type="button" onClick={handleLikeClick} aria-label="Лайк" className={cardLikeButtonClassName}></button>
          <p className="post__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;