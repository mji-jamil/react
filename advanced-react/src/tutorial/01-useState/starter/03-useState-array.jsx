import { useState } from 'react';
import { data } from './../../../data';
const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	const removePeople = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		console.log(newPeople);
		setPeople(newPeople);
	};
	return (
		<>
			<div>
				{people.map((data) => {
					return (
						<div key={data.id}>
							<h3>{data.name}</h3>
							<button type="button" onClick={() => removePeople(data.id)}>
								Remove
							</button>
						</div>
					);
				})}
			</div>
			<button onClick={() => setPeople([])} className='btn'>Remove All</button>
		</>
	);
};

export default UseStateArray;
