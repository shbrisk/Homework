/*global $*/
(function () {
    $.ajax({
        url: 'recipes.json',
        dataType: 'json',
        success: function (recipes) {
            let select = $('#recipe-select');
            $.each(recipes, function (index, recipe) {
                select.append($('<option>', {
                    value: recipe.id,
                    text: recipe.name
                }));
            });

            select.on('change', function () {
                let selectedRecipeId = $(this).val();
                if (selectedRecipeId) {
                    $.ajax({
                        url: 'recipe_details.json',
                        dataType: 'json',
                        success: function (recipeDetails) {
                            let selectedRecipe = recipeDetails[selectedRecipeId];
                            if (selectedRecipe) {
                                $('#recipe-name').text(selectedRecipe.name);
                                let ingredientsList = $('#recipe-ingredients');
                                ingredientsList.empty();
                                $.each(selectedRecipe.ingredients, function (index, ingredient) {
                                    ingredientsList.append('<li>' + ingredient + '</li>');
                                });
                                $('#recipe-image').attr('src', selectedRecipe.image);
                                $('#recipe-details').removeClass('d-none');
                            }
                        }
                    });
                }
            });
        }
    });
})();