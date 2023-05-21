import IMAGES from "../assets/images/index";

const OurTherapists = () => {
	return (
		<>
			<div className="all-therapists-pics-container">
				<div className="all-therapists-pics-scroll-view">
					<div className="all-therapists-anna-container">
						<p>Anna Leason,</p>
						<p>LCSW</p>
						<a href="/therapists/anna"><img src={IMAGES.anna} alt="Anna"  className="all-therapists-pics"/></a>
					</div>
					<div className="all-therapists-teresa-container">
						<p>Teresa Linnemann,</p>
						<p>LMFT</p>
						<a href="/therapists/teresa"><img src={IMAGES.teresa} alt="Teresa" className="all-therapists-pics"/></a>
					</div>
					<div className="all-therapists-leann-container">
						<p>Leann Jenkins,</p>
						<p>LPC Associate</p>
						<a href="/therapists/leann"><img src={IMAGES.leann} alt="Leann"  className="all-therapists-pics"/></a>
					</div>
					<div className="all-therapists-desire-container">
						<p>Desiré Martinez,</p>
						<p>LCSW-S</p>
						<a href="/therapists/desire"><img src={IMAGES.desire} alt="Desire"  className="all-therapists-pics"/></a>
					</div>
					<div className="all-therapists-tammy-container">
						<p>Tammy Davis,</p>
						<p>LCSW</p>
						<a href="/therapists/tammy"><img src={IMAGES.tammy} alt="Tammy"  className="all-therapists-pics"/></a>
					</div>
					<div className="all-therapists-reneka-container">
						<p>Reneka Clark,</p>
						<p>LCSW</p>
						<a href="/therapists/reneka"><img src={IMAGES.reneka} alt="Reneka"  className="all-therapists-pics"/></a>
					</div>
				</div>
			</div>
		</>
	);
};
export default OurTherapists;