import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile"
import "./App.css"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NavMenu from "../NavMenu/NavMenu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const cards = [
    {
      name: '33 слова о дизайне',
      duration: '1ч42м',
      link: 'https://images.unsplash.com/photo-1695711453545-0b33b06df225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      _id: '1',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: 'https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
      _id: '2',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: 'https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
      _id: '3',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: 'https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
      _id: '4',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: 'https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
      _id: '5',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  function handleOpenMenu() {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  function handleSignOut() {
    // localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  }

  return(
    <div className="page__container">
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <Header isLoggedIn={isLoggedIn} isOpen={handleOpenMenu}/>
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path='/signin' element={ <Login name={'signin'}/> }/>
        <Route path='/signup' element={ <Register name={'signup'}/> }/>
        <Route path='/profile' element={ <Profile name={'profile'} handleSignOut={handleSignOut}/> }/>
        <Route path='/movies' element={ <Movies cards={cards}/> }/>
        <Route path='/saved-movies' element={ <SavedMovies cards={cards}/> }/>          
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <NavMenu isMenuOpen={isMenuOpen} onClose={handleCloseMenu}/>
    </div>
  )
}
export default App;