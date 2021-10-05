export default function RecipeIngridientEdit({ingridient}) {
    console.log(ingridient)
    return (
        <>
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.name}
         /> 
         <input 
            className='recipe-edit__input' 
            type='text'
            value={ingridient && ingridient.amount}
         /> 
         <button className='btn btn--danger'>&times;</button>
        </>
    )
}
