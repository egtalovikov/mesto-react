function PopupWithForm(props) {
  return (
      <div className={`popup popup_${props.name}`}>
        <div className="popup__container">
          <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form popup__form_edit" name={props.name} novalidate>
            {props.children}
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;