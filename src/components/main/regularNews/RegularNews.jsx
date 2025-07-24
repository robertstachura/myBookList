import "./regularNews.scss";
import News from "./news/News";
import MiniReview from "./miniReview/MiniReview";
export default function RegularNews() {
	return (
		<section id="news" className="news-section section">
			<div className="news-box">
				{/* <h3>News</h3> */}
				<News />
				<News />
				<News />
				<News />
				<News />
				<News />
				<News />
			</div>
			<div className="review-box">
				<MiniReview />
				<MiniReview />
				<MiniReview />
				<MiniReview />
				<MiniReview />
				<MiniReview />
			</div>
		</section>
	);
}
