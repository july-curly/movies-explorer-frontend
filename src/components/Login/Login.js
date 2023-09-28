import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import "./Login.css"
import Form from "../Form/Form";
import Input from "../Input/Input";
import useFormValidation from "../../utils/useFormValidation"

function Login ({name}) {
  const { values, errors, isValid, isInputValid, handleChange, setValue } = useFormValidation(); 

  return(
    <section className="login">
      <Link to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <Form 
        name={name} 
        title={'Рады видеть!'}   
        tabIndex={3} 
        buttonType={'submit'} 
        buttonText={'Войти'} 
        subtitle={'Ещё не зарегистрированы?'}
        path={"/signup"} 
        linkText={' Регистрация'}>
          <Input inputName={"email"} label={"E-mail"} type={"email"} placeholder={"Введите email"} name={name} tabIndex={1}/>
          <Input inputName={"password"} label={"Пароль"} type={"password"} placeholder={"Введите пароль"} name={name} tabIndex={2}/>
        </Form> 
    </section>
  )
}

export default Login;