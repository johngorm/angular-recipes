export class RecipeService {

  getAllRecipes() {
    return {
      name: 'TEST RECIPE',
      ingredients: ['Test1', 'Test2', 'Test3'],
      directions: 'foobar',
      rating: 5
    };
  }

}
