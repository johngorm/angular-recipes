class CookbookController {
  // @ng-inject
  constructor(recipeService, $window, $timeout) {
    this.$timeout = $timeout;
    this.$window = $window;
    this.recipeService = recipeService;
    this.recipeCollection = [];
    this.recipeCollection.push(this.recipeService.getAllRecipes());
  }

}

export const Cookbook = {
  template: require('./Cookbook.html'),
  controller: CookbookController,
  binding: {
    recipeCollection: '<'
  }
};
