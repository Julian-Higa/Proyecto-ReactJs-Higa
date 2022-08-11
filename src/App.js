import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
    
    <CartProvider>
    <BrowserRouter>
    <div className="container" style={styleApp} >
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/products/:category' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Checkout />}/>
        <Route path="*" element={<h1>ERROR 404</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
