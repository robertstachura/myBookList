import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AuthorPage from "./pages/Author-page/Author-page";
import BookPage from "./pages/Book-page/Book-page";
import BookReviewPage from "./pages/Review-page/BookReviewPage";
import {
	BookIcon,
	BookFilledIcon,
	BooksIcon,
	BookSecondIcon,
	MugIcon,
	MugFilledIcon,
	CoffeeIcon,
} from "./assets/Icon/BackgroundIcon";
import ReviewsPage from "./pages/Reviews-page/ReviewsPage";
import LibraryModal from "./pages/Book-page/Library-modal";
// import BookBgIcon from "./assets/Icon/background/book-bg-icon.svg";

export default function App() {
	return (
		<Router>
			<div className="App">
				<BookIcon className="bgIcon bookIcon" />
				<BookFilledIcon className="bgIcon bookFilledIcon" />
				<BooksIcon className="bgIcon booksIcon" />
				<BookSecondIcon className="bgIcon bookSecondIcon" />
				<MugIcon className="bgIcon mugIcon" />
				<MugFilledIcon className="bgIcon mugFilledIcon" />
				<CoffeeIcon className="bgIcon coffeeIcon" />

				<Nav />

				{/* Definicja tras */}
				<Routes>
					{/* <Route path="/" element={<HomePage/>} /> */}
					<Route path="/author/:id" element={<AuthorPage />} />
					<Route path="/book/:id" element={<BookPage />} />
					<Route path="/review/:id" element={<BookReviewPage />} />
					<Route path="/reviews" element={<ReviewsPage />} />

					{/* Trasa z parametrem */}
					{/* <Route path="/products/:id" element={<ProductDetail />} /> */}

					{/* Przekierowanie */}
					{/* <Route path="/old-about" element={<Navigate to="/about" replace />} /> */}

					{/* Strona 404 - musi być na końcu */}
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</div>
		</Router>
	);
}
