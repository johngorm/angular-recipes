export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      name: 'home',
      url: '/',
      component: 'app'
    })
    .state('cookbook', {
      name: 'cookbook',
      url: '/recipe/',
      template: require('./app/cookbook.html')
      // resolve: {
      //   cookbook: RecipeService => {
      //     return RecipeService.getAllRecipes();
      //   }
      // }
    })
    .state('recipe', {
      url: '/recipe/{recipeId}',
      component: 'recipe'
      // resolve: {
      //   recipe: (RecipeService, $transition$) => {
      //     return RecipeService.getRecipe($transition$.params().recipeId);
      //   }
      // }
    });
}
