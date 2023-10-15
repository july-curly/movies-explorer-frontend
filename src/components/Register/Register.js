import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import "./Register.css"
import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../utils/useFormValidation"

function Register ({name, handleRegister, isLoading, setIsError, isError }) {
  const { values, errors, isInputValid, handleChange, isValid } = useFormValidation();

  function onRegister(evt) {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password)
  }

  return(
    <section className="register">
      <Link to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <Form 
        name={name} 
        title={'Добро пожаловать!'}   
        tabIndex={4} 
        buttonText={'Зарегистрироваться'} 
        subtitle={'Уже зарегистрированы?'}
        path={"/signin"} 
        linkText={' Войти'} 
        isValid={isValid}
        error={errors}
        onSubmit={onRegister}
        isLoading={isLoading}
        setIsError={setIsError}
        isError={isError}>
          <Input 
            inputName={"name"} 
            label={"Имя"} 
            type={"text"} 
            placeholder={"Введите имя"} 
            name={name} 
            tabIndex={1}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
            value={values.name || ''}
            error={errors.name}
            isInputValid={isInputValid}
            // pattern={'/^[a-zA-Zа-яА-ЯёЁ\s-]+$/'}
            minLength={2}
            maxLength={30}
          />
          <Input 
            inputName={"email"} 
            label={"E-mail"} 
            type={"email"} 
            placeholder={"Введите email"} 
            name={name} 
            tabIndex={2}
            value={values.email || ''}
            error={errors.email}
            isInputValid={isInputValid}
            pattern={'^\\S+@\\S+\\.\\S+$'}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />
          <Input 
            inputName={"password"} 
            label={"Пароль"} 
            type={"password"} 
            placeholder={"Введите пароль"} 
            name={name} 
            tabIndex={3}
            value={values.password || ''}
            error={errors.password}
            isInputValid={isInputValid}
            minLength={3}
            maxLength={30}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />
      </Form> 
    </section>
  )
}

export default Register;
