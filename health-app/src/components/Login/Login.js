import react from 'react';
import './Login.css'


const Login = () =>{
    return(
        
            <div className="logreg-forms d-flex justify-content-center align-items-center ">
 

<div className="card">

    
      
          <div className="form px-4 pt-5">

            <input type="text" name="" className="form-control" placeholder="Email or Phone"></input>

            <input type="text" name="" className="form-control" placeholder="Password"></input>
            <button className="btn btn-dark btn-block">Login</button>
            <p className = "message">already have an account?<a className='message'> register</a></p>

          </div>



        
            

          
    
  
  

</div>


</div>
        
    );
}

export default Login;