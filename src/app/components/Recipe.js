class RecipeController {
  // @ng-inject
  constructor(recipeService, $stateParams, $window) {
    this.$window = $window;
    this.recipeService = recipeService;
    this.id = $stateParams.ID;
    this.recipe = this.recipeService.getRecipe(parseInt(this.id, 10));
    this.editMode = false;
  }

  handleEditClick() {
    if (this.editMode === false) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }
}

export const Recipe = {
  template: require('./Recipe.html'),
  controller: RecipeController,
  binding: {
    id: '='
  }
};
