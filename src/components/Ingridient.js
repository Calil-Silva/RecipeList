export default function Ingridient(props) {
    const {
        name,
        amount
    } = props;
    return (
        <>
            <div>{name}: </div>
            <div>{amount}</div>
        </>
    )
}
