// UpperCamelCase
import './NavBar.scss'

const NavBar = () => {
    return( 
        <div className='navbar-primary'>
            <h1>Elo Boost</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Contratación</button></li>
                <li><button>Sobre Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavBar