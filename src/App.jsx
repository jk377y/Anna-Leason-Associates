import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurTherapists from "./pages/OurTherapists";
import OurOffice from "./pages/OurOffice";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
const App = () => {
	return (
		<Router>
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/therapists" element={<OurTherapists />} />
				<Route path="/office" element={<OurOffice />} />
				<Route path="/fees" element={<Fees />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
		</Router>
	);
};

export default App;
