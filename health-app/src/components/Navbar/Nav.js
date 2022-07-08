import react from 'react';
import './nav.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router'

function Nav(){
  let navigate = useNavigate();
    const navStyle = {
        color: "red"
    }
    return(
        <nav className="d-flex navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" onClick={() => {navigate('/')}}>Health Diagnoser</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
            
          <li className="linkstyle" onClick={() => {navigate('/diabetes')}}>
            Diabetes
          </li>
          <li className="linkstyle" onClick={() => {navigate('/')}}>
            Home
          </li>
          <li className="linkstyle" onClick={() => {navigate('/login')}}>
            Login/register
          </li>
        </ul>
      </div>  
    </nav>
    );
}

export default Nav;