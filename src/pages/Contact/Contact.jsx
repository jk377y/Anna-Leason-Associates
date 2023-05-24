import './Contact.css'

const Contact = () => {
	return (
		<>
			<div className="contact-outer-wrapper">
				<div className="contact-inner-wrapper">
					<h2 className="contact-title">Onsite or tele therapy appointments available</h2>
					<br/>
					<h3 className="contact-subtitle">Make an appointment or request more information</h3>
					<br/>
					<div className="contact-card-wrapper">
						<div className="contact-card">
							<h3 className="contact-person">Anna Leason, LCSW</h3>
							<p className="contact-data">Phone or Text: <a href="tel:713-303-9627" className="contact-comm-link">713-303-9627</a></p>
							<p className="contact-data">Email: <a href="mailto:annaleason7@gmail.com" className="contact-comm-link">annaleason7@gmail.com</a></p>
						</div>
						<div className="contact-card">
							<h3 className="contact-person">Teresa Linnemann, LMFT</h3>
							<p className="contact-data">Phone or Text: <a href="tel:346-298-9500" className="contact-comm-link">346-298-9500</a></p>
							<p className="contact-data">Email: <a href="mailto:teresalinnemann@counselingmail.com" className="contact-comm-link">teresalinnemann@counselingmail.com</a></p>
							<p className="contact-data">Visit my website <a href="https://www.isftherapy.com/" target="_blank" rel="noreferrer" className="contact-comm-link">isftherapy.com</a></p>
						</div>
						<div className="contact-card">
							<h3 className="contact-person">Leann Jenkins, LPC Associate</h3>
							<p className="contact-data">Phone or Text: <a href="tel:903-767-0435" className="contact-comm-link">903-767-0435</a></p>
							<p className="contact-data">Email: <a href="mailto:leann@gmail.com" className="contact-comm-link">leann@gmail.com</a></p>
						</div>
						<div className="contact-card">
							<h3 className="contact-person">Desiré Martinez, LCSW-S</h3>
							<p className="contact-data">Phone or Text: <a href="tel:281-671-7073" className="contact-comm-link">281-671-7073</a></p>
							<p className="contact-data">Email: <a href="mailto:dmartinez@counselingmail.com" className="contact-comm-link">dmartinez@counselingmail.com</a></p>
						</div>
						<div className="contact-card">
							<h3 className="contact-person">Tammy Davis, LCSW</h3>
							<p className="contact-data">Phone or Text: <a href="tel:979-398-2745" className="contact-comm-link">979-398-2745</a></p>
							<p className="contact-data">Email: <a href="mailto:tammydavis214@counselingmail.com" className="contact-comm-link">tammydavis214@counselingmail.com</a></p>
						</div>
						<div className="contact-card">
							<h3 className="contact-person">Reneka Clark, LCSW</h3>
							<p className="contact-data">Phone or Text: <a href="tel:713-303-9627" className="contact-comm-link">318-379-6504</a></p>
							<p className="contact-data">Email: <a href="mailto:rdclarklcsw@therapyemail.com" className="contact-comm-link">rdclarklcsw@therapyemail.com</a></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
