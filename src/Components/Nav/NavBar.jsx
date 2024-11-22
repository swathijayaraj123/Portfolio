import { Outlet, Link } from "react-router-dom";
const NavBar = ()=>{
    <>
        <nav>
               
               <Link to='/'>Home</Link>
                <Link to="/counter">Counter</Link>
          
        </nav>
    </>
}

export default NavBar