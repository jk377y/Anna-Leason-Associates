import IMAGES from "../../assets/images";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
	return (
		<header className="header">
			<img className="header-image" src={IMAGES.headerLogo} alt="header2a image"></img>
			<Navbar />
		</header>
	);
};
export default Header;