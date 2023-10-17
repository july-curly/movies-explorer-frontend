class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkRes(res){
    if (res.ok) {
      return res.json();
      }
    else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }  

  setInfo(name, email, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(this._checkRes);
  }

  getCards(token) {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
     },
     })
     .then(this._checkRes);
  }

  setCard(data, token) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        movieId: data.id,
      }),
    })
    .then(this._checkRes);
  }

  deleteCard(cardId, token) {
    return fetch (`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkRes);
  }

  register (name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(this._checkRes);
  }

  authorize (email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    })
    .then(this._checkRes);
  }

  checkToken (token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}` },
    })
    .then(this._checkRes);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.july-diplom.nomoredomainsicu.ru',
//baseUrl: 'http://localhost:3000',
});

 