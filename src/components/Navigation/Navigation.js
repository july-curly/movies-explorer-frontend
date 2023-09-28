import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation () {
  const location = useLocation();

  return(
    <nav className="navigation">
      <div className="navigation__items">
        <NavLink 
          className={`navigation__link link ${location.pathname === "/" ? '' : 'navigation__link_theme-movies'} ${location.pathname === "/movies" ? "navigation__link_active" : ""
          }`} 
          to="/movies">
            Фильмы
        </NavLink>
        <NavLink 
          className={`navigation__link link ${location.pathname === "/" ? '' : 'navigation__link_theme-movies'} ${location.pathname === "/saved-movies" ? "navigation__link_active" : ""
          }`} 
          to="/saved-movies">
            Сохранённые фильмы
        </NavLink>
      </div>
      <Link className="navigation__link navigation__link_profile link" to="/profile">Аккаунт</Link>        
    </nav> 
  )
}

export default Navigation; 