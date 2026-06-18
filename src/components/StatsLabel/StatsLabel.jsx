import "./StatsLabel.scss";

export default function Label({ header, content, islink, href}) {
	return (
		<div className="label">
			<h4 className="label__header">{header}</h4>
			{islink === true ? (
				<a
					href={href}
					rel="noopener noreferrer"
					target="_blank"
					className="label__content label__link">
					{content}
				</a>
			) : (
				<p className="label__content">{content}</p>
			)}
		</div>
	);
}
