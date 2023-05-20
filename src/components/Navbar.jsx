


const Navbar = () => {
    
	return (    
        <>
            <nav id="nav-bar-lg-screen" className="nav-bar-lg-screen">
                <a href="/" className="nav-bar-link">HOME</a>
                <div className="nav-bar-link nav-dropdown">OUR TEAM ▼
                    <ul className="nav-dropdown-menu">
                        <li><a href="/therapists/Anna">Anna Leason</a></li>
                        <li><a href="/therapists/Desire">Desiré Martinez</a></li>
                        <li><a href="/therapists/Leann">Leann Jenkins</a></li>
                        <li><a href="/therapists/Reneka">Reneka Clark</a></li>
                        <li><a href="/therapists/Tammy">Tammy Davis</a></li>
                        <li><a href="/therapists/Teresa">Teresa Linneman</a></li>
                    </ul>
                </div>
                <a href="/office" className="nav-bar-link">OUR OFFICE</a>
                <a href="/information" className="nav-bar-link">INFORMATION</a>
                <a href="/contact" className="nav-bar-link">CONTACT US</a>
            </nav>
        </>
	);
};

export default Navbar;
