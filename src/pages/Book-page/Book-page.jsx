import BookHeader from "./DescriptionBox";
import "./Book-page.scss";
import { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import BookBanner from "./Book-banner";
import DescriptionBox from "./DescriptionBox";
import DistributionScoreData from "../../components/Data/Distribution-score-data/Distribution-score-data";
import DistributionStatusData from "../../components/Data/Distribution-status-data/Distribution-status-data";
import DataCharts from "../../components/Data/Data-charts/Data-charts";
import MediaBox from "../../components/MediaBox/MediaBox";

import {
	StarFilledIcon,
	StarsFilledIcon,
	HeartFilledIcon,
	MessageIcon,
	MessageFilledIcon,
	ArrowDownFilledIcon,
	ArrowDownIcon,
	ArrowUpFilledIcon,
	ArrowUpIcon,
} from "../../assets/Icon/UiIcon";

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

			<section className="book-page__sidebar">
				<div className="book-page__highlighted margin-bottom">
					<a className="book-page__highlighted-item ">
						<StarsFilledIcon className="book-page__highlighted-icon star-icon" />
						{/* <StarFilledIcon className="book-page__highlighted-icon"/> */}
						<p className="book-page__highlighted-content">
							#3 Najwyżej oceniane
						</p>
					</a>
					<a className="book-page__highlighted-item heart-icon">
						<HeartFilledIcon className="book-page__highlighted-icon" />
						<p className="book-page__highlighted-content">
							#3 Ranking polubień
						</p>
					</a>
					<a className="book-page__highlighted-item ">
						<StarFilledIcon className="book-page__highlighted-icon star-icon" />
						{/* <StarFilledIcon className="book-page__highlighted-icon"/> */}
						<p className="book-page__highlighted-content">
							#3 Najwyżej oceniane w roku 2025
						</p>
					</a>
					<a className="book-page__highlighted-item heart-icon">
						<HeartFilledIcon className="book-page__highlighted-icon" />
						<p className="book-page__highlighted-content">
							#3 Ranking polubień w roku 2025
						</p>
					</a>
					<a className="book-page__highlighted-item heart-icon">
						<HeartFilledIcon className="book-page__highlighted-icon" />
						<p className="book-page__highlighted-content">
							#3 Najwyżej oceniane w fantasy
						</p>
					</a>
					<a className="book-page__highlighted-item heart-icon">
						<HeartFilledIcon className="book-page__highlighted-icon" />
						<p className="book-page__highlighted-content">
							#3 Ranking polubień w fantasy
						</p>
					</a>
				</div>

				<div className="book-page__tags margin-bottom">
					<a className="book-page__tags-item">fantasy</a>
					<a className="book-page__tags-item">action</a>
					<a className="book-page__tags-item">wefwgwgws</a>
					<a className="book-page__tags-item">wfwaaweffaw</a>
					<a className="book-page__tags-item">abcada</a>
					<a className="book-page__tags-item">abadafc</a>
					<a className="book-page__tags-item">abcaff</a>
				</div>

				<div className="book-page__awards margin-bottom">
					<a href="" className="book-page__awards-item">
						Nagroda nike
					</a>
					<a href="" className="book-page__awards-item">
						Nagroda nike
					</a>
				</div>
				<MediaBox />
			</section>

			<section className="book-page__overview">
				<div className="book-page__reviews margin-bottom">
					<a className="book-page__reviews-item">
						<div className="book-page__reviews-header">
							<p>
								<ArrowUpIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<ArrowDownIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<MessageIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>20-11-2024</p>
						</div>
						<p className="book-page__reviews-content">
							woiafn awoi awioao jniewfq liowa oawon poawj
						</p>
					</a>
					<a className="book-page__reviews-item">
						<div className="book-page__reviews-header">
							<p>
								<ArrowUpIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<ArrowDownIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<MessageIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>20-11-2024</p>
						</div>
						<p className="book-page__reviews-content">
							woiafn awoi awioao jniewfq liowa oawon poawj
						</p>
					</a>
					<a className="book-page__reviews-item">
						<div className="book-page__reviews-header">
							<p>
								<ArrowUpIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<ArrowDownIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<MessageIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>20-11-2024</p>
						</div>
						<p className="book-page__reviews-content">
							woiafn awoi awioao jniewfq liowa oawon poawj
						</p>
					</a>
					<a className="book-page__reviews-item">
						<div className="book-page__reviews-header">
							<p>
								<ArrowUpIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<ArrowDownIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<MessageIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>20-11-2024</p>
						</div>
						<p className="book-page__reviews-content">
							woiafn awoi awioao jniewfq liowa oawon poawj
						</p>
					</a>
					<a className="book-page__reviews-item">
						<div className="book-page__reviews-header">
							<p>
								<ArrowUpIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<ArrowDownIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>
								<MessageIcon className={"book-page__reviews-icon"} /> 13
							</p>
							<p>20-11-2024</p>
						</div>
						<p className="book-page__reviews-content">
							woiafn awoi awioao jniewfq liowa oawon poawj
						</p>
					</a>
					<a className="book-page__reviews-item book-page__reviews-all">
						Wyszstkie recenzje
					</a>
				</div>

				<div className="book-page__status-distribution margin-bottom">
					<DistributionStatusData stats={stats} />
				</div>

				<div className="book-page__score-distribution margin-bottom">
					<DistributionScoreData ratings={rating} />
				</div>

				<div className="book-page__rating-over-time margin-bottom">
					<DataCharts chart={ratingChart} header={"Rating Over Time"} />
				</div>

				<div className="book-page__readers-over-time margin-bottom">
					<DataCharts chart={ratingChart} header={"Readers Over Time"} />
				</div>

				<div className="book-page__recomendation"></div>
			</section>
		</div>
	);
}
