import '../index.css';

const Book = (props) => {
	const { author, title, img, number } = props;
	// console.log(props);
	// const displayTitle = () => {
	// 	console.log(title);
	// };

	return (
		<>
			<div className="book">
				<span className="number">{`#${number}`}</span>
				{/* <h1>{number}</h1> */}
				<img src={img} alt={title} />
				<p>{title}</p>
				{/* <button onClick={displayTitle}>Show Title</button> */}
				{/* <button onClick={() => getBook(id)}>Show Book Details</button> */}
				{/* <button onClick={() => test()}>test button</button> */}
				<h3> {author} </h3>
				{/* <span className='number'>{`#${number}`}</span> */}
				{/* {children} */}
			</div>
		</>
	);
};
export default Book;
