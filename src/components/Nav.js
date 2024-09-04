import { Link } from 'react-router-dom';

function Nav() {
     return (
     <>
          <div className="navbar bg-base-100 w-2/5">
               <div className="navbar-start">
                    <div className="dropdown dropdown-end">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                         </svg>
                         </div>
                         <ul
                         tabIndex={0}
                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              <li class="font-bold"><Link to="/">Home</Link></li>
                              <li class="font-bold"><Link to ="/about">About</Link></li>
                              <li class="font-bold">Menu</li>
                              <li class="font-bold"><Link to = "/reservation">Reservation</Link></li>
                              <li class="font-bold">Order online</li>
                         </ul>
                    </div>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         <li></li>
                         <li class="font-bold"><Link to="/">Home</Link></li>
                         <li class="font-bold"><Link to ="/about">About</Link></li>
                         <li class="font-bold"><Link to="/">Menu</Link></li>
                         <li class="font-bold"><Link to = "/reservation">Reservation</Link></li>
                         <li class="font-bold"><Link to ="/">Order Online</Link></li>
                    </ul>
               </div>
          </div>
</>
               
     )
}

export default Nav;

/* old navigation 
<nav className="nav">
               <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to ="/about">ABOUT</Link></li>
                    <li><a>MENU</a></li>
                    <li><Link to = "/reservation">RESERVATION</Link></li>
                    <li><a>ORDER ONLINE</a></li>
                    <li><a>LOGIN</a></li>
               </ul>
               </nav> */