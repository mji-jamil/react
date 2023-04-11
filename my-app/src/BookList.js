import Book from './components/Book';
import './index.css';

// const MyName = () => <h1>My Name is Jamil</h1>;
// const Message = () => <p>This is my message.</p>
const firstBook = {
	author: 'Peter Attia MD',
	title: 'Outlive: The Science and Art of Longevity',
	img: 'images/book01.jpg',
};

const secondBook = {
	author: 'James Clear',
	title: 'Atomic Habits',
	img: 'images/book02.jpg',
};
const thirdBook = {
	author: ' Dav Pilkey',
	title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
	img: 'images/book03.jpg',
};

function BookList() {
	return (
		<>
			<div className="booklist">
				<Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
				<Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
				<Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img}/>
			</div>
		</>
	);
}

export default BookList;
