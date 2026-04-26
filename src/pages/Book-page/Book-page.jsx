import BookHeader from "./DescriptionBox";
import "./Book-page.scss";
import { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import BookBanner from "./Book-banner";
import DescriptionBox from "./DescriptionBox";
import TagLabel from "../Label/TagLabel/TagLabel";
import DistributionScoreData from "../../components/C/Data/Distribution-score-data/Distribution-score-data";
import DistributionStatusData from "../../components/C/Data/Distribution-status-data/Distribution-status-data";
import DataCharts from "../../components/C/Data/Data-charts/Data-charts";
import MediaBox from "../../components/MediaBox/MediaBox";

export default function BookPage() {
	const { id } = useParams();
	// const BooksContainer = lazy(() => import("./Books-container"));
	// const ReviewContainer = lazy(() => import("./Review-container"));

	// const [currentContent, setCurrentContent] = useState(0);

	// const contentComponents = {
	// 	// 0: <BookOverviews />,
	// 	// 1: <BooksContainer />,
	// 	// 2: <ReviewContainer />
	// };

	const [rating, setRating] = useState(null);
	const [stats, setStats] = useState(null);
	const [ratingChart, setRatingChart] = useState(null);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				setLoading(true);
				const response = await fetch(`http://localhost:8080/book/${id}`);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setRating(data.booksRatingDto);
				setStats(data.booksStatusDistributionDto);
				setRatingChart(data.ratingChartDto);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchAuthor();
	}, [id]);

	if (loading) return <div>Ładowanie...</div>;
	if (error) return <div>Błąd: {error}</div>;

	return (
		<div className="book-page">
			<header className="book-page__banner">
				<BookBanner />
			</header>

			<section className="book-page__description">
				<DescriptionBox />
			</section>

			<section className="book-page__info">
				<div className="book-page__info-details">
					<div className="details-item">
						<h4 className="details-item__header">Wydawca</h4>
						<p className="details-item__content">Publisher</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Orginalny tytuł</h4>
						<p className="details-item__content">The way</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Data premiery</h4>
						<p className="details-item__content">The way</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Data premiery orginału</h4>
						<p className="details-item__content">The way</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Orginalny język</h4>
						<p className="details-item__content">The way</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Tłumacz</h4>
						<p className="details-item__content">Tłumacz</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">Format</h4>
						<p className="details-item__content">Twarda oprawa</p>
					</div>

					<div className="details-item">
						<h4 className="details-item__header">ISBN</h4>
						<p className="details-item__content">9780593801710</p>
					</div>
				</div>

				<div className="book-page__info-tags">
					<h3 className="">Tagi</h3>
					<TagLabel name="abc" />
					<TagLabel name="abc" />
					<TagLabel name="abc" />
					<TagLabel name="abc" />
					<TagLabel name="abc" />
					<TagLabel name="abc" />
					<TagLabel name="abc" />
				</div>

				<div className="book-page__info-media">
					<MediaBox />
				</div>

				<div className="book-page__info-reviews"></div>
			</section>

			<section className="book-page__highlighted">
				<div className="book-page__highlighted-item book-page__highlighted-year-score-ranking">
					<h4 className="book-page__highlighted-header">2025</h4>
					<p className="book-page__highlighted-position">3</p>
				</div>
				<div className="book-page__highlighted-item book-page__highlighted-year-favorite-ranking">
					<h4 className="book-page__highlighted-header">2025</h4>
					<p className="book-page__highlighted-position">3</p>
				</div>
				<div className="book-page__highlighted-item book-page__highlighted-genre-score-ranking">
					<h4 className="book-page__highlighted-header">Genre</h4>
					<p className="book-page__highlighted-position">3</p>
				</div>
				<div className="book-page__highlighted-item book-page__highlighted-genre-favorite-ranking">
					<h4 className="book-page__highlighted-header">Genre</h4>
					<p className="book-page__highlighted-position">3</p>
				</div>
				{/* <div className="book-page__highlighted-best-score"></div> */}
			</section>

			<section className="book-page__status-distribution">
				<DistributionStatusData stats={stats} />
			</section>

			<section className="book-page__score-distribution">
				<DistributionScoreData ratings={rating} />
			</section>

			<section className="book-page__rating-over-time">
				<DataCharts chart={ratingChart} header={"Rating Over Time"} />
			</section>

			<section className="book-page__readers-over-time">
				<DataCharts chart={ratingChart} header={"Readers Over Time"} />
			</section>

			<section className="book-page__recomendation"></section>
		</div>
	);
}
