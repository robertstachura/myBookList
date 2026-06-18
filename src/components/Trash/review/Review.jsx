import "./review.scss";
import {
	ArrowUpIcon,
	ArrowUpFilledIcon,
} from "../../../assets/Icon/Arrow-up-icon";
import {
	ArrowDownIcon,
	ArrowDownFilledIcon,
} from "../../../assets/Icon/Arrow-down-icon";
import Tooltip from "../../C/Tooltip/Tooltip";

export default function Review({
	id,
	userName,
	reviewCount,
	bookTitle,
	bookAvgScore,
	status,
	rating,
	title,
	content,
	hasSpoilers,
	helpfulCountPlus,
	helpfulCountMinus,
	helpfulValue,
	commentsCount,
	createdAt,
	updatedAt,
}) {
	return (
		<div className="review">
			<a className="review__user-avatar"></a>
			<div className="review__user-details">
				<div className="review__user-details-name">
					<p>{userName}</p>
				</div>

				<div className="review__user-details-params">
					<div className="review__user-details-param user-details-avg-helpful">
						<p>86%</p>
						<Tooltip
							c={"review__user-details-tooltip"}
							text={"Średnia przydatności wszystkich recenzji użytkownika"}
						/>
					</div>
					<div className="review__user-details-param user-details-written-reviews">
						<p>
							{reviewCount} <i class="ti ti-notes"></i>
						</p>
						<Tooltip
							c={"review__user-details-tooltip"}
							text={"Liczba napisanych recenzji"}
						/>
					</div>
					<div className="review__user-details-param user-details-followers">
						<p>
							1444 <i class="ti ti-users"></i>
						</p>
						<Tooltip
							c={"review__user-details-tooltip"}
							text={"Liczba obserwójących"}
						/>
					</div>
				</div>

				<div className="review__user-details-params">
					<div className="review__user-details-param user-details-avg-books-score">
						<p>78%</p>
						<Tooltip
							c={"review__user-details-tooltip"}
							text={"Średnia ocen wszystkich książek użytkownika"}
						/>
					</div>
					<div className="review__user-details-param user-details-readed-books">
						<p>
							135 <i class="ti ti-books"></i>
						</p>
						<Tooltip
							c={"review__user-details-tooltip"}
							text={"Liczba przeczytanych książek"}
						/>
					</div>
					<div className="review__user-details-param ">
						<p>89%</p>
					</div>
				</div>

				<div className="review__user-details-message-area">
					<p className="review__user-details-message-text">
						oaaowdn aowhda ao awpo
					</p>
				</div>
			</div>

			<div className="review__header">
				<div className="review__header-details">
					<p className="review__header-helpfulness">{helpfulValue}</p>
					<p className="review__header-date">{createdAt}</p>
				</div>
			</div>
			<h3 className="review__title">{title}</h3>

			<div className="review__content">
				<p className="review__content-text">{content}</p>
			</div>
			<div className="review__buttons">
				
				<div className="review__buttons-div">
					<button className="review__buttons-follow review__buttons-btn">
						<i class="ti ti-user-plus"></i>
					</button>
					<p className="review__buttons-value">1.4k</p>
				</div>

				<div className="review__buttons-div">
					<button className="review__buttons-comments review__buttons-btn">
						<i class="ti ti-message"></i>{" "}
					</button>
					<p className="review__buttons-value">{commentsCount}</p>
				</div>

				<div className="review__buttons-div">
					<button className="review__buttons-up review__buttons-btn">
						<ArrowUpIcon />
					</button>
					<p className="review__buttons-value">{helpfulCountPlus}</p>
				</div>

				<div className="review__buttons-div">
					<button className="review__buttons-minus review__buttons-btn">
						<ArrowDownIcon />
					</button>
					<p className="review__buttons-value">{helpfulCountMinus}</p>
				</div>
			</div>
		</div>
	);
}
