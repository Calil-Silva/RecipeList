import Ingridient from "./Ingridient"

export default function IngridientList( { ingridients } ) {
    const ingridientElements = ingridients.map(ingridient => <Ingridient key={ingridient.id} {...ingridient}/>)
    return (
        <div className='ingridient--grid'>
            {ingridientElements}
        </div>
    )
}