import './App.css'
import {Slider} from '@chakra-ui/react'
function Boton1 (){
return (

        <Slider.Root width="200px" defaultValue={[40]}>
          <Slider.Control>
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>

)

}
export default Boton1