import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import DistributionStatusData from "../C/Data/Distribution-status-data/Distribution-status-data";
import DistributionScoreData from "../C/Data/Distribution-score-data/Distribution-score-data";
import DataCharts from "../C/Data/Data-charts/Data-charts";
import Book from "../C/book/Book";

import img from "../../assets/placeholder.png";

import "./Author-overviews.scss";
export default function AuthorStats() {
	// const [author, setAuthor] = useState(null);
	const { id } = useParams();

	const [authorOverviewsMainStats, setAuthorOverviewsMainStats] =
		useState(null);
	const [highlightedBooks, setHighlightedBooks] = useState(null);
	const [stats, setStats] = useState(null);
	const [ratingChart, setRatingChart] = useState(null);
	const [startReadingChart, setStartReadingChart] = useState(null);
	const [ratings, setRatings] = useState(null);
	const [details, setDetails] = useState(null);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`http://localhost:8080/author/${id}/overview`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				// setAuthor(data);
				setAuthorOverviewsMainStats(data.authorOverviewsMainStatsDto);
				setHighlightedBooks(data.highlightedBooksDto);
				setStats(data.authorBooksStatusDistributionDto);
				setRatings(data.authorBooksRatingDto);
				setRatingChart(data.ratingChartDataDto);
				setStartReadingChart(data.startReadingChartDataDto);
				setDetails(data.detailsDto);
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
		<section className="author-overviews">
			<div className="overview-details">
				<div className="overview-details__item">
					<h4 className="overview-details__item-header">Publisher:</h4>
					{details.publishers.map((p) => {
						return <p className="overview-details__item-value">{p.name}</p>;
					})}
				</div>

				<div className="overview-details__item">
					<h4 className="overview-details__item-header">Genres:</h4>
					{details.genres.map((g) => {
						return <p className="overview-details__item-value">{g.name}</p>;
					})}
				</div>

				<div className="overview-details__item">
					<h4 className="overview-details__item-header">Tags:</h4>
					{details.authorTags.map((t) => {
						return <p className="overview-details__item-value">{t.name}</p>;
					})}
				</div>

				<div className="overview-details__item">
					<h4 className="overview-details__item-header">Awards:</h4>
					{details.authorWinningAward.map((a) => {
						return <p className="overview-details__item-value">{a.name}</p>;
					})}
				</div>
			</div>

			<div className="author-overviews__main">
				<div className="author-overviews__main-stats">
					<div className="stats-card">
						<h4 className="stats-card__label">All books score</h4>
						<div className="stats-card__box">
							<i class="ti ti-stars stats-card__box-icon"></i>
							<p className="stats-card__box-value">
								{authorOverviewsMainStats.avgBooksScore}
							</p>
						</div>
					</div>

					<div className="stats-card">
						<h4 className="stats-card__label">Score counter</h4>
						<div className="stats-card__box">
							<i class="ti ti-star stats-card__box-icon"></i>
							<p className="stats-card__box-value">
								{authorOverviewsMainStats.scoreCounter}
							</p>
						</div>
					</div>

					<div className="stats-card">
						<h4 className="stats-card__label">Favorite</h4>
						<div className="stats-card__box">
							<i class="ti ti-heart stats-card__box-icon"></i>
							<p className="stats-card__box-value">
								{authorOverviewsMainStats.favoriteCounter}
							</p>
						</div>
					</div>

					<div className="stats-card">
						<h4 className="stats-card__label">Awards</h4>
						<div className="stats-card__box">
							<i class="ti ti-trophy stats-card__box-icon"></i>
							<p className="stats-card__box-value">
								{authorOverviewsMainStats.awards}
							</p>
						</div>
					</div>

					<div className="stats-card">
						<h4 className="stats-card__label">Writen books</h4>
						<div className="stats-card__box">
							<i class="ti ti-books	 stats-card__box-icon"></i>
							<p className="stats-card__box-value">
								{authorOverviewsMainStats.writeBooks}
							</p>
						</div>
					</div>
				</div>

				{highlightedBooks !== null ? (
					<div className="highlighted-books">
						<div className="highlighted-books__book">
							<h3 className="highlighted-books__book-header">First book</h3>
							<Book
								key={1}
								img={img}
								title={highlightedBooks.firstBook.title}
								description={highlightedBooks.firstBook.description}
								avgScore={highlightedBooks.firstBook.avgScore}
								favoriteCount={highlightedBooks.firstBook.favoriteCount}
							/>
						</div>
						<div className="highlighted-books__book">
							<h3 className="highlighted-books__book-header">
								Most rating book
							</h3>
							<Book
								key={1}
								img={img}
								title={highlightedBooks.mostRatingBook.title}
								description={highlightedBooks.mostRatingBook.description}
								avgScore={highlightedBooks.mostRatingBook.avgScore}
								favoriteCount={highlightedBooks.mostRatingBook.favoriteCount}
							/>
						</div>
						<div className="highlighted-books__book">
							<h3 className="highlighted-books__book-header">
								Most favorite book
							</h3>

							<Book
								key={1}
								img={img}
								title={highlightedBooks.mostFavoriteBook.title}
								description={highlightedBooks.mostFavoriteBook.description}
								avgScore={highlightedBooks.mostFavoriteBook.avgScore}
								favoriteCount={highlightedBooks.mostFavoriteBook.favoriteCount}
							/>
						</div>
						{highlightedBooks.mostAwaitedBook !== null ? (
							<div className="highlighted-books__book">
								<h3 className="highlighted-books__book-header">
									Most awaited book
								</h3>
								<Book
									key={1}
									img={img}
									title={highlightedBooks.mostAwaitedBook.title}
									description={highlightedBooks.mostAwaitedBook.description}
									avgScore={highlightedBooks.mostAwaitedBook.avgScore}
									favoriteCount={highlightedBooks.mostAwaitedBook.favoriteCount}
									descriptionClass={"description-box-left"}
								/>
							</div>
						) : (
							""
						)}
					</div>
				) : (
					""
				)}
				
				<h3 className="author-overviews__main-header">Status Distribution</h3>
				<DistributionStatusData stats={stats} />
				<h3 className="author-overviews__main-header">Score Distribution</h3>
				<DistributionScoreData ratings={ratings} />
				<h3 className="author-overviews__main-header">Rating Over Time</h3>
				<DataCharts chart={ratingChart} />
				<h3 className="author-overviews__main-header">Readers Over Time</h3>
				<DataCharts chart={startReadingChart} />
			</div>
		</section>
	);
}
