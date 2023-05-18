import Header from "./components/header";
import MobileHamburgerNav from "./components/MobileHamburgerNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurTherapists from "./pages/OurTherapists";
import OurOffice from "./pages/OurOffice";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
const App = () => {
	return (
		<Router>
		<>
			<Header />
			<MobileHamburgerNav />
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/therapists" element={<OurTherapists />} />
				<Route path="/office" element={<OurOffice />} />
				<Route path="/information" element={<Information />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
		</Router>
	);
};

export default App;
