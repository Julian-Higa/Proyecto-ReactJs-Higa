import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';

function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
     
    <div className="App">

      <Router>
        <NavBar/>
      </Router>
      
      <div className= 'main-container'>
        <h1>Productos</h1>
        <div className='list-products'>
          <ItemProduct title= "Hierro" price={1500} image={'IronEmblem2022.png'}/>
          <ItemProduct title= "Bronce" price={2000} image={'BronzeEmblem2022.png'}/>
          <ItemProduct title= "Plata" price={3500} image={'SilverEmblem2022.png'}/>
          <ItemProduct title= "Oro" price={4500} image={'GoldEmblem2022.png'}/>
          <ItemProduct title= "Platino" price={5500} image={'PlatinumEmblem2022.png'}/>
          <ItemProduct title= "Diamante" price={7000} image={'DiamondEmblem2022.png'}/>
          <ItemProduct title= "Master" price={8500} image={'MasterEmblem2022.png'}/>
          <ItemProduct title= "Grand Master" price= {10000} image={'GrandMasterEmblem2022.png'}/>
          <ItemProduct title= "Challenger" price= {12000} image={'ChallengerEmblem2022.png'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
