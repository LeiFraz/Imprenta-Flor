import './MediosPagosCard.css'

function MediosPagosCard( {mediopago="", imagen="", texto="", icono=""})
{
    return(
        <div>
            <div className="centrarPagos">
                {imagen != "" ? (
                    <img src={imagen}></img>
                ):(
                    <img src={icono}></img>
                )}
                <h2>{mediopago}</h2>
            </div>
            <p>{texto}</p>
        </div>
    )
}

export default MediosPagosCard;