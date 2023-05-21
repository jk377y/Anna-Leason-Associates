import IMAGES from '../assets/images/index'

const Information = () => {
	return (
		<>
			<div className="info-outer-container">
				<div className="info-payment-container">
					<h3>Payment and Insurance</h3>
					<p>&#x2714;&emsp;UHC, Cigna, Compsych, Aetna, Optum, Beacon, Blue Cross/Blue Shield and more accepted.</p>
					<p>&#x2714;&emsp;Credit Cards accepted</p>
					<p>&#x2714;&emsp;Private Pay - $125</p>
					<p>&#x2714;&emsp;Sliding scale for cash payments and intern</p>
					<p>&#x2714;&emsp;Adult and Child AD/HD Evaluation and Report - $200</p>
					<p>&#x2714;&emsp;Emotional Therapy Pet Evaluation and Report - $200</p>
					<p>&#x2714;&emsp;Immigration Evaluation - $600</p>
					<p>&#x2714;&emsp;Expedited Immigration Evaluation - $700</p>
					<br/>
					<h4>Serving children and adults</h4>
				</div>

				<div className="info-img-paperwork-container">
					<div className="info-img-container">
						<img src={IMAGES.officeGIF}></img>
					</div>
					<div className="info-paperwork-container">
						<h3>Required Paperwork</h3>
						<p>Before your first visit, please complete and submit required information online by clicking <a href="https://hipaa.jotform.com/203186077433051" className="info-comm-link" target='_blank' rel="noreferrer">HERE</a></p>
					</div>
				</div>


			</div>
		</>
	);
};

export default Information;
