import { Link } from "react-router-dom";
import { useState } from "react";
import IMAGES from '../../assets/images/index';
import "./MobileHamburgerNav.css";

const MobileHamburgerNav = () => {
	const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
        const mobileMenuDiv = document.querySelector("#nav-mobile-menu-div");
        if (!isOpen) {
			mobileMenuDiv.classList.add("show");
            mobileMenuDiv.classList.remove("hide");
		} else {
			mobileMenuDiv.classList.remove("show");
            mobileMenuDiv.classList.add("hide");
		}
    };
	return (
		<>
			<div className="nav-mobile-outer-div shadow-frame">
				<button className={`hamburgerBtn ${isOpen ? "collapsed" : ""}`} aria-label="Toggle Navigation" onClick={toggleNav} >
					<span className="hamburger"><span></span><span></span><span></span></span></button>
				<div id='nav-mobile-menu-div' className={`nav-mobile-menu-div ${isOpen ? "show" : "hide"}`}>
					<div className="nav-mobile-menu">
						<div>
							<img src={IMAGES.headerLogo} alt="logo" />
						</div>
						<Link to="/">HOME</Link>
						<Link to="/therapists">OUR TEAM</Link>
						<Link to="/office">OUR OFFICE</Link>
						<Link to="/information">INFORMATION</Link>
						<Link to="/contact">CONTACT US</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export default MobileHamburgerNav;