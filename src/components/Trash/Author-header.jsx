import "./Author-header.scss";
import defaultImg from "../../assets/placeholder.png";
import Tooltip from "../C/Tooltip/Tooltip";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AuthorHeader() {
	// const [author, setAuthor] = useState(null);
	// const { id } = useParams();
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const fetchAuthor = async () => {
	// 		try {
	// 			setLoading(true);
	// 			const response = await fetch(`http://localhost:8080/author/${id}`);

	// 			if (!response.ok) {
	// 				throw new Error(`HTTP error! status: ${response.status}`);
	// 			}

	// 			const data = await response.json();
	// 			setAuthor(data);
	// 		} catch (err) {
	// 			setError(err.message);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchAuthor();
	// }, [id]);

	// if (loading) return <div>Ładowanie...</div>;
	// if (error) return <div>Błąd: {error}</div>;

	return (
		<header className="author-header content-wrapper">
			{/* <div className="author-banner">
				<img src={defaultImg} alt="" className="author-banner__img" />

				<div className="author-banner__actions">
					<button className="author-banner__actions-add-btn">
						Add to list
					</button>
					<button className="author-banner__actions-favorite-btn">
						<i class="ti ti-heart"></i>
					</button>
				</div>
			</div>

			<div className="author-description">
				<div className="author-description__header">
					<p className="author-description__header-name">{author?.authorName}</p>
				</div>
				<p className="author-description__text">{author?.description}</p>
			</div> */}
		</header>
	);
}
