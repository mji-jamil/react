import Book from './components/Book';
// import EvantExamples from './components/EvantExamples';
import './index.css';

// const MyName = () => <h1>My Name is Jamil</h1>;
// const Message = () => <p>This is my message.</p>
const books = [
	{
		id: 1,
		author: 'Peter Attia MD',
		title: 'Outlive: The Science and Art of Longevity',
		img: 'images/book01.jpg',
	},
	{
		id: 2,
		author: 'James Clear',
		title: 'Atomic Habits',
		img: 'images/book02.jpg',
	},
	{
		id: 3,
		author: ' Dav Pilkey',
		title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
		img: 'images/book03.jpg',
	},
];

// const firstBook = {
// 	author: 'Peter Attia MD',
// 	title: 'Outlive: The Science and Art of Longevity',
// 	img: 'images/book01.jpg',
// };

// const secondBook = {
// 	author: 'James Clear',
// 	title: 'Atomic Habits',
// 	img: 'images/book02.jpg',
// };
// const thirdBook = {
// 	author: ' Dav Pilkey',
// 	title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
// 	img: 'images/book03.jpg',
// };

function BookList() {
	// const someValue = 'shakeAndBake';
	// const getBook = (id) => {
	// 	const book = books.find((book) => book.id === id);
	// 	console.log(book);
	// };

	// const test = () => {
	// 	console.log("test function");
	// }

	return (
		<>
			<div className="booklist">
				{/* <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
					<p>
						Lorem, ipsum dolor sit amet, consectrtur adipisicing elit. Odio fugiat qui officials incidunt
						ullam, a laborum.
					</p>
					<button>Click Me</button>
				</Book>
				<Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
				<Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img} /> */}
				{/* {books.map((book) => {
					const {img, title, author, id} = book;
					return (
						<Book img={img} title={title} author={author} key={id}/>
					)
				})} */}
				{/* <EvantExamples /> */}
				<h1>Amazon Best Sellers</h1>
				{books.map((book, index) => {
					// const { img, title, author, id } = book;
					return <Book {...book} key={book.id} number={index + 1} />;
				})}
			</div>
		</>
	);
}

export default BookList;
