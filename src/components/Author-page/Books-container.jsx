import Book from "../C/book/Book";
import img from "../../assets/placeholder.png";
// import img from "../../assets/icon/placeholder.png";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Books-container.scss";
export default function BooksContainer() {
	const [booksByYear, setBooksByYear] = useState([]);
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`http://localhost:8080/author/${id}/books`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setBooksByYear(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchBooks();
	}, [id]);

	if (loading) return <div>Ładowanie...</div>;
	if (error) return <div>Błąd: {error}</div>;

	if (!booksByYear || booksByYear.length === 0)
		return (
			<div className="error-container">
				<i class="ti ti-search"></i>
				<p className="error-container__text">Brak książek autora</p>
			</div>
		);

	return (
		<section className="autor-book-section">
			{booksByYear.map(({ year, books }) => (
				<div className="books-container" key={year}>
					<h3 className="books-container__header">{year}</h3>
					<div className="books-container__books ">
						<div className="books-container__books-content">
							{books.map(({ id, title, description, avgScore }) => {
								return (
									<Book
										key={id}
										img={img}
										title={title}
										description={description}
										avgScore={avgScore}
										// descriptionClass={}
									/>
								);
							})}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
