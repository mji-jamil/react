import { useState } from 'react';

const UseStateBasics = () => {
	const [count, setCount] = useState(0);
	const handleClick = () =>  {
		setCount(count + 1)
	}
	return (
		<>
			<h4>You Clicked {count} times</h4>
			<button className='btn' type='button' onClick={handleClick}>Click</button>
		</>
	);
};

export default UseStateBasics;
