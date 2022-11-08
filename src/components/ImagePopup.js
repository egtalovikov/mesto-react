function ImagePopup(props) {
  return (
    <div onClick={(evt) => props.onClose(evt)} className={`popup popup_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
        <figure className="popup__figure">
          <img src={props.card} alt="" className="popup__image" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;