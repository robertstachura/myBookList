import BookHeader from "./DescriptionBox";
import BookOverviews from "./Book-overviews";
import "./Book-page.scss";
import { useState, Suspense, lazy } from "react";
import BookBanner from "./Book-banner";
import DescriptionBox from "./DescriptionBox";

export default function BookPage() {
	// const BooksContainer = lazy(() => import("./Books-container"));
	// const ReviewContainer = lazy(() => import("./Review-container"));

	const [currentContent, setCurrentContent] = useState(0);

	const contentComponents = {
		0: <BookOverviews />,
		// 1: <BooksContainer />,
		// 2: <ReviewContainer />
	};

	return (
		<div className="book-page">
			<header className="book-page__banner">
				<BookBanner />
			</header>

			<div className="book-page__description">
				<DescriptionBox />
			</div>

			{/* <BookHeader /> */}

			{/* <main className="content-box">
				<div className="content-box__nav content-wrapper">
					<button
						className={`content-box__nav-btn ${
							currentContent === 0 ? "active" : ""
						}`}
						onClick={() => setCurrentContent(0)}>
						Overviews
					</button>
					<button
						className={`content-box__nav-btn ${
							currentContent === 1 ? "active" : ""
						}`}
						onClick={() => setCurrentContent(1)}>
						Reviews
					</button>
					
				</div>

				<Suspense fallback={<div className="loading">Ładowanie...</div>}>
					{contentComponents[currentContent] || contentComponents[0]}
				</Suspense>
			</main> */}
		</div>
	);
}
