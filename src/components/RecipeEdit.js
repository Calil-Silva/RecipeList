import RecipeIngridientEdit from "./RecipeIngridientEdit";
import { useContext } from "react";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({selectedRecipe}) {
    const { handleRecipeChange, handleRecipeSelected } = useContext(RecipeContext)
    
    function handleChange(changes) {
        handleRecipeChange(selectedRecipe.id,  {...selectedRecipe, ...changes })
    }

    function handleIngridientChange(id, ingridient) {
        const newIngridients = [...selectedRecipe.ingridients];
        const index = newIngridients.findIndex(i => i.id === id);
        newIngridients[index] = ingridient;
        handleChange({ingridients: newIngridients})
    }

    function handleIngridientAdd() {
        const newIngridient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ ingridients: [...selectedRecipe.ingridients, newIngridient]})
    }

    function handleIngridientDelete(id) {
        handleChange({ingridients: selectedRecipe.ingridients.filter(i => i.id !== id)})
    }

    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__remove-button-container'>
                <button 
                    className='btn recipe-edit__remove-button'
                    onClick={() => handleRecipeSelected(undefined)}
                >    
                &times;</button>
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
                    onChange={e => handleChange({name : e.target.value})}
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
                    onChange={e => handleChange({cookTime : e.target.value})}
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
                    onChange={e => handleChange({servings : parseInt(e.target.value) || ''})}
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
                    onChange={e => handleChange({instructions : e.target.value})}
                />
            </div>
            <br />
            <label className='recipe-edit__label'>ingridients</label>
            <div className='recipe-edit__ingridient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>     
                {selectedRecipe.ingridients.map(ingridient => <RecipeIngridientEdit key={ingridient.id} ingridient={ingridient && ingridient} handleIngridientChange={handleIngridientChange} handleIngridientDelete={handleIngridientDelete}/>)}
            </div>
            <div className='recipe-edit__add-ingridient-btn-container'>
                <button 
                    className='btn btn--primary'
                    onClick={() => handleIngridientAdd()}
                >
                    Add ingridient
                </button>
            </div>
        </div>
    )
}
