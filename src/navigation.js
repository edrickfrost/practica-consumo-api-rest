window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({ location });

    if (location.hash.startsWith('#trends')){
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailPage();
    } else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
    location.hash;
}
// funciones para cada caso de location
function homePage(){
    console.log("HOME!!")
    getTrendingMoviesPreview();
    getCategoriesPreview();
}
function searchPage(){
    console.log("SEARCH!!")
}
function movieDetailPage(){
    console.log("MOVIE!!")
}
function categoriesPage(){
    console.log("CATEGORIES!!")
}
function trendsPage(){
    console.log("TRENDS!!")
}
