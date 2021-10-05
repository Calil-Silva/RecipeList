import RecipeIngridientEdit from "./RecipeIngridientEdit";

export default function RecipeEdit() {
    return (
        <div className='recipe-edit'>
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />
                <label htmlFor='cookTime'>Cook Time</label>
                <input type='text' name='cookTime' id='cookTime' />
                <label htmlFor='servings'>Servings</label>
                <input type='number' min='1' name='servings' id='servings' />
                <label htmlFor='instructions'>Instructions</label>
                <textarea type='text' name='instructions' id='instructions' />
            </div>
            <br />
            <label>ingridients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngridientEdit />
                <RecipeIngridientEdit />
            </div>
            <div>
                <button>Add ingridient</button>
            </div>
        </div>
    )
}
