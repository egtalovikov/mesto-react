function PopupWithForm({isOpen, onClose, name, title, buttonText, children, onSubmit}) {
  return (
      <div onClick={(evt) => onClose(evt)} className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
          <h2 className="popup__title">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form popup__form_edit" name={name}>
            {children}
            <button type="submit" className="popup__button buttons">
          {buttonText}
        </button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;