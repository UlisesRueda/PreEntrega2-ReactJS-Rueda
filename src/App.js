import './App.css';
import Cart from './componets/Cart';
import ItemDetailContainer from './componets/ItemDetailContainer';
import NavBar from './componets/Navbar';
import ItemListContainer from './componets/itemListContainer';
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import CartProvider from './componets/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='items/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
      
    </>
  );
}

export default App;
