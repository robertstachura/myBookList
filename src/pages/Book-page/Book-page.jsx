import BookHeader from "./DescriptionBox";
import "./Book-page.scss";
import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import BookBanner from "../../components/Trash/Book-banner";
import DescriptionBox from "./DescriptionBox";
import DistributionScoreData from "../../components/Data/Distribution-score-data/Distribution-score-data";
import DistributionStatusData from "../../components/Data/Distribution-status-data/Distribution-status-data";
import DataCharts from "../../components/Data/Data-charts/Data-charts";
import MediaBox from "../../components/MediaBox/MediaBox";
import defaultImg from "../../assets/placeholder.png";
import StatsLabel from "../../components/StatsLabel/StatsLabel";

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
import ReviewCard from "../../components/Review/ReviewCard";
import RankingLabel from "../../components/RankingLabel/RankingLabel";
import LibraryModal from "./Library-modal";
import BannerBox from "./Banner-box";

export default function BookPage() {
	const { id } = useParams();

	const [rating, setRating] = useState(null);
	const [stats, setStats] = useState(null);
	const [ratingChart, setRatingChart] = useState(null);
	// const [isOpenModal, setIsOpenModal] = useState(false);

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

	console.log(ratingChart);

	if (loading) return <div>Ładowanie...</div>;
	if (error) return <div>Błąd: {error}</div>;

	return (
		<div className="book-page">
			<header className="book-page__banner">
				<BannerBox />
			</header>

			<section className="book-page__description">
				<DescriptionBox />
			</section>

			<section className="book-page__sidebar">
				<div className="book-page__highlighted margin-bottom">
					<RankingLabel icon="star" text="#3 Najwyżej oceniane" link="" />
					<RankingLabel icon="heart" text="#3 Ranking polubień" link="" />
					<RankingLabel
						icon="star"
						text="#3 Najwyżej oceniane w roku 2025"
						link=""
					/>
					<RankingLabel
						icon="heart"
						text="#3 Ranking polubień w roku 2025"
						link=""
					/>
					<RankingLabel
						icon="star"
						text="#3 Najwyżej oceniane w fantasy"
						link=""
					/>
					<RankingLabel
						icon="heart"
						text="#3 Ranking polubień w fantasy"
						link=""
					/>
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


				<ReviewCard />
			</section>

			<section className="book-page__overview">
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

				<div className="book-page__reviews margin-bottom">
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<a className="book-page__reviews-all">Wyszstkie recenzje</a>
				</div>

				<div className="book-page__recomendation"></div>
			</section>

			{/* <LibraryModal isActive={isOpenModal} /> */}
		</div>
	);
}
