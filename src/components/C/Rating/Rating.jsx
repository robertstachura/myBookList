import "./Rating.scss";

export default function Score({rating}) {
	return (
		<div className="rating">
			<p className="rating__score">
				{`${rating} /`}<span className="rating__span">10</span>
			</p>
			<i class="ti ti-star"></i>
		</div>
	);
}
