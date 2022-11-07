import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleAddPlaceClick() {
    setAddPlace(true);
  }

  function closeAllPopups(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      setEditAvatar(false);
      setEditProfile(false);
      setAddPlace(false);
    }
  }

  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} onClose={closeAllPopups}>
            <div class="popup__field">
              <input type="url" placeholder="Ссылка на аватар" name="avatar" class="popup__input popup__input_type_avatar"
                id="avatar-input" required />
              <span class="popup__error avatar-input-error"></span>
            </div>
            <button type="submit" class="popup__button buttons">
              Сохранить
            </button>
          </PopupWithForm>
          <PopupWithForm name={'confirmation'} title={'Вы уверены?'} onClose={closeAllPopups}>
            <button type="button" class="popup__button buttons">
              Да
            </button>
          </PopupWithForm>
          <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} onClose={closeAllPopups}>
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
          </PopupWithForm>
          <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} title={'Редактировать профиль'} onClose={closeAllPopups}>
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
          </PopupWithForm>




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
