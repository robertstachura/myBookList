import AuthorHeader from "../../components/Trash/Author-header";
import AuthorOverviews from "./Author-overviews";
import defaultImg from "../../assets/placeholder.png";

import "./Author-page.scss";
import { useEffect, useState } from "react";
import DescriptionBox from "../Book-page/DescriptionBox";
import BannerBox from "../Book-page/Banner-box";
import { BookFilledIcon } from "../../assets/Icon/UiIcon";
import RankingLabel from "../../components/RankingLabel/RankingLabel";
import DataCharts from "../../components/Data/Data-charts/Data-charts";
import { useParams } from "react-router-dom";
import MediaBox from "../../components/MediaBox/MediaBox";

export default function AuthorPage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [author, setAuthor] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				setLoading(true);
				// const response = await fetch(`http://localhost:8080/author/${id}`);
				const response = await fetch(
					`http://localhost:8080/author/${id}/overview`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setAuthor(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchAuthor();
	}, [id]);

	return (
		<div className="author-page">
			<header className="author-page__banner">
				<BannerBox />
			</header>

			<section className="author-page__description">
				<DescriptionBox />
			</section>

			<section className="author-page__highlighted">
				<div className="author-highlighted">
					<h4 className="author-highlighted__header">
						Liczba przeczytanych książek autora
					</h4>
					<div className="author-highlighted__content">
						<BookFilledIcon className={"author-highlighted__content-icon"} />
						<p className="author-highlighted__content-value">52367</p>
					</div>
				</div>

				<div className="author-highlighted">
					<h4 className="author-highlighted__header">Ilość zdobytych nagród</h4>
					<div className="author-highlighted__content">
						<BookFilledIcon className={"author-highlighted__content-icon"} />
						<p className="author-highlighted__content-value">52367</p>
					</div>
				</div>

				<div className="author-highlighted">
					<h4 className="author-highlighted__header">Średnia ocen</h4>
					<div className="author-highlighted__content">
						<BookFilledIcon className={"author-highlighted__content-icon"} />
						<p className="author-highlighted__content-value">52367</p>
					</div>
				</div>

				<div className="author-highlighted">
					<h4 className="author-highlighted__header">Liczba polubień</h4>
					<div className="author-highlighted__content">
						<BookFilledIcon className={"author-highlighted__content-icon"} />
						<p className="author-highlighted__content-value">52367</p>
					</div>
				</div>
			</section>

			<section className="author-page__charts">
				<DataCharts
					chart={author?.startReadingChartDataDto}
					header={"Readers Over Time"}
				/>
				<DataCharts
					chart={author?.ratingChartDataDto}
					header={"Rating Over Time"}
				/>
			</section>

			<section className="author-page__sidebar">
				<div className="author-page__sidebar-ranking">
					<RankingLabel icon="star" text="#3 Najwyżej oceniane" link="" />
					<RankingLabel icon="heart" text="#3 Ranking polubień" link="" />
				</div>

				<div className="author-page__sidebar-awards">
					<a href="" className="award-item">
						Nagroda nike
					</a>
				</div>

				<MediaBox />
			</section>

			{/* <main className="content-box">
				<div className="content-box__nav content-wrapper"></div>
			</main> */}
		</div>
	);
}
