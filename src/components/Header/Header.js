// import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import "./Header.css"
import React from 'react';
import "../../vendor/link.css"
import Navigation from '../Navigation/Navigation';


function Header({ isLoggedIn }) {
  const location = useLocation();
  
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // // const handleMenuToggle = () => {
  // //   setIsMenuOpen(!isMenuOpen);
  // // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize(); // Check initial width
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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

  return (
    <header className={`header ${location.pathname === "/" ? 'header__theme-main' : 'header__theme-movies'}`}>
      {logoElement}
      {isLoggedIn ? (
        <Navigation /> 
      )
        :
        (<>
      
        {notRegisteredLinks}
        </>)
      }
    </header>
  )
}
  
  export default Header;
