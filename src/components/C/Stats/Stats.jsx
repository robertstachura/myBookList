import "./Stats.scss";

export default function Stats({ header, value, iconClassName }) {
	return (
		<div className="stats-wrapper">
			<p className="stats-wrapper__header">{header}</p>
			<p className="stats-wrapper__counter">
				<span className="stats-wrapper__counter-value">{value}</span>
				<i class={iconClassName}></i>
			</p>
		</div>
	);
}
