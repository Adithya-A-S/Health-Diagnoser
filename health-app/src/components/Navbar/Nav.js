import react from 'react';
import './nav.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: "white"
    }
    return(
        <nav className="d-flex navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand">Health Diagnoser</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <Link to="/diabetes">
          <li className="linkstyle">
            Diabetes
          </li>
          </Link>
          <Link to ="/home">
          <li className="linkstyle">
            Home
          </li>
          </Link>
          <Link to="/login">
          <li className="linkstyle">
            Login/register
          </li>
          </Link>
        </ul>
      </div>  
    </nav>
    );
}

export default Nav;