import IMAGES from "../../assets/images/index";

const Teresa = () => {
  return (
		<>
		
		
			<div className="therapist-container">
				<div className="therapist-info">
					
					<div className="therapist-profile-pic">
						<img src={IMAGES.teresa} alt="Anna" />
					</div>
					<br/>
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Teresa Linnemann, LMFT</h2>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3>346-298-9500</h3>
							</div>
						</div>
						<br/>
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>Our Lady of the Lake University - San Antonio, Texas</p>
							<p>MS -Marriage and Family Therapy</p>
							<p>Delta Kappa Marriage and Family Therapy Honor Society</p>
							<br/>
							<h3>Professional Organizations:</h3>
							<p>AAMFT, TAMFT</p>
							<br/>
						</div>
					</div>
				</div>
					<br/>
					<br/>
				<div className="therapist-specializations">
					<p>Being a Marriage and Family Therapist, I help individuals, couples and families enhance their strengths and scaffold weakness to build and reinforce the resilience and insight necessary for purposeful change. Depression, Anxiety and Stress, Addiction, PTSD and Grief should not lead to hopelessness. I have several years of experience treating children and adolescence. I offer parenting support and work well with children and adolescents, ages 5 through 17. We meet independently and with the family to improve behaviors through cognitive insights that support behavior modifications/changes for ADHD, conduct concerns and social skills development that can be useful in social/sporting, school and home settings. I believe all of us have incredible strengths within but sometimes may need a little guidance connecting to them.</p>
					<br/>
					<p>For more information on methods I support to facilitate emotional health and sense of well-being visit <a href="http://www.isftherapy.com" target="_blank" className="therapist-url-link" rel="noreferrer">www.isftherapy.com</a>. You are the &quot;expert&quot; in your life and with positive decisions and support the change you want to make can be attained. There are possibilities to explore. It would be my privilege to be a part of your possibilities.</p>
					<br/>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</>
	);
}

export default Teresa