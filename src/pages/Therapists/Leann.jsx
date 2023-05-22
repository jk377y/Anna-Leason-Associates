import IMAGES from "../../assets/images/index";
import "./Therapists.css";

const Leann = () => {
	return (
		<>
			<div className="therapist-container">
				<div className="therapist-info">
					<div className="therapist-profile-pic">
						<img src={IMAGES.leann} alt="Anna" />
					</div>
					<br />
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Leann Jenkins, LPC ASSOCIATE</h2>
								<h4>Supervised by Denise Smith, M.Ed., LPC, LPC-S</h4>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3><a className="therapist-comm-link"href="tel:903-767-0435">903-767-0435</a></h3>
								<h3>or</h3>
								<h3><a  className="therapist-comm-link" href='mailto:leann@gmail.com'>Email Me</a></h3>
							</div>
						</div>
						<br />
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>Lamar University - Beaumont, Texas</p>
							<p>M.Ed., Counseling and Development</p>
							<br />
							<h3>Professional Organiztions:</h3>
							<p>ASCA, LSSSCA, TCA</p>
							<br />
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className="therapist-specializations">
					<p>&nbsp;&nbsp;&nbsp;I believe there are times when life’s circumstances can shake us to our very core. We can lose sight of our inherent value and assets and need the help of a therapist to work through the challenges we are facing. Seeking help takes strength and courage. I would be honored to be the therapist you choose to help restore you to a place of peace and balance.</p>
					<br />
					<br />
					<p>&nbsp;&nbsp;&nbsp;I earned a M.Ed. in Counseling and Development from Lamar University. In addition, I am a certified teacher and a certified school counselor with over 20 years of experience in the public education system. I am under supervision by Denise Smith, M.Ed., LPC, LPCS. I have an eclectic approach to counseling that is strongly based in Cognitive Behavior Therapy. Other modalities that I use are Gestalt therapy, play therapy, solution-focused therapy, and art therapy. Ongoing assessment of my client’s needs is the driving force in determining appropriate strategies, techniques, and interventions.</p>
					<br />
					<br />
					<p>&nbsp;&nbsp;&nbsp;I counsel children, adolescents, and adults and specialize in treating individuals with anxiety, depression, trauma/PTSD, ADHD, grief and loss, relationship problems, autism, and relationship problems.</p>
				</div>
				<br />
				<br />
			</div>
		</>
	);
};
export default Leann;