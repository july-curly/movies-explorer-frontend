import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import "./Register.css"
import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import Form from "../Form/Form";
import Input from "../Input/Input";

function Register ({name}) {
  return(
    <section className="register">
      <Link to="/">
        <img className="logo" src={logo} alt="логотип" />
      </Link>
      <Form 
        name={name} 
        title={'Добро пожаловать!'}   
        tabIndex={4} 
        buttonType={'submit'} 
        buttonText={'Зарегистрироваться'} 
        subtitle={'Уже зарегистрированы?'}
        path={"/signin"} 
        linkText={' Войти'} >
          <Input inputName={"name"} label={"Имя"} type={"text"} placeholder={"Введите имя"} name={name} tabIndex={1}/>
          <Input inputName={"email"} label={"E-mail"} type={"email"} placeholder={"Введите email"} name={name} tabIndex={2}/>
          <Input inputName={"password"} label={"Пароль"} type={"password"} placeholder={"Введите пароль"} name={name} tabIndex={3}/>
      </Form> 
    </section>
  )
}

export default Register;
