import "./Tag-percent-value.scss";

export default function TagPercentValue({ name, percent }) {
	return (
		<div className="tag-percent">
			<p className="tag-percent__name">{name}</p>
			<p className="tag-percent__value">{`${percent}%`}</p>
			<div className="tag-percent__bar" style={{ width: `${percent}%` }}></div>
		</div>
	);
}
