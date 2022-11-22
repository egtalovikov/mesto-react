import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name,
            link,
        });
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm isOpen={props.isOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
                <input value={name} type="text" onChange={handleNameChange} placeholder="Название" name="postname" className="popup__input popup__input_type_postname"
                    id="postname-input" minLength="2" maxLength="30" required />
                <span className="popup__error postname-input-error"></span>
            </div>
            <div className="popup__field">
                <input value={link} type="url" onChange={handleLinkChange} placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_link"
                    id="link-input" required />
                <span className="popup__error link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;