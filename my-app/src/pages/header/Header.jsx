import './header.css'
import Button from '@/components/buttons/Button'

function Header() {

    return(
        <div className='container'>
            <div className='content-header'>
                <h1>Dale un toque único a tu estilo</h1>
                <p>Productos exclusivos en stock y diseños personalizados a medida. <br></br>Calidad premium garantizada.</p>
                <div className='botones'>
                    <Button texto='Ver Catálogo' color='celeste'/>
                    <Button texto='Personalizado' color='blanco'/>
                </div>
            </div>
        </div>
    );
}

export default Header;