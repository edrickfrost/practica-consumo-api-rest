// Creacion de instancia Axios
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});
// funcion para las peliculas en tendencia
async function getTrendingMoviesPreview() {

    const {data} = await api('trending/movie/day');

    // const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    // const data = await res.json();

    const movies = data.results;
    //console.log({data, movies})

    trendingMoviesPreviewList.innerHTML = "";

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}

// funcion para las categorias
async function getCategoriesPreview() {

    const {data} = await api('genre/movie/list')

    // const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    // const data = await res.json();

    const categories = data.genres;

    categoriesPreviewList.innerHTML = "";

    categories.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`
        })
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
}

async function getMoviesByCategory(id) {

    const {data} = await api('discover/movie', {
        params: {
            with_genres: id
        }
    });

    const movies = data.results;

    genericSection.innerHTML = "";

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        genericSection.appendChild(movieContainer);
    });
}