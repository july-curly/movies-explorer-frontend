import "../../vendor/logo.css"
import "../../vendor/link.css"
import "../../vendor/button.css"
import "./Input.css"

function Input ({ name, inputName, type, placeholder, label, tabIndex, onChange, value, error, pattern, minLength, maxLength, isLoading }) {
  
  return(
    <div className="inputs" >
      <label className="inputs__name inputs__name_type_name" htmlFor={inputName}>{label}</label>
      <input 
        className={`inputs__input inputs__input_type_${inputName} ${error ? 'inputs__input_error' : ''}`} 
        type={type} 
        id={`${name}__${inputName}`}
        required
        name={inputName}
        tabIndex={tabIndex}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={error}
        minLength={minLength || undefined}
        maxLength={maxLength || undefined}
        pattern={pattern || undefined}
        disabled={isLoading}
      />
      <span id={`${name}-${inputName}-error`} className={`inputs__error inputs__error_type_${inputName}`}>{error}</span>
    </div>     
  )
}

export default Input;