import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Modal from './components/Modal/Modal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';



function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
    
    <BrowserRouter>
    <div className="container" style={styleApp} >
      <NavBar/>
      <Routes>
        <Route path='/'/>
        <Route path="*" element={<h1>ERROR 404</h1>}/>
      </Routes>
      <div className= 'main-container'>
        <ItemDetail/>
      </div>
      <Modal title="MODAL DE REGISTRO">
        <form>
          <input type="text"/>
          <button>Enviar</button>
        </form>
      </Modal>
    </div>
    </BrowserRouter>
  );
}

export default App;
