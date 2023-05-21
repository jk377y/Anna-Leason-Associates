import IMAGES from "../../assets/images/index";

const Anna = () => {
	return (
		<>
			<div className="therapist-container">
				<div className="therapist-info">
					<div className="therapist-profile-pic">
						<img src={IMAGES.anna} alt="Anna" />
					</div>
					<br/>
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Anna Leason, LCSW</h2>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3><a className="therapist-comm-link"href="tel:713-303-9627">713-303-9627</a></h3>
								<h3>or</h3>
								<h3><a className="therapist-comm-link" href='mailto:annaleason7@gmail.com'>Email Me</a></h3>
							</div>
						</div>
						<br/>
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>The University of Texas - Austin</p>
							<p>Masters Degree - Social Work 1984</p>
							<p>Clinical Hypnosis</p>
							<br/>
							<h3>Post Graduate Training:</h3>
							<p>EMDR (Eye Movement Desensitization and Reprocessing)</p>
							<p>Mindfulness Oriented Therapy</p>
							<p>CBT (Cognitive Behavioral Therapy)</p>
							<p>DBT (Dialectical Behavior Therapy)</p>
							<p>Neuropsychpharmacology</p>
							<br/>
						</div>
					</div>
				</div>
					<br/>
					<br/>
				<div className="therapist-specializations">
					<h3>SPECIALIZATIONS</h3>
					<br/>
					<br/>
					<h4>Anxiety Issues --</h4>
					<br/>
					<h5>Obsessive Compulsive Disorder - Post Traumatic Stress Disorder - Panic Attack - Phobias - Worry - Fear - Feeling on Edge</h5>
					<p>Anxiety has this incredible ability to show up in many shapes and forms. It might be an overwhelming sense of dread or gloom and doom, but not really knowing why you feel that way.It could appear as a panic attack when you might think you are dying or having a heart attack. Sometimes it surfaces in PTSD when you think you are right back in a traumatic situation. Anxiety might work its way in by having you obsess on the same thought over and over and over. Or it could simply be on going worry. Anxiety can make us feel like we are somehow crazy or out of control. The positive aspect of anxiety no matter how it might surface is, it is very treatable. Cognitive/behavioral therapy, insight oriented therapy, mindfulness therapy, hypnosis and EMDR can all be helpful with the treatment of anxiety and help an individual experience more joy without always feeling that other shoe is about to fall.</p>
					<br/>
					<br/>
					<h4>Depression Issues --</h4>
					<br/>
					<h5>Sadness - Lack of Joy - Irritability - Difficulty Motivating Oneself - Self Esteem - Job Loss - Death of a loved one - Divorce</h5>
					<p>Depression has this uncanny ability of robbing you of the joy in life. You find that you no longer enjoy doing the things that you used to. It might be a huge effort to get out of bed and get dressed. You might feel an overwhelming sense of sadness and isolation. Brain fog and difficulty with concentration are common. You might start to notice everything seems to make you feel agitated or irritable. Depression might surface in making you feel you have no purpose or question your value. It can steal your sense of self confidence. With help …sometimes therapy or a combination of medication and therapy you can regain the beautiful essence of who you are and experience the incredible gift of life once again.</p>
					<br/>
					<br/>
				</div>
				<div className="therapist-treatments">
					<h4>Treatments Offered--</h4>
					<br/>
					<h5>EMDR - Eye Movement Desensitation Reprocessing</h5>
					<h5>Hypnosis</h5>
					<h5>CBT - Cognitive Behavioral Therapy</h5>
					<h5>DBT - Dialectical Behavior Therapy</h5>
					<h5>Psychodynamics</h5>
					<h5>Mindfulness Oriented Therapy</h5>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>
			</div>
		</>
	);
};
export default Anna;