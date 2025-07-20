import "./review.scss"

export default function Review() {
	return (
		<div className="review">
			<div className="review__user-details">
				<img
					src="
                        https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_1280.jpg"
					alt=""
					className="review__user-details-avatar"
				/>
				<p className="review__user-details-name">Name</p>
				<p className="review__user-details-score"> 7.6/10</p>
				<div className="review__user-details-buttons">
					<button className="review-btn">
						<i class="ti ti-thumb-up"></i>
					</button>
					<button className="review-btn">
						<i class="ti ti-message"></i>
					</button>
					<button className="review-btn">
						<i class="ti ti-thumb-down"></i>
					</button>
				</div>
			</div>
			<p className="review__review-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minima voluptates similique velit repellendus libero quibusdam commodi atque adipisci. Mollitia adipisci magnam suscipit tempore exercitationem animi nam asperiores quia. Minima vel architecto ad, non, excepturi laboriosam aperiam pariatur eius asperiores corporis, rerum et vitae dolores porro soluta quas cum a.</p>
		</div>
	);
}
