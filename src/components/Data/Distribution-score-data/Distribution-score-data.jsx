import "./Distribution-score-data.scss";

export default function DistributionScoreData({ ratings }) {
	const scores = [
		{
			key: 1,
			percent: ratings.ratingOneCountPercent,
			value: ratings.ratingOneCount,
			color: "one"
		},
		{
			key: 2,
			percent: ratings.ratingTwoCountPercent,
			value: ratings.ratingTwoCount,
			color: "two"
		},
		{
			key: 3,
			percent: ratings.ratingThreeCountPercent,
			value: ratings.ratingThreeCount,
			color: "three"
		},
		{
			key: 4,
			percent: ratings.ratingFourCountPercent,
			value: ratings.ratingFourCount,
			color: "four"
		},
		{
			key: 5,
			percent: ratings.ratingFiveCountPercent,
			value: ratings.ratingFiveCount,
			color: "five"
		},
		{
			key: 6,
			percent: ratings.ratingSixCountPercent,
			value: ratings.ratingSixCount,
			color: "six"
		},
		{
			key: 7,
			percent: ratings.ratingSevenCountPercent,
			value: ratings.ratingSevenCount,
			color: "seven"
		},
		{
			key: 8,
			percent: ratings.ratingEightCountPercent,
			value: ratings.ratingEightCount,
			color: "eight"
		},
		{
			key: 9,
			percent: ratings.ratingNineCountPercent,
			value: ratings.ratingNineCount,
			color: "nine"
		},
		{
			key: 10,
			percent: ratings.ratingTenCountPercent,
			value: ratings.ratingTenCount,
			color: "ten"
		},
	];

	return (
		<div className="content-wrapper">
			<h3 className="content-header">Score Distribution</h3>
			<div className="distribution-score-data ">
				{scores.map((score) => (
					<div className="distribution-score-data__score">
						<div
							className={`distribution-score-data__score-bar ${score.color}`}
							style={{ height: `${score.percent * 2 + 20}px` }}>
							<p className="distribution-score-data__score-value">
								{score.value}
							</p>
							<p className="distribution-score-data__score-percent">
								{`${score.percent}%`}
							</p>
						</div>
						<p className="distribution-score-data__score-scale">{score.key}</p>
					</div>
				))}
			</div>
		</div>
	);
}
