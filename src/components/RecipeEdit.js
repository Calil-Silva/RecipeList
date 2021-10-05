import RecipeIngridientEdit from "./RecipeIngridientEdit";

export default function RecipeEdit({selectedRecipe}) {
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
                />
            </div>
            <br />
            <label className='recipe-edit__label'>ingridients</label>
            <div className='recipe-edit__ingridient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>     
                {selectedRecipe.ingridients.map(ingridient => <RecipeIngridientEdit key={ingridient.id} ingridient={ingridient && ingridient}/>)}
            </div>
            <div className='recipe-edit__add-ingridient-btn-container'>
                <button className='btn btn--primary'>Add ingridient</button>
            </div>
        </div>
    )
}
