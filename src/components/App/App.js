import React, { useState, useEffect } from "react";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [saveMovies,setSaveMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

   // вход в профиль
  function handleLogin(email, password) {
    setLoading(true)
    mainApi.authorize(email, password)
      .then((res) =>{
        localStorage.setItem("jwt", res.token)
        setIsLoggedIn(true)
        navigate('/movies')
      })
      .catch((error) => {
        console.error(`Ошибка входа ${error}`)
        setIsError(true)
      })
      .finally(() => setLoading(false))
  }

// регистрация пользователя
  function handleRegister(name, email, password) {
    setLoading(true)
    mainApi.register(name, email, password)
      .then(() =>{
        handleLogin(email, password);
      })
      .catch((error) => { 
        console.error(`Ошибка регистрации ${error}`)
        setIsError(true)
      })
      .finally(() => setLoading(false))
  }

  //редактирование профиля
  function handleUpdateUser(name, email) {
    setLoading(true)
    mainApi.setInfo(name, email, localStorage.jwt)
      .then(res => {
        setCurrentUser(res)
        setIsSuccess(true)
        setIsEditing(false)
      })
      .catch((error) => {
        console.error(`Ошибка редактирования профиля ${error}`);
        setIsError(true)
        setLoading(false)
      })
      .finally(() => setLoading(false))
  } 

  // получение данных профиля
  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getInfo(localStorage.jwt), mainApi.getCards(localStorage.jwt)])
        .then(([user, cards]) => {
          setCurrentUser(user)
          setSaveMovies(cards.reverse())
          setIsCheck(false)
          setIsLoggedIn(true)
          if (
            location.pathname === "/signin" ||
            location.pathname === "/signup"
          ) {
            navigate("/movies");
          }
        })
        .catch((error) => {
          console.error(`Ошибка загрузки данных ${error}`)
          setIsCheck(false)
          setIsLoggedIn(false)
          localStorage.clear()
        })
    } else {
        setIsCheck(false)
        setIsLoggedIn(false)
        localStorage.clear()
    }
  }, [isLoggedIn, location.pathname, navigate])

  // проверка токена
  useEffect(() => { 
    if (localStorage.jwt) { 
      mainApi.checkToken(localStorage.jwt) 
        .then((res) => { 
          setIsLoggedIn(true);
        }) 
        .catch((error) => { 
          console.error(`Ошибка последующего входа ${error}`); 
        }) 
    } else { 
      setIsLoggedIn(false); 
    }   
  }, [])

  //удаление из сохраненных
   function handleDelete(cardId) {
    mainApi.deleteCard(cardId, localStorage.jwt)
      .then(() => {
        setSaveMovies(saveMovies.filter(item => item._id !== cardId ));
      })
      .catch((error) => console.error(`Ошибка удаления фильма ${error}`))
  } 

  //добавление в сохраненные
  function handleCardLike(card) {
    const isLiked = saveMovies.some(item => card.id === item.movieId);
    const isLikedMovie = saveMovies.filter(item => {
      return item.movieId === card.id
    })
    if(isLiked) {
      handleDelete(isLikedMovie[0]._id)
    } else{
      mainApi.setCard(card, localStorage.jwt)
      .then((res) => {
        setSaveMovies([res, ...saveMovies])
      })
      .catch((error) => console.error(`Ошибка лайка ${error}`))
    }
  } 
  //меню
  function handleOpenMenu() {
    setIsMenuOpen(true);
  };

  function handleCloseMenu() {
    setIsMenuOpen(false);
  };

  //выход из аккаунта
  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  }

  return(
    <div className="page__container">
      {isCheck ? <Preloader/> :
        <CurrentUserContext.Provider value={currentUser}>
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
            <Route path='/signin' element={ 
              <Login 
                name={'signin'} 
                handleLogin={handleLogin}
                isLoading={isLoading}  
                setIsError={setIsError}
                isError={isError}/> 
            }/>
            <Route path='/signup' element={ 
              <Register 
                name={'signup'} 
                handleRegister={handleRegister} 
                isLoading={isLoading} 
                setIsError={setIsError}
                isError={isError}/> 
            }/>
            <Route path="/profile" element={<ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              name={'profile'}
              handleSignOut={handleSignOut}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              isLoading={isLoading}
              setIsError={setIsError}
              isError={isError}
              handleUpdateUser={handleUpdateUser}
              isSuccess={isSuccess}
            />} />
            <Route path="/movies" element={<ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              setIsError={setIsError}
              saveMovies={saveMovies}
              addCard={handleCardLike}/>}
            />
            <Route path="/saved-movies" element={<ProtectedRoute
              element={SavedMovies} 
              isLoggedIn={isLoggedIn}
              setIsError={setIsError}
              isError={isError}
              saveMovies={saveMovies}
              onDelete={handleDelete}/>}
            />          
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <NavMenu isMenuOpen={isMenuOpen} onClose={handleCloseMenu}/>
        </CurrentUserContext.Provider>
      }
    </div>
  )
}
export default App;