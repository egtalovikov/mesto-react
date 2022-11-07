function Main(props) {
  return (
    <main className="content">
      <section className="profile" aria-label="профиль">
        <div className="profile__avatar-block">
          <button onClick={props.onEditAvatar} type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
          <img src="#" alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Name</h1>
          <button onClick={props.onEditProfile} type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
          <p className="profile__about"></p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
      </section>
      <section className="posts" aria-label="посты">
      </section>
    </main>
  )
}

export default Main;