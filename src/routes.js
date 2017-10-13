export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/recipes');

  $stateProvider
    .state('cookbook', {
      url: '/recipes',
      component: 'cookbookComponent'
    })
    .state('recipe', {
      url: '/recipes/{ID}',
      component: 'recipeComponent'
    });
}
