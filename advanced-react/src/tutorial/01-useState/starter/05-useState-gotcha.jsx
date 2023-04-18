import { useState } from 'react';

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	// const handleClick = () => {
	// 	setValue((currentState) => {
	// 		const newState = currentState + 1;
	// 		console.log(newState);
	// 		return newState;
	// 		// console.log(currentState); 
	// 	});
	// };

	const handleClick = () => {
		setTimeout(() => {
			setValue((currentValue) => {
				let latestVal = currentValue + 1
				return latestVal;
			})
		}, 3000)
	}
	return (
		<>
			<h1>{value}</h1>
			<button onClick={handleClick} type="button" className="btn">
				Increase{' '}
			</button>
		</>
	);
};

export default UseStateGotcha;
