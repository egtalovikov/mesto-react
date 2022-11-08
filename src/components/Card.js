function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <article className="post">
      <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="post__photo" />
      <button type="button" aria-label="Удаление карточки" className="post__delete-button"></button>
      <div className="post__bottom">
        <h2 className="post__title">{props.card.name}</h2>
        <div className="post__like-block">
          <button type="button" aria-label="Лайк" className="post__like"></button>
          <p className="post__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;