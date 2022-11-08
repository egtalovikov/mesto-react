import React from 'react';
import api from '../utils/api'

function Main(props) {
  const [userName, setUserName] = React.useState('Name');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('#');

  React.useEffect(() => {
    api.loadUserInfo()
    .then((values) => {
      setUserName(values.name);
      setUserDescription(values.about);
      setUserAvatar(values.avatar)
    })
  })

  return (
    <main className="content">
      <section className="profile" aria-label="профиль">
        <div className="profile__avatar-block">
          <button onClick={props.onEditAvatar} type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={props.onEditProfile} type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
      </section>
      <section className="posts" aria-label="посты">
      </section>
    </main>
  )
}

export default Main;