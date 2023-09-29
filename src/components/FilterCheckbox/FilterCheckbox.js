import "./FilterCheckbox.css"
import { useState } from "react";

function FilterCheckbox () {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <span className="filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>

      
    </section>
  )
}

export default FilterCheckbox;