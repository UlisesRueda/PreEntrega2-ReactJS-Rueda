import './App.css';
import NavBar from './componets/Navbar';
import ItemListContainer from './componets/itemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='Agrega al carrito y compra :)' />
    </>
  );
}

export default App;
