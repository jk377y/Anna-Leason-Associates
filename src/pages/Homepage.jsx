import teampic from '../assets/images/group/team 2022.jpg'
import quote1 from '../assets/images/quotes/quote1.jpg'

const Homepage = () => {
	return ( 
        <main className="home-main-container">
            <div className="home-main-first-container">
                <div className="home-left-container">
                    <h4 className="home-welcome">Welcome ....<br/><br/><br/>Each of us is born with our special strengths and gifts to offer. Sometimes circumstances of life distance us from that. The goal of therapy is to help one reconnect with that beautiful strength within. We have trained, degreed and experienced psychotherapists that can help you.</h4><br/><br/><br/>
                    <img src={teampic} alt="team 2022 pic" />
                </div>
                <div className="home-right-container">
                    <img src={quote1} alt="team 2022 pic" />
                </div>
            </div>
        </main>
    )
};

export default Homepage;
