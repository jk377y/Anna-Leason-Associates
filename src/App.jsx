import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MobileHamburgerNav from "./components/MobileHamburgerNav/MobileHamburgerNav";
import Homepage from "./pages/Homepage/Homepage";
import AllTherapists from "./pages/AllTherapists/AllTherapists";
import Anna from "./pages/Therapists/Anna";
import Desire from "./pages/Therapists/Desire";
import Leann from "./pages/Therapists/Leann";
import Reneka from "./pages/Therapists/Reneka";
import Tammy from "./pages/Therapists/Tammy";
import Teresa from "./pages/Therapists/Teresa";
import Office from "./pages/Office/Office";
import Information from "./pages/Information/Information";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {
	return (
		<>
			<MobileHamburgerNav />
			<Header />
			<Routes>
				<Route index element={<Homepage/>} />
				<Route path="/" element={<Homepage/>} />
				<Route path="/home" element={<Homepage/>} />
				<Route path="/homepage" element={<Homepage/>} />
				<Route path="/therapists" element={<AllTherapists />} />
					<Route path="/therapists/anna" element={<Anna />} />
					<Route path="/therapists/teresa" element={<Teresa />} />
					<Route path="/therapists/leann" element={<Leann />} />
					<Route path="/therapists/desire" element={<Desire />} />
					<Route path="/therapists/tammy" element={<Tammy />} />
					<Route path="/therapists/reneka" element={<Reneka />} />
				<Route path="/office" element={<Office />} />
				<Route path="/information" element={<Information />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</>
	);
};
export default App;