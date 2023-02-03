import react from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Register = ()=>{
  let navigate = useNavigate();


    return(

    <div className="logreg-forms d-flex justify-content-center align-items-center ">
      <div className="card rd">
        <div className="form px-4 pt-5">
          <input type="text" name="" className="form-control" placeholder="Full name"></input>
          <input type="text" name="" className="form-control" placeholder="Email"></input>
          <input type="text" name="" className="form-control" placeholder="phone"></input>
          <input type="text" name="" className="form-control" placeholder="Password"></input>
          <button className="btn btn-dark btn-block">Login</button>
          <p className = "message">already have an account?<a className='message' onClick={()=>{navigate('/login')}}> login</a></p>
        </div>
      </div>
    </div>

    );
}
export default Register;