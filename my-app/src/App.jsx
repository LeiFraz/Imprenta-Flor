import './App.css'
import { Slider } from '@chakra-ui/react'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Catalogo from './pages/catalogo/Catalogo'
import MediosPagos from './pages/mediosPagos/mediosPagos'
function App() {

  return (
    <>
      <Header/>
      <Catalogo/>
      <MediosPagos/>
      <Footer />
    </>
  )
}

export default App