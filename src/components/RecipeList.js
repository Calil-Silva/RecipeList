import Recipe from "./Recipe";
import { RecipeContext } from "./App";
import { useContext } from "react";

export default function RecipeList(props) {
    const { handleRecipeAdd } = useContext(RecipeContext);
    const {
        recipes
    } = props;
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => <Recipe key={recipe.id} {...recipe}/>)}
            <div className='recipe-list__add-recipe-btn-container'>
            <button className='btn btn--primary' onClick={handleRecipeAdd}>Add Recipe</button>
            </div>
        </div>
    )
}
