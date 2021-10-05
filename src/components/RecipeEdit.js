import RecipeIngridientEdit from "./RecipeIngridientEdit";
import { useContext } from "react";
import { RecipeContext } from "./App";

export default function RecipeEdit({selectedRecipe}) {
    const { handleRecipeChange } = useContext(RecipeContext)
    
    function handleChange(changes) {
        handleRecipeChange(selectedRecipe.id,  {...selectedRecipe, ...changes })
    }

    function handleIngridientChange(id, ingridient) {
        const newIngridients = [...selectedRecipe.ingridients];
        const index = newIngridients.findIndex(i => i.id === id);
        newIngridients[index] = ingridient;
        handleChange({ingridients: newIngridients})
    }

    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__remove-button-container'>
                <button className='btn recipe-edit__remove-button'>&times;</button>
            </div>
            <div className='recipe-edit__details-grid'>
                <label 
                    htmlFor='name' 
                    className='recipe-edit__label'>
                    Name
                </label>
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    className='recipe-edit__input'
                    value={selectedRecipe.name}
                    onInput={e => handleChange({name : e.target.value})}
                    />
                <label 
                    htmlFor='cookTime'
                    className='recipe-edit__label'>
                    Cook Time
                </label>
                <input 
                    type='text' 
                    name='cookTime' 
                    id='cookTime' 
                    className='recipe-edit__input'
                    value={selectedRecipe.cookTime}
                    onInput={e => handleChange({cookTime : e.target.value})}
                    />
                <label 
                    htmlFor='servings'
                    className='recipe-edit__label'>
                    Servings
                </label>
                <input 
                    type='number' 
                    min='1' 
                    name='servings' 
                    id='servings' 
                    className='recipe-edit__input'
                    value={selectedRecipe.servings }
                    onInput={e => handleChange({servings : parseInt(e.target.value) || ''})}
                    />
                <label 
                    htmlFor='instructions'
                    className='recipe-edit__label'>
                    Instructions
                </label>
                <textarea 
                    type='text' 
                    name='instructions' 
                    id='instructions' 
                    className='recipe-edit__input'
                    value={selectedRecipe.instructions}
                    onInput={e => handleChange({instructions : e.target.value})}
                />
            </div>
            <br />
            <label className='recipe-edit__label'>ingridients</label>
            <div className='recipe-edit__ingridient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>     
                {selectedRecipe.ingridients.map(ingridient => <RecipeIngridientEdit key={ingridient.id} ingridient={ingridient && ingridient} handleIngridientChange={handleIngridientChange}/>)}
            </div>
            <div className='recipe-edit__add-ingridient-btn-container'>
                <button className='btn btn--primary'>Add ingridient</button>
            </div>
        </div>
    )
}
