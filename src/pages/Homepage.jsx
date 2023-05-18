import { useEffect, useRef, useState, useMemo } from "react";
import teampic from "../assets/images/group/team 2022.jpg";
import quote1 from "../assets/images/quotes/quote1.jpg";
import quote2 from "../assets/images/quotes/quote2.jpg";
import quote3 from "../assets/images/quotes/quote3.jpg";
import quote4 from "../assets/images/quotes/quote4.jpg";
import quote5 from "../assets/images/quotes/quote5.jpg";
import quote6 from "../assets/images/quotes/quote6.jpg";
import quote7 from "../assets/images/quotes/quote7.jpg";
import quote8 from "../assets/images/quotes/quote8.jpg";

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = useMemo(() => [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8], []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5500);

		return () => clearTimeout(timer);
	}, [currentIndex, images.length]);

	return (
		<main className="home-main-container">
			<div className="home-main-first-container">
				<div className="home-left-container">
					<h4 className="home-welcome">
						Welcome ....
						<br />
						<br />
						<br />
						Each of us is born with our special strengths and gifts to offer. Sometimes circumstances of life distance us from that. The goal of therapy is to help one reconnect with that beautiful strength within. We have trained, degreed and experienced psychotherapists that can help you.
					</h4>
					<br />
					<br />
					<br />
					<img src={teampic} alt="team 2022 pic" />
				</div>
				<div className="home-right-container">
					{images.map((image, index) => (
						<img key={index} src={image} alt="team 2022 pic" className={index === currentIndex ? "fade-in" : "fade-out"} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Homepage;