import { useEffect, useState } from 'react';

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);
	console.log('hi');
	return (
		<>
			<div>
				<button className="btn" onClick={() => setToggle(!toggle)}>
					Toggle
				</button>
				{toggle && <RandomComponent />}
			</div>
		</>
	);
};

const RandomComponent = () => {
	// useEffect(() => {
	// 	// console.log('hmm, this is interesting...');
	// 	const intId = setInterval(() => {
	// 		// console.log('Hello from interval');
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(intId);
	// 		console.log('cleanup');
	// 	};
	// }, []);
	// return <h1>Hello there</h1>
	useEffect(() => {
		const someFunc = () => {};
		window.addEventListener('scroll', someFunc);
		return () => window.removeEventListener('scroll', someFunc);
	}, []);
};

export default CleanupFunction;
