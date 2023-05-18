import header2a from "../assets/images/index/header-2a.png";

const Header = () => {
	return (
		<header>
			<div className="inner-header">
				<img src={header2a} alt="header2a image"></img>

				<div className="nav-container">
					<nav className="nav-lg-screen">
						<a href="/" className="nav-bar"><h4>HOME</h4></a>
						<a href="/therapists" className="nav-bar"><h4>OUR<br/>THERAPISTS</h4></a>
						<a href="/office" className="nav-bar"><h4>OUR<br/>OFFICE</h4></a>
						<a href="/fees" className="nav-bar"><h4>INTAKE FORMS,<br/>FEES AND<br/>INSURANCE</h4></a>
						<a href="/contact" className="nav-bar"><h4>CONTACT</h4></a>
					</nav>
					
				</div>
			</div>
		</header>
	);
};

export default Header;
