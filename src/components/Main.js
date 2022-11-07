function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup_avatar").classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_edit").classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_add").classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile" aria-label="профиль">
        <div className="profile__avatar-block">
          <button onClick={handleEditAvatarClick} type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
          <img src="#" alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Name</h1>
          <button onClick={handleEditProfileClick} type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
          <p className="profile__about"></p>
        </div>
        <button onClick={handleAddPlaceClick} type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
      </section>
      <section className="posts" aria-label="посты">
      </section>
    </main>
  )
}

export default Main;