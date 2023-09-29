import { Link, useLocation } from "react-router-dom";
import "../../vendor/link.css"
import "../../vendor/button.css"
import ProfileButton from "../ProfileButton/ProfileButton";
import "./NavMenu.css"

function NavMenu ({isMenuOpen, onClose}) {
  const location = useLocation();
 
  return(
    <div className={`nav-menu ${isMenuOpen ? 'nav-menu_opened' : ''}`}>
      <div className="nav-menu__container">
        <button className="nav-menu__close" type="button" onClick={onClose}></button>
        <nav className="nav-menu__items">
          <ul className="nav-menu__links">
            <li className="nav-menu__item">
              <Link className={`nav-menu__link link ${location.pathname === "/" ? "nav-menu__link_active" : ""}`} to="/">Главная</Link>
            </li>
            <li className="nav-menu__item">
              <Link className={`nav-menu__link link ${location.pathname === "/movies" ? "nav-menu__link_active" : ""}`} to="/movies">Фильмы</Link>
              </li>
            <li className="nav-menu__item">
              <Link className={`nav-menu__link link ${location.pathname === "/saved-movies" ? "nav-menu__link_active" : ""}`}  to="/saved-movies">Сохранённые фильмы</Link></li>
          </ul>
        </nav>
        <ProfileButton/>
      </div>
    </div> 
  )
}

export default NavMenu;