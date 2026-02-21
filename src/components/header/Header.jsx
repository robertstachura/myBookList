import "./header.scss";
import UpcomingReleases from "../C/upcomingReleases/UpcomingReleases";
import Slider from "../C/slider/Slider";

export default function Header() {
	return (
		<header className="main-header">
			<Slider />
			<UpcomingReleases />
		</header>
	);
}
