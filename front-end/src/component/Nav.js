import React, { useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                {/* <li><Link to="/logout">Logout</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                

                {
                    auth ?<li><Link to='/logout'>Logout</Link></li>
                    :<>
                     <li className="nav-right"><Link to="signup">Signup</Link></li>
                     <li><Link  className="nav-right" to="/login">Login</Link></li>
                    </>
                }

            </ul>
        </div>
    )
}

export default Nav;