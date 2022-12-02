function ImagePopup({ card, onClose }) {
  return (
    <div onClick={(evt) => onClose(evt)} className={`popup popup_image ${card.link ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
        <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;