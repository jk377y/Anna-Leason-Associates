import IMAGES from "../../assets/images/index";

const Tammy = () => {
  return (
		<>
		
		
			<div className="therapist-container">
				<div className="therapist-info">
					
					<div className="therapist-profile-pic">
						<img src={IMAGES.tammy} alt="Anna" />
					</div>
					<br/>
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Tammy Davis, LCSW</h2>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3>979-398-2745</h3>
							</div>
						</div>
						<br/>
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>Universtiy of Houston 2016</p>
							<p>Masters Degree - Social Work 1984</p>
							<p>Master Social Work</p>
							<br/>
							<p>Texas A&M University 2006</p>
							<p>Master of Public Health</p>
							<br/>
							<p>Stephen F. Austin State Universtiy 1996</p>
							<p>BS Heath Science</p>
							<br/>
						</div>
					</div>
				</div>
					<br/>
					<br/>
				<div className="therapist-specializations">
					<p>&nbsp;&nbsp;&nbsp;<span className="therapists-greeting-text">Hi!</span> I am a Licensed Clinical Social Worker with over 20 years experience as an MA, CNA and 6 years of experience meeting the needs of clients in social work settings who struggle with depression, anxiety, addictions, trauma, and family relationships. I specialize in working with single moms with children and those with life event adjustments. As a licensed social worker, I utilize a solution-focused approach along with cognitive and dialectical behavioral therapeutic techniques to uncover, process and assist my clients with managing unwanted symptoms that are keeping you from realizing your personal goals in life. I have worked with individuals, couples, and families in various psychotherapy settings as a clinician. My overall approach includes compassion, empathy, and a deep desire to ensuring my clients have a safe environment to experience positive life changes and live a fulfilling life. I also like to meet clients &quot;where they are at,&quot; and at a pace that works best for them in their life&apos;s journey. I look forward to meeting and working with you. See you Soon!</p>
					<br/>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</>
	);
}

export default Tammy