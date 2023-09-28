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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const cards = [
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: '../../images/card.jpg',
      _id: '1',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: '../../images/card.jpg',
      _id: '2',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: '../../images/card.jpg',
      _id: '3',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: '../../images/card.jpg',
      _id: '1',
    },
    {
      name: '33 слова о дизайне',
      duration: '1ч 42м',
      link: '../../images/card.jpg',
      _id: '1',
    },
  ];

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
        <Header isLoggedIn={isLoggedIn} />
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path='/signin' element={ <Login name={'signin'}/> }/>
        <Route path='/signup' element={ <Register name={'signup'}/> }/>
        <Route path='/profile' element={ <Profile name={'profile'} handleSignOut={handleSignOut}/> }/>
        <Route path='/movies' element={ <Movies cards={cards}/> }/>
        <Route path='/saved-movies' element={ <SavedMovies/> }/>          
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App;