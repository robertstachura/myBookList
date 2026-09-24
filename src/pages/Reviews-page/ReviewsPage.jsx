import {
	ArrowDownIcon,
	ArrowUpIcon,
	MessageIcon,
} from "../../assets/Icon/UiIcon";
import ReviewCard from "../../components/Review/ReviewCard";
import "./ReviewsPage.scss";
export default function ReviewsPage() {
	return (
		<div className="reviews-page">
			<h2 className="reviews-page__header">Ostatnio dodane</h2>
			<div className="reviews-page__reviews">
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
			</div>

			<h2 className="reviews-page__header">Najlepiej oceniane</h2>
			<div className="reviews-page__reviews">
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
			</div>
		</div>
	);
}
