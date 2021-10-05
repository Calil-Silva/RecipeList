export default function RecipeIngridientEdit({ingridient, handleIngridientChange}) {

    function handleChange(changes) {
        handleIngridientChange(ingridient.id, {...ingridient, ...changes})
    }

    return (
        <>
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.name}
            onInput={e => handleChange({name: e.target.value})}
         /> 
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.amount}
            onInput={e => handleChange({amount: e.target.value})}
         /> 
         <button className='btn btn--danger'>&times;</button>
        </>
    )
}
