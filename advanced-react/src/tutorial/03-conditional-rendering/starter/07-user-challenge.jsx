import { useState } from 'react';

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const data = {
		name: 'Jamil',
	};

	const logIn = () => {
		setUser(data.name);
	};

	const logOut = () => {
		setUser(null);
	};

	return (
		<>
			<div>
				{!user ? (
					<>
						<h4>Please Login</h4>
						<button type="button" className="btn" onClick={logIn}>
							Login
						</button>
					</>
				) : (
					<>
						<>Hello, {user}</>
						<br />
						<button type="button" className="btn" onClick={logOut}>
							Logout
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default UserChallenge;
