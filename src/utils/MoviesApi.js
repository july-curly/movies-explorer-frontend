class MoviesApi {
  constructor(options) {
    this._url = options.url;
  } 

  _checkRes(res) {
    if (res.ok) {
      return res.json();
      }
    else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  getMovies() {
      return fetch(`${this._url}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }).then(this._checkRes);
    }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;