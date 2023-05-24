import { Link } from "react-router-dom";
import IMAGES from "../../assets/images/index";
import "./AllTherapists.css";

const AllTherapists = () => {
	return (
		<>
			<div className="all-therapists-pics-container">
				<div className="all-therapists-pics-scroll-view">
					<div className="all-therapists-anna-container">
						<p>Anna Leason,</p>
						<p>LCSW</p>
						<Link to="/therapists/anna"><img src={IMAGES.anna} alt="Anna" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div className="all-therapists-teresa-container">
						<p>Teresa Linnemann,</p>
						<p>LMFT</p>
						<Link to="/therapists/teresa"><img src={IMAGES.teresa} alt="Teresa" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div className="all-therapists-leann-container">
						<p>Leann Jenkins,</p>
						<p>LPC Associate</p>
						<Link to="/therapists/leann"><img src={IMAGES.leann} alt="Leann" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div className="all-therapists-desire-container">
						<p>Desiré Martinez,</p>
						<p>LCSW-S</p>
						<Link to="/therapists/desire"><img src={IMAGES.desire} alt="Desire" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div className="all-therapists-tammy-container">
						<p>Tammy Davis,</p>
						<p>LCSW</p>
						<Link to="/therapists/tammy"><img src={IMAGES.tammy} alt="Tammy" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div className="all-therapists-reneka-container">
						<p>Reneka Clark,</p>
						<p>LCSW</p>
						<Link to="/therapists/reneka"><img src={IMAGES.reneka} alt="Reneka" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default AllTherapists;