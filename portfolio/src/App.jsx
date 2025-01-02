import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Perfil from './components/Perfil';
import Contacto from './components/contacto';
import Proyectos from './components/proyectos';
import Habilidades from './components/habilidades';
import Footer from './components/footer';
import FixedButtons from './components/fixed-buttons.jsx';
import Estudios from './components/estudios.jsx';
function App() {

  return (
    <div className='body'>

      
        
        
        <BrowserRouter basename='/Portfolio'>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Perfil />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>
          <Route path='/Habilidades' element={<Habilidades />}></Route>
          <Route path='/Proyectos' element={<Proyectos />}></Route>
          <Route path='/Estudios' element={<Estudios/>}></Route>
          <Route path='*' element={<Perfil />}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>
        <FixedButtons />
      
      
    </div>
  )
}

export default App
