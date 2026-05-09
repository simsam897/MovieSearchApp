//most popular movies api
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

let searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="; //search movies

//initial call
const movieBox = document.querySelector("#movie-box");
const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  // console.log(data);
  showMovies(data.results);
};

const showMovies = (data) => {
  movieBox.innerHTML = "";
  // console.log(data);
  data.forEach((item) => {
    // console.log(item);
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<div class="box">
          <img src="${IMGPATH + item.poster_path}"/>
          <div class="overlay">
            <div class="title">
              <h2>${item.original_title}</h2>
              <span>${item.vote_average}</span>
            </div>
            <h5>overview</h5>
            <p>
             ${item.overview}
            </p>
          </div>
        </div>`;
    movieBox.appendChild(box);
  });
};

document.querySelector("#search").addEventListener("keyup", (event) => {
  if (event.target.value != "") {
    getMovies(searchAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});

getMovies(APIURL);
