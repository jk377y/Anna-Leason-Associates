import Header from "./components/header";
import MobileHamburgerNav from "./components/MobileHamburgerNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurTherapists from "./pages/OurTherapists";
import Anna from "./components/Therapists/Anna";
import Desire from "./components/Therapists/Desire";
import Leann from "./components/Therapists/Leann";
import Reneka from "./components/Therapists/Reneka";
import Tammy from "./components/Therapists/Tammy";
import Teresa from "./components/Therapists/Teresa";

import OurOffice from "./pages/OurOffice";
import Information from "./pages/Information";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<Router>
		<>
			<MobileHamburgerNav />
			<Header />
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/therapists" element={<OurTherapists />} />
					<Route path="/therapists/anna" element={<Anna />} />
					<Route path="/therapists/desire" element={<Desire />} />
					<Route path="/therapists/leann" element={<Leann />} />
					<Route path="/therapists/reneka" element={<Reneka />} />
					<Route path="/therapists/tammy" element={<Tammy />} />
					<Route path="/therapists/teresa" element={<Teresa />} />
				<Route path="/office" element={<OurOffice />} />
				<Route path="/information" element={<Information />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
		</Router>
	);
};

export default App;
