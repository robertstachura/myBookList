import { useState } from "react";
import "./Book.scss";

export default function BookItem({
	img,
	// title,
	description,
	avgScore,
	favoriteCount,
	isFavorite,
	timer,
	descriptionClass,
}) {
	// const [hovered, setHovered] = useState(false);
	const [actionsOpen, setActionsOpen] = useState(false);
	return (
		<div className="item">
			{timer && <p className="timer">{timer}</p>}
			<div className="book-img" style={{ backgroundImage: `url(${img})` }}>
				<div className="info-box">
					{/* <h3 className="info-box__title">{title}</h3> */}
					<div
						className="quick-actions"
						onMouseLeave={() => setActionsOpen(false)}>
						<div
							className="quick-actions__btn quick-actions__btn-open-btn"
							onMouseEnter={() => setActionsOpen(true)}>
							<i class="ti ti-pencil"></i>
						</div>
						<div
							className={`quick-actions__actions ${actionsOpen ? "quick-actions__actions-open" : ""}`}>
							<button
								className="quick-actions__actions-current-btn quick-actions__btn quick-actions__btn-action-btn"
								label="Mark as Current">
								<i class="ti ti-player-play"></i>
							</button>
							<button
								className="quick-actions__actions-planning-btn quick-actions__btn quick-actions__btn-action-btn"
								label="Add to Planning">
								<i class="ti ti-calendar-plus"></i>
							</button>
							<button
								className="quick-actions__actions-completed-btn quick-actions__btn quick-actions__btn-action-btn"
								label="Set to Watching">
								<i class="ti ti-checks"></i>
							</button>
						</div>
					</div>

					{/* <button className="info-box__icon-container-show-button"><i class="ti ti-circle-plus"></i></button> 
						 <button
							className="info-box__stats-favorite"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}>
							<div className="icon-container">
								<div
									className={`icon-normal ${hovered ? "hidden" : "visible"}`}>
									{isFavorite ? (
										<i class="ti ti-heart-filled"></i>
									) : (
										<i class="ti ti-heart"></i>
									)}
								</div>

								<div className={`icon-hover ${hovered ? "visible" : "hidden"}`}>
									{isFavorite ? (
										<i class="ti ti-heart"></i>
									) : (
										<i class="ti ti-heart-filled"></i>
									)}
								</div>
							</div>
						</button> */}
				</div>
			</div>
			<div>
				<div className={`book-description-box ${descriptionClass}`}>
					<div className="book-description-box__space-box"></div>
					<div className={`book-description-box__content ${descriptionClass}`}>
						<div className="book-description-box__content-header">
							<p className="book-description-box__content-header-avgs">
								{avgScore}
							</p>
							<p className="book-description-box__content-header-favorite">
								{favoriteCount}
							</p>
						</div>
						<div className="book-description-box__content-line"></div>
						<div className="book-description-box__content-text">
							<p className="book-description-box__content-value">
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
