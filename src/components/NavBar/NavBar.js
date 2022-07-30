import './NavBar.scss'
import { Link } from 'react-router-dom'
import CartWidgets from '../CartWidgets/CartWidgets'
//import CartWidgets from './components/CartWidgets/CartWidgets';


const NavBar = () => {
    return( 
        <div className='navbar-primary'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src='/assets/Social/logotipo_png.png' width= '50'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''>Lol</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''>CsGo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''>Valorant</Link>
                            </li>
                            <CartWidgets/>
                        </ul>
                        
                        <span className="navbar-text">
                        Proyecto Final ReactJs Julian Higa
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
