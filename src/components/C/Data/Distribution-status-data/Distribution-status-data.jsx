import "./Distribution-status-data.scss";

export default function DistributionStatusData({ stats }) {

	const segments = [
		{ key: "current", label: "Current", percent: stats.currentPercent, value: stats?.current },
		{ key: "planning", label: "Planning", percent: stats.planningPercent, value: stats?.planning  },
		{ key: "completed", label: "Completed", percent: stats.completedPercent, value: stats?.completed},
		{ key: "paused", label: "Paused", percent: stats.pausedPercent, value: stats?.paused },
		{ key: "dropped", label: "Dropped", percent: stats.droppedPercent, value: stats?.dropped },
	];

	const visibleSegments = segments.filter((s) => s.percent > 0);

	const firstKey = visibleSegments[0]?.key;
	const lastKey = visibleSegments[visibleSegments.length - 1]?.key;


	return (	
		<div className="stats-distribution content-wrapper">
			<div className="stats-distribution__header">
				{segments.map((segment) => (
					<div key={segment.key} className="distribution-data">
						<p className={`distribution-data__name ${segment.key}`}>
							{segment.label}
						</p>
						<p className="distribution-data__value">
							{segment.value}
							<span className="distribution-data__value-text"> Users</span>
						</p>
					</div>
				))}
			</div>

			<div className="distribution-data__bar">
				{segments.map((segment) =>
					segment.percent > 0 ? (
						<div
							key={segment.key}
							className={`bar ${segment.key} ${
								segment.key === firstKey ? "first" : ""
							} ${segment.key === lastKey ? "last" : ""}`}
							style={{ width: `${segment.percent}%` }}>
							<div className={`bar-tooltip ${segment.key}__percent-value`}>
								<p className="bar-tooltip__text">{`${segment.percent}%`}</p>
							</div>
						</div>
					) : null
				)}
			</div>
		</div>
	);
}
