import "./Profile.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import { useContext, useEffect } from "react"
import useFormValidation from "../../utils/useFormValidation"
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from "../Preloader/Preloader"

function Profile ({ name, handleSignOut, isEditing, setIsEditing, isLoading,  isError, handleUpdateUser, isSuccess }) {
  const currentUser = useContext(CurrentUserContext)
  const { values, errors, isValid, handleChange, reset } = useFormValidation({name: currentUser.name, email: currentUser.email});
 
 
  useEffect(() => {
      reset({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, reset]);
   
  const handleEdit = () => {
    setIsEditing(true);
  };

  function handleSave (e) {
    e.preventDefault();
    handleUpdateUser(values.name, values.email);
  };

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
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
            error={errors.name} />
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
            pattern={'^\\S+@\\S+\\.\\S+$'}
          />
        </div>
        <div className="profile__buttons">
          {isEditing ? (
            <>
              <span id="profile-name-error" className={`profile__error ${isError ? 'profile__error_active' : ''}`}>При обновлении профиля произошла ошибка.</span>
              {isLoading ? (<Preloader/>) : (
              <button
                tabIndex={3}
                className={`profile__save button ${!isValid || isError ? 'profile__save_disabled' : ''}`}
                type="submit"
                onClick={handleSave}
                disabled={!isValid}>
                Сохранить
              </button>)}
            </>
          ) : (
            <>
              <span className={`profile__success ${isSuccess ? 'profile__success_active' : ''}`}>Аккаунт изменен.</span>
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