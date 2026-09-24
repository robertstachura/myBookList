import { ArrowDownIcon, ArrowUpIcon, MessageIcon } from "../../assets/Icon/UiIcon";
import "./ReviewCard.scss";

export default function ReviewCard() {
	return (
		<a className="review-card">
			<div className="review-card__header">
				<p>
					<ArrowUpIcon className={"review-card__header-icon"} /> 13
				</p>
				<p>
					<ArrowDownIcon className={"review-card__header-icon"} /> 13
				</p>
				<p>
					<MessageIcon className={"review-card__header-icon"} /> 13
				</p>
				<p>20-11-2024</p>
			</div>
			<p className="review-card__content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex laboriosam asperiores corrupti odio repellat culpa perspiciatis? Eveniet esse quae nemo fugiat sunt assumenda deleniti consequuntur? Rerum molestias itaque porro assumenda
			</p>
		</a>
	);
}
