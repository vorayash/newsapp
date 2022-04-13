import React from 'react'
import { Link, useLocation } from 'react-router-dom'

 const NavBar = ()=> {
     let location = useLocation();
    
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link className="navbar-brand" to="/">NewsReady</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${location.pathname==="/newsapp"?"active":""}`}><Link className="nav-link" to="/newsapp">General</Link></li>
                        <li className={`nav-item ${location.pathname==="/business"?"active":""}`}><Link className="nav-link" to="/business">Business</Link></li>
                        <li className={`nav-item ${location.pathname==="/entertainment"?"active":""}`}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className={`nav-item ${location.pathname==="/health"?"active":""}`}><Link className="nav-link" to="/health">Health</Link></li>
                        <li className={`nav-item ${location.pathname==="/science"?"active":""}`}><Link className="nav-link" to="/science">Science</Link></li>
                        <li className={`nav-item ${location.pathname==="/sports"?"active":""}`}><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className={`nav-item ${location.pathname==="/technology"?"active":""}`}><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    
}

export default NavBar;