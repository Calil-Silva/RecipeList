export default function RecipeIngridientEdit({ingridient, handleIngridientChange, handleIngridientDelete}) {

    function handleChange(changes) {
        handleIngridientChange(ingridient.id, {...ingridient, ...changes})
    }

    return (
        <>
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.name}
            onChange={e => handleChange({name: e.target.value})}
         /> 
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.amount}
            onChange={e => handleChange({amount: e.target.value})}
         /> 
         <button 
            className='btn btn--danger'
            onClick={() => handleIngridientDelete(ingridient.id)}
        >
            &times;
        </button>
        </>
    )
}
