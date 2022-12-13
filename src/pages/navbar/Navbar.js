import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../Context/FirebaseContext";


const Navbar = () => {
  const {user,logOut} = useContext(authProvider);
  const handleLogout = ()=>{
    logOut()
    .then(()=>{
    }).catch(err => console.log(err.message))
  }
    const menuItem = <>
        <li className="text-white"><Link to='/'>Home</Link></li>
        <li className="text-white"><Link to='/about'>About us</Link></li>
        <li className="text-white"><Link to='/appointment'>Appointment</Link></li>
        <li className="text-white"><Link to='/reviews'>Reviews</Link></li>
        <li className="text-white"><Link to='/contact'>Contact us</Link></li>
        {
          user?.uid ? <li onClick={handleLogout} className="text-white"><Link to='/'>Logout</Link></li> : <li className="text-white"><Link to='/login'>Login</Link></li>
        }
    </>
        
    
  return (
    <div className="bg-[#293462] py-4">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#293462]"
            >
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Doctors portal</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
