class RecipeController {
  // @ng-inject
  constructor(recipeService, $stateParams, $timeout, $window) {
    this.$timeout = $timeout;
    this.$window = $window;
    this.recipeService = recipeService;
    this.id = $stateParams.ID;
    this.recipe = this.recipeService.getRecipe(this.id);
  }
}

export const Recipe = {
  template: require('./Recipe.html'),
  controller: 'RecipeController',
  binding: {
    id: '<'
  }
};
