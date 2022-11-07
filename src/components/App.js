import Header from './Header';
import Main from './Main';
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main/>
          <Footer/>


        <div className="popup popup_image">
          <div className="popup__image-container">
            <button type="button" aria-label="Закрытие попапа" className="popup__close-button buttons"></button>
            <figure className="popup__figure">
              <img src="#" alt="" className="popup__image" />
              <figcaption className="popup__image-caption"></figcaption>
            </figure>
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
