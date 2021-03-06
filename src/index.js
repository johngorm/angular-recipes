import angular from 'angular';
import {RecipeService} from './app/services/recipes';
import {Cookbook} from './app/components/Cookbook';
// import {Recipe} from './app/components/Recipe';
import {Recipe} from './app/components/Recipe';
import 'angular-ui-router';
import 'angular-smart-table';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', 'smart-table'])
  .config(routesConfig)
  .filter('arrToString', () => {
    return arr => {
      return arr.join(',');
    };
  })
  .service('recipeService', RecipeService)
  .component('recipeComponent', Recipe)
  // .component('app', App)
  // .component('headerComponent', Header)
  // .component('footerComponent', Footer)
  // .component('mainSection', MainSection)
  // .component('todoTextInput', TodoTextInput)
  // .component('todoItem', TodoItem)
  // .component('recipeComponent', Recipe)
  .component('cookbookComponent', Cookbook);
