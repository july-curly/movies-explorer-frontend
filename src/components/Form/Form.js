import { Link } from "react-router-dom";
import "../../vendor/link.css"
import "../../vendor/button.css"
import "./Form.css"


function Form ({ name, title, tabIndex, buttonType, buttonText, subtitle, path, linkText, children }) {
  return(
    <>
      <h2 className="form__title">{title}</h2>
      <form className="form" action="#" name={name} noValidate>
        {children}
        <button className="form__submit button" tabIndex={tabIndex} type={buttonType}>{buttonText}</button>
      </form>
      <p className='form__subtitle'>{subtitle}<Link className='form__link link' to={path}>{linkText}</Link></p>
    </>
  )
}

export default Form;