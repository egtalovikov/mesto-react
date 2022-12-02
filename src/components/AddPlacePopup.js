import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

function AddPlacePopup({ isOpen, onAddPlace, isLoading, onClose }) {
    const {values, handleChange, setValues} = useForm({});

    React.useEffect(() => {
        setValues({});
    }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({ 

            name: values.postname, 

            link: values.link, 

        });
    }

    return (
        <PopupWithForm isOpen={isOpen} name={'add'} title={'Новое место'} buttonText={isLoading ? 'Сохранение...' : 'Создать'} onClose={onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
                <input value={values.postname || ''} type="text" onChange={handleChange} placeholder="Название" name="postname" className="popup__input popup__input_type_postname"
                    id="postname-input" minLength="2" maxLength="30" required />
                <span className="popup__error postname-input-error"></span>
            </div>
            <div className="popup__field">
                <input value={values.link || ''} type="url" onChange={handleChange} placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_link"
                    id="link-input" required />
                <span className="popup__error link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;