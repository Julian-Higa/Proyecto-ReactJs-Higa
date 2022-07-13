import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';


function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
     
    <div className="App">

      <Router>
        <NavBar/>
      </Router>
      

    </div>
  );
}

export default App;
