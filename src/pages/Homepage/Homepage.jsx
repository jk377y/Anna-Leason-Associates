import { useEffect, useState, useMemo } from "react";
import IMAGES from '../../assets/images/index';
import "./Homepage.css";

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = useMemo(() => [IMAGES.quote1, IMAGES.quote2, IMAGES.quote3, IMAGES.quote4, IMAGES.quote5, IMAGES.quote6, IMAGES.quote7, IMAGES.quote8], []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);
		return () => clearTimeout(timer);
	}, [currentIndex, images.length]);

	return (
		<main>
			<div className="home-main-container">
				<div className="home-main-first-container">
					<div className="home-intro-container">
						<h4 className="home-welcome">
							<span>Welcome ....</span>
							<br />
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each of us is born with our special strengths and gifts to offer. Sometimes circumstances of life distance us from that. The goal of therapy is to help one reconnect with that beautiful strength within. We have trained, degreed and experienced psychotherapists that can help you.
							<br />
							<br />
						</h4>
						<br />
						<br />
						<h4 className="home-team-pic">Our Team</h4>
						<br/>
						<a href="/therapists"><img src={IMAGES.team2022} alt="team 2022 pic"/></a>
					</div>
					<div className="home-quote-container">
						<div className="home-quote-frame">
							{images.map((image, index) => (
								<img key={index} src={image} alt={image} loading="lazy" className={index === currentIndex ? "home-fade-in" : "home-fade-out"} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="home-second-container">
				<div className="home-statement-wrapper">
					<div className="home-empty-title-bar"></div>
					<h4 className="home-statements">Counseling is offered for individuals, couples, families, adults and children. However, our counselors <span>do not</span> write reports or testify in court.</h4>
				</div>
				<br/>
				<div className="home-statement-wrapper">
					<div className="home-empty-title-bar"></div>
					<h4 className="home-statements">We offer both on site visits and tele therapy. <span>Spanish speaking therapists are available.</span></h4>
				</div>
				<br/>
				<div className="home-statement-wrapper">
					<div className="home-empty-title-bar"></div>
					<h4 className="home-statements"><span>Please note :</span> A percentage of profit from this practice is donated monthly to local charity.</h4>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
