import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <header className="header">
            <img src={logo} alt="Логотип Mesto Russia" className="header__logo" />
          </header>
          <main className="content">
            <section className="profile" aria-label="профиль">
              <div className="profile__avatar-block">
                <button type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
                <img src="#" alt="Аватар" className="profile__avatar" />
              </div>
              <div className="profile__info">
                <h1 className="profile__name">Name</h1>
                <button type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
                <p className="profile__about"></p>
              </div>
              <button type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
            </section>
            <section className="posts" aria-label="посты">
            </section>
          </main>
          <footer className="footer">
            <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
          </footer>
        <div className="popup popup_edit">
          <div className="popup__container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_edit" novalidate>
              <div className="popup__field">
                <input type="text" placeholder="Имя" name="name" className="popup__input popup__input_type_name" id="name-input"
                  required minlength="2" maxlength="40" />
                <span className="popup__error name-input-error"></span>
              </div>
              <div className="popup__field">
                <input type="text" placeholder="О Себе" name="about" className="popup__input popup__input_type_about" id="about-input"
                  required minlength="2" maxlength="200" />
                <span className="popup__error about-input-error"></span>
              </div>
              <button type="submit" className="popup__button buttons">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_add">
          <div className="popup__container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form popup__form_add" novalidate>
              <div className="popup__field">
                <input type="text" placeholder="Название" name="postname" className="popup__input popup__input_type_postname"
                  id="postname-input" minlength="2" maxlength="30" required />
                <span className="popup__error postname-input-error"></span>
              </div>
              <div className="popup__field">
                <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_link"
                  id="link-input" required />
                <span className="popup__error link-input-error"></span>
              </div>
              <button type="submit" className="popup__button buttons">
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_image">
          <div className="popup__image-container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <figure className="popup__figure">
              <img src="#" alt="" className="popup__image" />
              <figcaption className="popup__image-caption"></figcaption>
            </figure>
          </div>
        </div>

        <div className="popup popup_confirmation">
          <div className="popup__container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
            <button type="button" className="popup__button buttons">
              Да
            </button>
          </div>
        </div>

        <div className="popup popup_avatar">
          <div className="popup__container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_avatar" novalidate>
              <div className="popup__field">
                <input type="url" placeholder="Ссылка на аватар" name="avatar" className="popup__input popup__input_type_avatar"
                  id="avatar-input" required />
                <span className="popup__error avatar-input-error"></span>
              </div>
              <button type="submit" className="popup__button buttons">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <template className="post-template">
          <article className="post">
            <img src="#" alt="" className="post__photo" />
            <button type="button" aria-label="Удаление карточки" className="post__delete-button"></button>
            <div className="post__bottom">
              <h2 className="post__title">#</h2>
              <div className="post__like-block">
                <button type="button" aria-label="Лайк" className="post__like"></button>
                <p className="post__like-counter"></p>
              </div>
            </div>
          </article>
        </template>
        </div>
      </div>
    </>
  );
}

export default App;
