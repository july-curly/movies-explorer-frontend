import logo from '../../images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import "./Header.css"
import React, { useEffect, useState } from 'react';
import "../../vendor/link.css"
import Navigation from '../Navigation/Navigation';


function Header({ isLoggedIn, isOpen }) {
  const location = useLocation();
  
  const [isMobile, setIsMobile] = useState(false);

  function isOpenHandle () {
    isOpen();
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoElement = (
    <Link to="/">
      <img className="header__logo logo" src={logo} alt="логотип" />
    </Link>
  );
  
  const notRegisteredLinks = (
    <div className="header__not-registered">
      <Link className="header__link_registration link" to="/signup">
        Регистрация
      </Link>
      <Link className="header__link_authorization link" to="/signin">
        Войти
      </Link>
    </div>
  );

  const menuButton = (
    <button 
      className={`header__menu-btn ${location.pathname === "/" ? '' : 'header__menu-btn_black'}`} 
      type="button" 
      onClick={isOpenHandle}
    />
  )

  return (
    <header className={`header ${location.pathname === "/" ? 'header__theme-main' : 'header__theme-movies'}`}>
      {logoElement}
      {isLoggedIn ? 
        (isMobile ? (menuButton) : (<Navigation />)) : (notRegisteredLinks)}
    </header>
  )
}
  
  export default Header;
