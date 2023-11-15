import './App.css';
import Cart from './componets/Cart';
import ItemDetailContainer from './componets/ItemDetailContainer';
import NavBar from './componets/Navbar';
import ItemListContainer from './componets/itemListContainer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoriaID' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
