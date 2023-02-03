import react from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () =>{
  let navigate = useNavigate();
    return(
        
            <div className="logreg-forms d-flex justify-content-center align-items-center ">
              <div className="card cd">
                <div className="form px-4 pt-5">
                  <input type="text" name="" className="form-control" placeholder="Email or Phone"></input>
                  <input type="text" name="" className="form-control" placeholder="Password"></input>
                  <button className="btn btn-dark btn-block">Login</button>
                  <p className = "message">don't have an account?<a className='message' onClick={()=>{navigate('/Register')}}> register</a></p>
                </div>
              </div>
            </div>
        
    );
}

export default Login;