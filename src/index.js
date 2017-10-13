import angular from 'angular';
import 'todomvc-app-css/index.css';

// import {TodoService} from './app/todos/todos';
// import {App} from './app/containers/App';
// import {Header} from './app/components/Header';
// import {MainSection} from './app/components/MainSection';
// import {TodoTextInput} from './app/components/TodoTextInput';
// import {TodoItem} from './app/components/TodoItem';
// import {Footer} from './app/components/Footer';
import {Cookbook} from './app/components/Cookbook';
import {RecipeService} from './app/services/recipes';
import 'angular-ui-router';
import 'angular-smart-table';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'smart-table'])
  .config(routesConfig)
  .service('recipeService', RecipeService)
  // .component('app', App)
  // .component('headerComponent', Header)
  // .component('footerComponent', Footer)
  // .component('mainSection', MainSection)
  // .component('todoTextInput', TodoTextInput)
  // .component('todoItem', TodoItem)
  .component('cookbookComponent', Cookbook);
