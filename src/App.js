import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Modal from './components/Modal/Modal';



function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
     
    <div className="container" style={styleApp} >

      <Router>
        <NavBar/>
      </Router>
      
      <div className= 'main-container'>
        <ItemListContainer section="LOL"/>
        <ItemListContainer section="CsGo"/>
        <ItemListContainer section="Valorant"/>
      </div>
      <Modal title="MODAL DE REGISTRO">
        <form>
          <input type="text"/>
          <button>Enviar</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
