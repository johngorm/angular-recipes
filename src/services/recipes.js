angular.module('app').service('RecipeService', function($http){
    let service = {
        getAllRecipes :() => {
           return $http.get('temp/data/recipes.json', {cache: true})
                .then( (res) => {
                    return res;
                }) 
        }

        // getRecipe : (id) =>{
        //     // This will perform a GET on the express servers "api/recipe/:id" route
        // }
    };
    return service;
})