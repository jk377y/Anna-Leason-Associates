import { Link } from "react-router-dom";
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
		<>
			<div className="home-outer-wrapper">
				<div className="home-first-outer-container">
					<div className="home-first-inner-container">
						<h4 className="home-first-welcome">
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
						<img src={IMAGES.team2022} alt="team 2022 pic"/>
					</div>
					<div className="home-quote-container">
						<div className="home-quote-frame">
							{images.map((image, index) => (
								<img key={index} src={image} alt={image} loading="lazy" className={index === currentIndex ? "home-fade-in" : "home-fade-out"} />
							))}
						</div>
					</div>
				</div>
				<div className="home-second-container">
					<div className="home-card-wrapper">
						<img src={IMAGES.happyfamily}/>
						<p className="home-statements">Counseling is offered for individuals, couples, families, adults and children. However, our counselors <span>do not</span> write reports or testify in court.</p>
					</div>
					<br/>
					<div className="home-card-wrapper">
						<img src={IMAGES.happyfamily2}/>
						<p className="home-statements">We offer both on site visits and tele therapy. <span>Spanish speaking therapists are available.</span></p>
					</div>
					<br/>
					<div className="home-card-wrapper">
						<img src={IMAGES.donations}/>
						<p className="home-statements"><span>Please note :</span> A percentage of profit from this practice is donated monthly to local charity.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
