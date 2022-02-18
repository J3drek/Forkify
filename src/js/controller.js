import * as model from './model';
import render from 'dom-serializer';
import 'core-js/stable';
import { getJSON } from './helper';
import searchView from './views/searchView';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView';
import recipeView from './views/recipeView.js';
import View from './views/View';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';
import { MODEL_CLOSE_SECS } from './config';
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

if (module.hot) {
  module.hot.accept();
}

//Showing recipe
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    //Spinner
    recipeView.renderSpiner();
    resultsView.update(model.getSearchResultPage());
    //1 Loading recipe
    await model.loadRecipe(id);

    //2 rendering recipe
    recipeView.render(model.state.recipe);
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

//Showing recipes with searched ingridient
const controlSearchResults = async function () {
  try {
    //Spinner as before
    resultsView.renderSpiner();

    //Get recipes from API
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResulst(query);

    //Render recipes
    resultsView.render(model.getSearchResultPage());

    //Render pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlServing = function (newServings) {
  model.updateServigs(newServings);
  recipeView.update(model.state.recipe);
};

function controlPagination(goto) {
  resultsView.render(model.getSearchResultPage(goto));
  paginationView.render(model.state.search);
}

const controlAdBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpiner();
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);
    window.history.pushState(null, '',`#${model.state.recipe.id}`);
      setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SECS * 1000);
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err.message);
  }
};

//Initializing event listeners and adding handler functions(along with publisher-subscriber pattern's principles)
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerAddBookmark(controlAdBookmark);
  recipeView.addHandlerUpdateServings(controlServing);
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
