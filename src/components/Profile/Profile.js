import "./Profile.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import { useState } from "react"
import useFormValidation from "../../utils/useFormValidation"

function Profile ({ name, handleSignOut }) {
  const { values, errors, isValid, handleChange } = useFormValidation()

  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name={name} noValidate action="#" onSubmit={handleSave}>
        <div className="profile__form_item">
          <label className="profile__name-input" htmlFor="name">Имя</label>
          <input 
            className={`profile__input`}
            type="text" 
            id={`${name}__name`}
            required
            minLength="2"
            maxLength="30"
            name="name"
            tabIndex={1}
            onChange={handleChange}
            value={values.name || ''}
            disabled={!isEditing}
            placeholder="Введите имя"
            error={errors.email} />
        </div>
        <div className="profile__form_item">
          <label className="profile__name-input" htmlFor="email">E-mail</label>
          <input 
            className="profile__input" 
            type="email" 
            id={`${name}__email`}
            required
            name="email"
            tabIndex={2}
            onChange={handleChange}
            value={values.email || ''}
            disabled={!isEditing}
            placeholder="Введите email" 
           
          />
        </div>
        <div className="profile__buttons">
          {isEditing ? (
            <>
              <span id="profile-name-error" className="profile__error">При обновлении профиля произошла ошибка.</span>
              <button
                tabIndex={3}
                className={`profile__save button ${!isValid ? '' : 'profile__save_disabled'}`}
                type="submit"
                onClick={handleSave}
                disabled={!isValid}>
                Сохранить
              </button>
            </>
          ) : (
            <>
              <button
                tabIndex={3}
                className="profile__submit button"
                type="button"
                onClick={handleEdit}>
                Редактировать
              </button>
              <button className='profile__signout link' tabIndex={4} onClick={handleSignOut}>Выйти из аккаунта</button>
            </>
          )}
        </div>
      </form>
    </section>
  )
}

export default Profile;