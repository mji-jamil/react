const EvantExamples = () => {
	const handleButtonClick = () => {

		alert('Submit button Clicked');
	};

	const handleFormInput = (e) => {
		// console.log(e);
		console.log(e.target);
		console.log(e.target.name);
		console.log(e.target.vlaue);
		console.log('Handle form input');
	};

	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
	}

	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h2>Form</h2>
				<input type="text" name="product" style={{ margin: '1rem 0' }} onChange={handleFormInput}/>
				<button type="submit" onClick={handleButtonClick}>
					Submit
				</button>
			</form>
		</section>
	);
};
export default EvantExamples;
