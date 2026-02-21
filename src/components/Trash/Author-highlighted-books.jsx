import "./Author-highlighted-books.scss";
import Book from "../C/book/Book";

import img from "../../assets/icon/placeholder.png"

export default function AuthorHighlightedBooks() {
	return (
		<div className="highlighted-books">
			<div className="highlighted-books__book">
				<h3 className="highlighted-books__book-header">Most favorite book</h3>
				<Book
					key={1}
					img={img}
					title={"title"}
					description={"description"}
					avgScore={8.8}
				/>
			</div>
            <div className="highlighted-books__book">
				<h3 className="highlighted-books__book-header">Most favorite book</h3>
				<Book
					key={1}
					img={img}
					title={"title"}
					description={"description"}
					avgScore={8.8}
				/>
			</div>
            <div className="highlighted-books__book">
				<h3 className="highlighted-books__book-header">Most favorite book</h3>
				<Book
					key={1}
					img={img}
					title={"title"}
					description={"description"}
					avgScore={8.8}
				/>
			</div>
            <div className="highlighted-books__book">
				<h3 className="highlighted-books__book-header">Most favorite book</h3>
				<Book
					key={1}
					img={img}
					title={"title"}
					description={"description"}
					avgScore={8.8}
				/>
			</div>
			
		</div>
	);
}

// Most awaited book
// First book
// Most rating book