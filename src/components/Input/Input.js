import "../../vendor/sign.css"
import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import useFormValidation from "../../utils/useFormValidation"
import "./Input.css"

function Input ({ name, inputName, type, placeholder, label, tabIndex }) {
  const { errors, isInputValid, handleChange } = useFormValidation();
  
  return(
    <div className="inputs" >
      <label className="inputs__name inputs__name_type_name" htmlFor={inputName}>{label}</label>
      <input 
        className={`inputs__input inputs__input_type_${inputName} ${isInputValid.inputName === undefined || isInputValid.inputName ? '' : 'inputs__input_error'}`} 
        type={type} 
        id={`${name}__name`}
        required
        name={inputName}
        tabIndex={tabIndex}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span id={`${name}-${inputName}-error`} className={`inputs__error inputs__error_type_${inputName}`}>{errors.inputName}</span>
    </div>     
  )
}

export default Input;