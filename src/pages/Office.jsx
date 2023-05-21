import IMAGES from "../assets/images/index";

const Office = () => {
	return (
		<>
			<div className="office-outer-container">
				<div className="office-info-container">
					<h3>Onsite visits and telehealth available</h3>
					<p>&emsp;&emsp;Please visit our <a href="/contact" className="office-comm-link">CONTACT</a> page to make an appointment</p>
				</div>
				<div className="office-info-container">
					<h3>Our Office</h3>
					<ul>
						<li>Located conveniently near I45 just inside The Woodlands, our office is in a serene forest setting.</li>
						<li>Plenty of free parking is available.</li>
						<li>Your visit will be stress free and relaxed.</li>
						<li>Before your first visit, please click <a href="https://hipaa.jotform.com/203186077433051" target="_blank" rel="noreferrer" className="office-comm-link">HERE</a> to fill out required forms online.</li>
						<li>For office financial policies and insurance information click <a href="/information" className="office-comm-link">HERE</a></li>
					</ul>
				</div>
				<div className="office-internal-pics">
					<img src={IMAGES.office1} alt="office1" />
					<img src={IMAGES.office2} alt="office2" />
					<img src={IMAGES.office3} alt="office3" />
					<img src={IMAGES.office4} alt="office4" />
				</div>
				<div className="office-map-container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13799.05580749707!2d-95.470654!3d30.158164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864736b6509854a1%3A0xe12ac95273df0aee!2s2203%20Timberloch%20Pl%2C%20Spring%2C%20TX%2077380!5e0!3m2!1sen!2sus!4v1684638166136!5m2!1sen!2sus" allowfullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="office-google-map"></iframe>
				</div>
			</div>
		</>
	);
};
export default Office;