import IMAGES from "../../assets/images/index";
const Reneka = () => {
  return (
		<>
		
		
			<div className="therapist-container">
				<div className="therapist-info">
					
					<div className="therapist-profile-pic">
						<img src={IMAGES.reneka} alt="Anna" />
					</div>
					<br/>
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Reneka D. Clark, MSW, LCSW-BACS, CCTP</h2>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3>318-379-6504</h3>
								<h3>or</h3>
								<h3><a  className="therapists-email-link" href='mailto:rdclarklcsw@therapyemail.com'> - Email Me - </a></h3>
							</div>
						</div>
						<br/>
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>Grambling State University</p>
							<p>Master of Social Work - 2007</p>
							<br/>
							<h3>Post Graduate Training:</h3>
							<p>Trauma Focused CBT Training</p>
							<p>EMDR Basic Training</p>
							<p>Evidenced-Based Trauma Treatments & Interventions</p>
							<p>Child-Parent Psychotherapy Training</p>
							<p>ASAM (American Society of Addiction Medicine) Training</p>
							<p>Positive Psychology Training</p>
							<p>Suicide Clinical Risk Training- Assessment Intervention and Evidenced Based Treatments</p>
							<br/>
						</div>
					</div>
				</div>
					<br/>
					<br/>
				<div className="therapist-specializations">
					<p>&nbsp;&nbsp;&nbsp;I specialize in most areas of behavioral health such as helping people face issues of Anxiety, Depression, Trauma, Adjustment to life transitions, Grief/loss, etc... I have worked with children and a wide age range of adults in dealing with life issues successfully. I have also worked with people on an individual level, families, and couples. In therapy, I believe it&apos;s important to see your strengths. This helps build yourself up to accomplish smaller successes as you make your way to feeling better overall.</p>
					<br/>
					<br/>
					<p>&nbsp;&nbsp;&nbsp;I like to use interventions such as Cognitive-Behavioral therapy, Person-Centered therapy, Ecological Systems theory (to help build supportive factors outside of therapy), Strength-Focused therapy, and more. My hope is to see clients increase hope, determination, and to feel encouraged to face life issues head on. Together we can conquer the challenges of life and help you start to see the great things this life has in store for you.</p>
					<br/>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</>
	);
}

export default Reneka