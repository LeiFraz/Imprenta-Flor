import './App.css'
import { Slider } from '@chakra-ui/react'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Catalogo from './pages/catalogo/Catalogo'
function App() {

  return (
    <>
      <Header/>
      <Catalogo/>
      <Footer />
    </>
  )
}

export default App