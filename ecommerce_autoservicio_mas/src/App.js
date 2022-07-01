import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatalogoProductos from './components/CatalogoProductos';
import AgregarProducto from './components/AgregarProducto';
import EditarProductos from './components/EditarProductos';
import BarraNavegacion from './components/BarraNavegacion';


function App() {
  return (
    <center className="App">
      
      <BarraNavegacion/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CatalogoProductos/>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProducto/>} exact></Route>
          <Route path='/editarproducto/:idproducto' element={<EditarProductos/>} exact></Route>
        </Routes>
      </BrowserRouter>

    </center>
  );
}

export default App;