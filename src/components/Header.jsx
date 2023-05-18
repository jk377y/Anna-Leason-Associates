import header2a from "../assets/images/index/header-2a.png";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header>
			<div className="inner-header">
				<img src={header2a} alt="header2a image"></img>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
