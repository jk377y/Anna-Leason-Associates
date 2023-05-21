import IMAGES from "../../assets/images/index";

const Desire = () => {
  return (
    <>
			<div className="therapist-container">
				<div className="therapist-info">
					<div className="therapist-profile-pic">
						<img src={IMAGES.desire} alt="Anna" />
					</div>
					<br/>
					<div className="therapist-info-text">
						<div className="therapist-logo-title">
							<img src={IMAGES.happyCreature} alt="happy creature pic" />
							<div className="therapist-title">
								<h2>Desiré Martinez, LCSW-S</h2>
								<h3>Contact</h3>
								<h3>at</h3>
								<h3><a className="therapist-comm-link"href="tel:281.671.7073">281.671.7073</a></h3>
								<h3>or</h3>
								<h3><a  className="therapist-comm-link" href='mailto:dmartinez@counselingmail.com'>Email Me</a></h3>
							</div>
						</div>
						<br/>
						<div className="therapist-education">
							<h3>Education:</h3>
							<p>University of Houston Graduate College of Social Work</p>
							<p>Masters Degree - Social Work - 2010</p>
							<p>Post Graduate Training: Traumatic Stress Studies, CBT, DBT, IFS</p>
							<br/>
						</div>
					</div>
				</div>
					<br/>
					<br/>
				<div className="therapist-specializations">
					<p>Whether you are dealing with a life-long issue (low self esteem, trauma, depression, anxiety) or dealing with phase of life problems (parenting, grief/loss, relationship challenges, work/school stress, chronic medical issues) therapy can help you identify self-limiting patterns and learn new skills to manage thoughts, feelings and behaviors. If you are ready to change the way you are feeling, I am ready to work through it with you. I offer culturally sensitive counseling services, in both English and Spanish and welcome all ethnicities, abilities, cultural backgrounds, and sexual/gender identities. While my passion is focusing on self-esteem, self-acceptance, resiliency and posttraumatic growth, my areas of specialty include: Anxiety, Depression, working with survivors of intimate partner violence, survivors of childhood trauma, and complex trauma. I am an LCSW-S and available for clinical supervision as well.</p>
					<br/>
					<h5>I offer psychosocial evaluations for immigration cases for use in the following situations:</h5>
					<br/>
					<ul>
						<li>Hardship Waivers (I-601 and I-601A)</li>
						<li>Cancellation of Removal</li>
						<li>VAWA and Spousal Abuse</li>
						<li>U-Visas Asylum, Withholding of Removal, and Convention Against Torture</li>
					</ul>
					<br/>
					<p>Ya sea que esté lidiando con un problema de por vida (baja autoestima, trauma, depresión, ansiedad) o lidiando con problemas de una fase de su vida (crianza, duelo / pérdida, problemas de pareja, estrés laboral / escolar, problemas médicos crónicos), la terapia puede ayudarlo(a) a identificar patrones que lo(a) limitan y aprender nuevas habilidades para manejar sus pensamientos, sentimientos y comportamientos. Si está listo(a) para cambiar la forma en que se siente, estoy lista para trabajar usted. Ofrezco servicios de consejería culturalmente sensibles, tanto en inglés como en español y doy la bienvenida a todas las etnicidades, habilidades, antecedentes culturales e identidades sexuales / de género. Aunque mi pasión se centra en la autoestima, la autoaceptación, la resiliencia y el crecimiento postraumático, mis áreas de especialidad incluyen: Ansiedad, Depresión, trabajo con sobrevivientes de violencia doméstica, sobrevivientes de trauma infantil y trauma complejo. También soy LCSW-S y estoy disponible para supervisión clínica. </p>
					<br/>
					<h5>Ofrezco evaluaciones psicosociales para casos de inmigración para su uso en las siguientes situaciones:</h5>
					<br/>
					<ul>
						<li>Exenciones por dificultades (I-601 e I-601A)</li>
						<li>Cancelación de la eliminación</li>
						<li>VAWA y abuso conyugal</li>
						<li>Visas</li>
						<li>Asilo, retención de expulsión y Convención contra la Tortura</li>
					</ul>
					<br/>
					<br/>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</>
  )
}
export default Desire;