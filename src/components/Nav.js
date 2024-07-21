import { Link } from 'react-router-dom';

function Nav() {
     return (
          <nav className="nav">
               <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to ="/about">ABOUT</Link></li>
                    <li><a>MENU</a></li>
                    <li><Link to = "/reservation">RESERVATION</Link></li>
                    <li><a>ORDER ONLINE</a></li>
                    <li><a>LOGIN</a></li>
               </ul>
          </nav>
     )
}

export default Nav;