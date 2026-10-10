
const ButtonVerMas = ({idItem}) => {

    const verAlgo = () =>{
        console.log(idItem);
    }

    return (
        <>
            <button onClick={()=>verAlgo()}>
                vermas
            </button>
        </>
    )
}

export default ButtonVerMas