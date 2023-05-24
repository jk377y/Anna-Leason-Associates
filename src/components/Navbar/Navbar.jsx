import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (    
        <>
            <nav id="nav-bar-lg-screen" className="nav-bar-lg-screen">
                <Link to="/" className="nav-bar-link">HOME</Link>
                <div className="nav-bar-link nav-dropdown"><Link to='/therapists' className="nav-dropdown-anchor-link">OUR TEAM <span className='nav-dropdown-arrow'>▼</span></Link>
                    <ul className="nav-dropdown-menu">
                        <li><Link to="/therapists/Anna">Anna Leason</Link></li>
                        <li><Link to="/therapists/Teresa">Teresa Linneman</Link></li>
                        <li><Link to="/therapists/Leann">Leann Jenkins</Link></li>
                        <li><Link to="/therapists/Desire">Desiré Martinez</Link></li>
                        <li><Link to="/therapists/Tammy">Tammy Davis</Link></li>
                        <li><Link to="/therapists/Reneka">Reneka Clark</Link></li>
                    </ul>
                </div>
                <Link to="/office" className="nav-bar-link">OUR OFFICE</Link>
                <Link to="/information" className="nav-bar-link">INFORMATION</Link>
                <Link to="/contact" className="nav-bar-link">CONTACT US</Link>
            </nav>
        </>
	);
};
export default Navbar;