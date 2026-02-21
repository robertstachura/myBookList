import "./Author-details.scss";
import TagPercentValue from "../C/Tag-percent-value/Tag-percent-value";
import DataSet from "../C/Data/Data-set/Data-set";

export default function AuthorDetails() {
	return (
		<section className="author-details content-wrapper">
			<div className="details">
				
				<div className="details__item">
					<h4 className="details__item-header">Birthday</h4>
					<p className="details__item-value">11-11-1111</p>
				</div>

				<div className="details__item">
					<h4 className="details__item-header">Country</h4>
					<p className="details__item-value">USA</p>
				</div>

				<div className="details__item">
					<h4 className="details__item-header">First Book date</h4>
					<p className="details__item-value">11-11-1111</p>
				</div>

				<div className="details__item">
					<h4 className="details__item-header">Publishers</h4>
					<p className="details__item-value">Yqfweon</p>
				</div>

				<div className="details__item">
					<h4 className="details__item-header">Genres</h4>
					<p className="details__item-value">Abc</p>
					<p className="details__item-value">Abc</p>
					<p className="details__item-value">Abc</p>
				</div>

				<div className="details__item">
					<h4 className="details__item-header">Tags</h4>
					<p className="details__item-value">Abc</p>
					<p className="details__item-value">Abc</p>
					<p className="details__item-value">Abc</p>
				</div>
				

			</div>
		</section>
	);
}
