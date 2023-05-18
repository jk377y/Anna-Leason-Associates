import header2a from "../assets/images/index/header-2a.png";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="header">
			<img className="header-image" src={header2a} alt="header2a image"></img>
			<Navbar />
		</header>
	);
};

export default Header;
