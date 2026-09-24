import "./RankingLabel.scss";

import {
	StarFilledIcon,
	StarsFilledIcon,
	HeartFilledIcon,
	TrophyFilledIcon,
} from "../../assets/Icon/UiIcon";

export default function RankingLabel({ icon, text, link }) {
	const icons = {
		star: <StarFilledIcon className={"star-icon"} />,
		stars: <StarsFilledIcon className={"star-icon"} />,
		heart: <HeartFilledIcon className={"heart-icon"} />,
		trophy: <TrophyFilledIcon className={"star-icon"} />,
	};

	return (
		<a href={link} className="ranking-label__item ">
			{icons[icon]}
			<p className="ranking-label__content">{text}</p>
		</a>
	);
}
