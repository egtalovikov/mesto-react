import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="page__container">
        <header class="header">
          <img src="./images/header-logo.svg" alt="Логотип Mesto Russia" class="header__logo" />
        </header>
        <main class="content">
          <section class="profile" aria-label="профиль">
            <div class="profile__avatar-block">
              <button type="button" aria-label="Смена аватара" class="profile__avatar-change-button buttons"></button>
              <img src="#" alt="Аватар" class="profile__avatar" />
            </div>
            <div class="profile__info">
              <h1 class="profile__name">Name</h1>
              <button type="button" aria-label="Редактирование профиля" class="profile__edit-button buttons"></button>
              <p class="profile__about"></p>
            </div>
            <button type="button" aria-label="Добавление карточки" class="profile__add-button buttons"></button>
          </section>
          <section class="posts" aria-label="посты">
          </section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </div>
      <div class="popup popup_edit">
        <div class="popup__container">
          <button type="button" aria-label="Закрытие попапа" class="popup__close-button buttons"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form popup__form_edit" novalidate>
            <div class="popup__field">
              <input type="text" placeholder="Имя" name="name" class="popup__input popup__input_type_name" id="name-input"
                required minlength="2" maxlength="40" />
                <span class="popup__error name-input-error"></span>
            </div>
            <div class="popup__field">
              <input type="text" placeholder="О Себе" name="about" class="popup__input popup__input_type_about" id="about-input"
                required minlength="2" maxlength="200" />
                <span class="popup__error about-input-error"></span>
            </div>
            <button type="submit" class="popup__button buttons">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_add">
        <div class="popup__container">
          <button type="button" aria-label="Закрытие попапа" class="popup__close-button buttons"></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form popup__form_add" novalidate>
            <div class="popup__field">
              <input type="text" placeholder="Название" name="postname" class="popup__input popup__input_type_postname"
                id="postname-input" minlength="2" maxlength="30" required />
                <span class="popup__error postname-input-error"></span>
            </div>
            <div class="popup__field">
              <input type="url" placeholder="Ссылка на картинку" name="link" class="popup__input popup__input_type_link"
                id="link-input" required />
                <span class="popup__error link-input-error"></span>
            </div>
            <button type="submit" class="popup__button buttons">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_image">
        <div class="popup__image-container">
          <button type="button" aria-label="Закрытие попапа" class="popup__close-button buttons"></button>
          <figure class="popup__figure">
            <img src="#" alt="" class="popup__image" />
              <figcaption class="popup__image-caption"></figcaption>
          </figure>
        </div>
      </div>

      <div class="popup popup_confirmation">
        <div class="popup__container">
          <button type="button" aria-label="Закрытие попапа" class="popup__close-button buttons"></button>
          <h2 class="popup__title popup__title_confirmation">Вы уверены?</h2>
          <button type="button" class="popup__button buttons">
            Да
          </button>
        </div>
      </div>

      <div class="popup popup_avatar">
        <div class="popup__container">
          <button type="button" aria-label="Закрытие попапа" class="popup__close-button buttons"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form popup__form_avatar" novalidate>
            <div class="popup__field">
              <input type="url" placeholder="Ссылка на аватар" name="avatar" class="popup__input popup__input_type_avatar"
                id="avatar-input" required />
                <span class="popup__error avatar-input-error"></span>
            </div>
            <button type="submit" class="popup__button buttons">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template class="post-template">
        <article class="post">
          <img src="#" alt="" class="post__photo" />
            <button type="button" aria-label="Удаление карточки" class="post__delete-button"></button>
            <div class="post__bottom">
              <h2 class="post__title"></h2>
              <div class="post__like-block">
                <button type="button" aria-label="Лайк" class="post__like"></button>
                <p class="post__like-counter"></p>
              </div>
            </div>
        </article>
      </template>
    </>
  );
}

export default App;
