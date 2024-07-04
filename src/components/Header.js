import Nav from "./Nav";


function Header() {
     const headerStyle = {
          display: 'flex',
          justifyContent: 'center'
     }
     return (
          <header
               style={headerStyle}
               className="header">
               <img src="logo.png"></img>
               <Nav></Nav>
          </header>
     )
}
export default Header;