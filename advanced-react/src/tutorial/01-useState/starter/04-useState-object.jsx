import { useState } from 'react';
import { people } from './../../../data';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		hobby: 'read book'
	});

	const displayPerson = () => {
		setPerson({
			name: 'Jamil',
			age: 28,
			hobby: 'Sleeping'
		})
	};

	const displayPerson2 = () => {
		setPerson({
			...person,
			name: 'Jamil',
		})
	};


	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h4>Enjoys: {person.hobby}</h4>
			<button className="btn" onClick={() => displayPerson()}>
				Show Jamil
			</button>
			<button className="btn" onClick={displayPerson}>
				Show Jamil2
			</button>
			<button className="btn" onClick={displayPerson2}>
				Show Jamil3
			</button>
		</>
	);
};

export default UseStateObject;
