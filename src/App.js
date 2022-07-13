import './App.scss';
import NavBar from './components/NavBar/NavBar';


function App() {
  const styleApp ={ padding: '10px 20px', marginTop: 10}

  return (
    //JSX
     
    <div className="container" style={styleApp}>
      <NavBar/>
    </div>
  );
}

export default App;
