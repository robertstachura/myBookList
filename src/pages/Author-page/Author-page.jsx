import AuthorDetails from "../../components/Trash/Author-details";
import AuthorHeader from "../../components/Author-page/Author-header";
import AuthorOverviews from "../../components/Author-page/Author-overviews"

import "./Author-page.scss";
import { useState, Suspense, lazy } from "react";

export default function AuthorPage() {
	const BooksContainer = lazy(() =>
		import("../../components/Author-page/Books-container")
	);
	const ReviewContainer = lazy(() =>
		import("../../components/Author-page/Review-container")
	);

	const [currentContent, setCurrentContent] = useState(0);

	const contentComponents = {
		0: <AuthorOverviews />,
		1: <BooksContainer />,
		2: <ReviewContainer />
	};
	return (
		<>
			<AuthorHeader />

			<main className="content-box">
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
						Books
					</button>
					<button
						className={`content-box__nav-btn ${
							currentContent === 2 ? "active" : ""
						}`}
						onClick={() => setCurrentContent(2)}>
						Review
					</button>
				</div>

				<Suspense fallback={<div className="loading">Ładowanie...</div>}>
					{contentComponents[currentContent] || contentComponents[0]}
				</Suspense>
			</main>
		</>
	);
}
