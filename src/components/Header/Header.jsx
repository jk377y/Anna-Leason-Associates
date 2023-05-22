import IMAGES from "../../assets/images";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
	return (
		<header className="header">
			<a href="/"><img className="header-image" src={IMAGES.headerLogo} alt="header2a image"></img></a>
			<Navbar />
		</header>
	);
};
export default Header;