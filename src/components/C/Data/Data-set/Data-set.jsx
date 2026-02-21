import "./Data-set.scss";

export default function DataSet({name, value}) {
	return (
		<div className="data">
			<p className="data__name">{name}</p>
			<p className="data__value">{value}</p>
		</div>
	);
}
