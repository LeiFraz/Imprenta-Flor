import './MediosPagos.css'
import MediosPagosCard from '../../components/mediosPagosCard/MediosPagosCard.jsx'
import cuotas from '/imagenes/mediosPagos/cuotas.png'
import box from '/imagenes/mediosPagos/box.png'
import arrow from '/imagenes/mediosPagos/arrow.png'

//Los medios de pago podrían venir de la base de datos a no ser que sean fijos
function MediosPagos() 
{
    return (
        <div className='mediosPagos'>
            <div className='centrar'>
                <h2>NUESTROS MEDIOS DE PAGO</h2>
            </div>
            <div className='centrarFila'>
                <MediosPagosCard imagen={cuotas} texto='Hasta 3 cuotas'/>
                <MediosPagosCard mediopago='Transferencia' icono={arrow} texto='10% Descuento'/>
                <MediosPagosCard mediopago='Efectivo' icono={box} texto='Retiro en local'/>
            </div>
        </div>
    )
}

export default MediosPagos;