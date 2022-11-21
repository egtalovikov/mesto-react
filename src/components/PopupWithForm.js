function PopupWithForm(props) {
  return (
      <div onClick={(evt) => props.onClose(evt)} className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form onSubmit={props.onSubmit} className="popup__form popup__form_edit" name={props.name} noValidate>
            {props.children}
            <button type="submit" className="popup__button buttons">
          {props.buttonText}
        </button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;