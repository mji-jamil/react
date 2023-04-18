import { useState } from 'react';
import { data } from '../../../data';
const UserChallenge = () => {
	const [name, setName] = useState('');
	const [users, setUsers] = useState(data);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name);
		if (!name) return;
		const fakeId = 10;
		const newUser = {
			id: fakeId,
			name: name,
		};
		const updatedUser = [...users, newUser];
		setUsers(updatedUser);
		console.log('form submitted');
	};

	const removeUser = (id) => {
		const afterRemoved = users.filter((user) => user.id !== id);
		setUsers(afterRemoved);
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<h4>Add User</h4>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						name
					</label>
					<input
						type="text"
						className="form-input"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-block">
					submit
				</button>
			</form>
			{/* render users below */}
			<h2>Users</h2>
			<h4>
				{users.map((user) => {
					return (
						<>
							<div key={user.id}>{user.name}</div>
							<button type="button" className="btn" onClick={() => removeUser(user.id)}>
								Remove
							</button>
						</>
					);
				})}
			</h4>
		</div>
	);
};
export default UserChallenge;
