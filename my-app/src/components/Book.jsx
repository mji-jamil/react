import '../index.css';

const Book = ( props ) => {
	const {author, title, img, children} = props;
	console.log(props);
	return (
		<>
			<div className="book">
				<img src={img} alt={title} />
				<p>{title}</p>
				<h3 style={{ color: 'green' }}> {author} </h3>
				{children}
			</div>
		</>
	);
};
export default Book;
