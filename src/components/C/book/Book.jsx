import { useState } from "react";
import "./book.scss";

export default function BookItem({
	img,
	title,
	description,
	timer,
	isFavorite,
}) {
	const [hovered, setHovered] = useState(false);
	return (
		<div className="item" style={{ backgroundImage: `url(${img})` }}>
			{timer && <p className="timer">{timer}</p>}
			<div className="info-box">
				<h3 className="info-box__title">{title}</h3>
				<p className="info-box__description">{description}</p>
				<div className="info-box__stats">
					<p className="info-box__stats-score">7.5</p>
					<button
						className="info-box__stats-favorite"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<div className="icon-container">
							<div className={`icon-normal ${hovered ? "hidden" : "visible"}`}>
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
					</button>
				</div>
			</div>
		</div>
	);
}
