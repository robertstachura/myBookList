import "./main.scss";
import ReviewSection from "./reviewSection/ReviewSection";
import RecommendedSection from "./recommended/Recommended";
export default function Main() {
	return (
		<main className="main">
			{/* <RecommendedSection /> */}
			<ReviewSection />
		</main>
	);
}
