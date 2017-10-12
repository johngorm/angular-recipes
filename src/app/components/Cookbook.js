class CookbookController {
    // @ng-inject
    constructor(){

    }
}

export const Cookbook = {
    template: require('./Cookbook.html'),
    controller: CookbookController,
    binding:{
        recipe: '='
    }
}