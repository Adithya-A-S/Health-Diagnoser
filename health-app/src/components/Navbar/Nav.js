import react from 'react';
import './nav.css'
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: "white"
    }
    return(
        <nav className='nav'>
            <h3>Health Diagnoser</h3>
            <ul className='nav-link'>
                <Link className = "linkstyle" to="/diabetes">
                    <li >DiaPred</li>
                </Link>
                <Link className = "linkstyle" to="/home">
                    <li >Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;