import { Link } from "react-router-dom";
import IMAGES from "../../assets/images/index";
import "./AllTherapists.css";

const AllTherapists = () => {
	return (
		<>
			<div className="all-therapists-outer-container">
				<div className="all-therapists-inner-container">
					<div>
						<p>Anna Leason,</p>
						<p>LCSW</p>
						<Link to="/therapists/anna"><img src={IMAGES.anna} alt="Anna" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div>
						<p>Teresa Linnemann,</p>
						<p>LMFT</p>
						<Link to="/therapists/teresa"><img src={IMAGES.teresa} alt="Teresa" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div>
						<p>Leann Jenkins,</p>
						<p>LPC Associate</p>
						<Link to="/therapists/leann"><img src={IMAGES.leann} alt="Leann" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div>
						<p>Desiré Martinez,</p>
						<p>LCSW-S</p>
						<Link to="/therapists/desire"><img src={IMAGES.desire} alt="Desire" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div>
						<p>Tammy Davis,</p>
						<p>LCSW</p>
						<Link to="/therapists/tammy"><img src={IMAGES.tammy} alt="Tammy" loading="lazy" className="all-therapists-pics"/></Link>
					</div>
					<div>
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