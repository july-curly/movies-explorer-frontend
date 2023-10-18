import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import "./Login.css"
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../utils/useFormValidation"

function Login ({name, handleLogin, setIsError, isError, isLoading}) {
  const { values, errors, handleChange, isValid } = useFormValidation();

  function onLogin(evt) {
    evt.preventDefault();
    handleLogin(values.email, values.password)
  }
  
  return(
    <section className="login">
      <Link to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <Form 
        name={name} 
        title={'Рады видеть!'}   
        tabIndex={3} 
        buttonText={'Войти'} 
        subtitle={'Ещё не зарегистрированы?'}
        path={"/signup"} 
        linkText={' Регистрация'}
        isValid={isValid}
        className={'login__submit'}
        onSubmit={onLogin}
        setIsError={setIsError}
        isError={isError}>
          <Input 
            inputName={"email"} 
            label={"E-mail"} 
            type={"email"} 
            placeholder={"Введите email"} 
            name={name} 
            tabIndex={1}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
            value={values.email || ''}
            error={errors.email}
            pattern={'^\\S+@\\S+\\.\\S+$'}
            isLoading={isLoading}
            />
          <Input
            inputName={"password"}  
            label={"Пароль"} 
            type={"password"} 
            placeholder={"Введите пароль"} 
            name={name} 
            tabIndex={2}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
            value={values.password || ''}
            error={errors.password}
            minLength={3}
            maxLength={30}
            isLoading={isLoading}/>
        </Form> 
    </section>
  )
}

export default Login;