export class RecipeService {
  getAllRecipes() {
    return [
      {
        id: 0,
        name: 'TEST RECIPE',
        ingredients: ['Test1', 'Test2', 'Test3'],
        directions: 'foobar',
        rating: 5
      },
      {
        id: 1,
        name: 'TEST RECIPE 2',
        ingredients: ['Test4', 'Test5', 'Test6'],
        directions: 'bizfar',
        rating: 3
      }
    ];
  }

  getRecipe(ReqId) {
    const recipes = [
      {
        id: 0,
        name: 'TEST RECIPE',
        ingredients: ['Test1', 'Test2', 'Test3'],
        directions: 'foobar',
        rating: 5
      },
      {
        id: 1,
        name: 'TEST RECIPE 2',
        ingredients: ['Test4', 'Test5', 'Test6'],
        directions: 'bizfar',
        rating: 3
      }
    ];
    for (let ii = 0; ii < recipes.length; ii++) {
      if (recipes[ii].id === ReqId) {
        return recipes[ii];
      }
    }
    return null;
  }
}
