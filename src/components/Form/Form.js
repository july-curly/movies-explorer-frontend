import { Link } from "react-router-dom";
import "../../vendor/link.css"
import "../../vendor/button.css"
import "./Form.css"
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

function Form ({ 
  name, 
  title, 
  tabIndex, 
  buttonText, 
  subtitle, 
  path, 
  linkText, 
  children, 
  className, 
  isValid, 
  onSubmit,
  isLoading, 
  setIsError, 
  isError }) {

  useEffect(() => {
    setIsError(false)
  }, [setIsError]) 
  
  return(
    <>
      <h2 className="form__title">{title}</h2>
      <form className="form" action="#" name={name} noValidate onSubmit={onSubmit}>
        {children}
        <span id={`${name}-error"`} className={`form__error ${isError ? 'form__error_active' : ''}`}>Произошла ошибка.</span>
        {isLoading ? <Preloader/> :
          (<button 
            className={`form__submit button ${className} ${!isValid || isError ? 'form__btn_disabled' : ''}`} 
            tabIndex={tabIndex} 
            type="submit"
            disabled={!isValid || isError}>
              {buttonText}
          </button>)}
      </form>
      <p className='form__subtitle'>{subtitle}<Link className='form__link link' to={path}>{linkText}</Link></p>
    </>
  )
}

export default Form;