import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
  
   const Login = () => {

    const { user, isLoading, isError , message }  = useSelector((state => state.auth))


    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("/");
        }
    }, [user]);


        if(isLoading){
            return 
                <Loading />;
            
        }


    return (
        <div className="container p-5">
        <h1 className="display-6 text-center">Login</h1>

        <form>
        
            <input type="email"
             className="form-control rounded-0 my-2"
              placeholder="Enter Email" 
              required />
            <input type="password"
             className="form-control rounded-0 my-2" 
             placeholder="Enter Password"
              required />

               <button className="btn btn-success my-3 w-100 rounded-0">Register</button>
        </form>

    </div>
    );
   };
export default Login;  