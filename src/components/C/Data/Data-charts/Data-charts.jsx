import {
	AreaChart,
	Area,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
	ComposedChart,
	LabelList,
} from "recharts";
import "./Data-charts.scss";
import { useState, useEffect } from "react";

export default function DataCharts({ chart, header }) {
	const [year, setYear] = useState(null);
	const [scale, setScale] = useState(false);
	// const [stats, setStats] = useState(null);

	useEffect(() => {
		if (chart?.years?.length > 0) {
			setYear(chart.years[0]);
			setScale(chart.ratingScale);
		}
	}, [chart]);

	if (!chart?.years?.length || !chart?.chartsData || year === null) {
		return <div>Ładowanie danych...</div>;
	}

	return (
		<div className="content-wrapper chart">
			<h3 className="chart__header">{header}</h3>
			<div className="chart__years">
				{chart.years?.map((y) => {
					return (
						<button
							className={`chart__years-btn ${year === y ? "active-year" : ""}`}
							onClick={() => setYear(y)}
							key={y}>
							{y}
						</button>
					);
				})}
			</div>

			<div className="chart__area">
				<ResponsiveContainer width="100%" height={300}>
					<ComposedChart data={chart.chartsData[year] ?? []}>
						<Area
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.3}
						/>
						<Line
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							strokeWidth={2}
							dot={""}></Line>
						<CartesianGrid stroke="#ccc" strokeDasharray={"3 5"} />
						<XAxis dataKey="name" />
						{scale === true ? (
							<YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} />
						) : (
							<YAxis />
						)}
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

{
	/* <LabelList
							dataKey="uv"
							position="top"
							formatter={(value) => value > 0 ? value.toFixed(1) : ''}
							style={{ fontSize: "16px", fill: "#8884d8", fontWeight: "bold" }}
							offset={15}
							/> */
}
