import angular from 'angular';
import {hello} from './app/hello';
import 'angular-ui-router';
import 'angular-smart-table';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'smart-table'])
  .config(routesConfig)
  .component('app', hello)
  .service('RecipeService', $http => {
    const service = {
      getAllRecipes: () => {
        return $http.get('temp/data/recipes.json', {cache: true})
              .then(res => {
                return res;
              });
      }

        // getRecipe : (id) =>{
        //     // This will perform a GET on the express servers "api/recipe/:id" route
        // }
    };
    return service;
  });
