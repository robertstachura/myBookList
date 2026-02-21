import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../C/review/Review";
import "./Review-container.scss";

export default function ReviewContainer() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [mostUsefulReviews, setMostUsefulReviews] = useState([]);
	const [recentReviews, setRecentReviews] = useState([]);

	useEffect(() => {
		const fetchAuthor = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`http://localhost:8080/author/${id}/reviews`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setMostUsefulReviews(data.mostUsefulReviews);
				setRecentReviews(data.recentReviews);
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
		<section className="review-container">
			<div className="review-container__box">
				<h3 className="review-container__box-header">Most useful</h3>
				<div className="review-container__box-content">
					{mostUsefulReviews?.map(
						({
							id,
							userName,
							reviewCount,
							bookTitle,
							bookAvgScore,
							status,
							rating,
							title,
							content,
							hasSpoilers,
							helpfulCountPlus,
							helpfulCountMinus,
							helpfulValue,
							commentsCount,
							createdAt,
							updatedAt,
						}) => {
							return (
								<Review
									id={id}
									userName={userName}
									reviewCount={reviewCount}
									bookTitle={bookTitle}
									bookAvgScore={bookAvgScore}
									status={status}
									rating={rating}
									title={title}
									content={content}
									hasSpoilers={hasSpoilers}
									helpfulCountPlus={helpfulCountPlus}
									helpfulCountMinus={helpfulCountMinus}
									helpfulValue={helpfulValue}
									commentsCount={commentsCount}
									createdAt={createdAt}
									updatedAt={updatedAt}
								/>
							);
						},
					)}
				</div>
				<h3 className="review-container__box-header">Recent</h3>
				<div className="review-container__box-content">
					{recentReviews?.map(
						({
							id,
							userName,
							reviewCount,
							bookTitle,
							bookAvgScore,
							status,
							rating,
							title,
							content,
							hasSpoilers,
							helpfulCountPlus,
							helpfulCountMinus,
							helpfulValue,
							commentsCount,
							createdAt,
							updatedAt,
						}) => {
							return (
								<Review
									id={id}
									userName={userName}
									reviewCount={reviewCount}
									bookTitle={bookTitle}
									bookAvgScore={bookAvgScore}
									status={status}
									rating={rating}
									title={title}
									content={content}
									hasSpoilers={hasSpoilers}
									helpfulCountPlus={helpfulCountPlus}
									helpfulCountMinus={helpfulCountMinus}
									helpfulValue={helpfulValue}
									commentsCount={commentsCount}
									createdAt={createdAt}
									updatedAt={updatedAt}
								/>
							);
						},
					)}
				</div>
			</div>
		</section>
	);
}
