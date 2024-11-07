import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authslice";

const Navbar = () => {
    const {user} = useSelector((state) => state.auth);


    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOutUser());
    };
     

    return (
        <nav className="navbar bg-light shadow">
           <div className="container-fluid">
              <Link to="/"><span className="navbar-brand mb-0 h1">Crypto App</span></Link>
              <span>
                {!user ? (
                        <>
                            <Link to={"/login"} className="btn btn-success rounded-0 btn-sm">Login</Link>
                            <Link to={"/register"} className="btn btn-success rounded-0 btn-sm mx-2">Register</Link>
                        </>
                    ) : (
                        <button onClick={handleLogOut} className="btn btn-danger rounded-0 btn-sm">Logout</button>
                    )}
                 
              </span>
           </div>
        </nav>
    );
};
export default Navbar;