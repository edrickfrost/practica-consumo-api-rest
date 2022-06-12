const $ = (id) => document.querySelector(id);
// Sections
const headerSection = $('#header');
const trendingPreviewSection = $('#trendingPreview');
const categoriesPreviewSection = $('#categoriesPreview');
const genericSection = $('#genericList');
const movieDetailSection = $('#movieDetail');

// List & Containers
const searchForm = $('#searchForm');
const trendingMoviesPreviewList = $('#trendingPreview-movieList');
const categoriesPreviewList = $('#categoriesPreview-list');
const movieDetailCategoriesList = $('#movieDetail .categories-list');
const relatedMoviesContainer = $('.relatedMovies-scrollContainer');

// Elements
const searchFormInput = $('#seachForm input');
const searchFormBtn = $('#searchBtn');
const trendingBtn = $('.trendingPreview-btn');
const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');
