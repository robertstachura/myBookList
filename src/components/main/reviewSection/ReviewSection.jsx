import "./reviewSection.scss";
import Book from "../../C/book/Book";
import Review from "../../C/review/Review"

export default function ReviewSection() {
	const books = [
		{
			img: "https://cdn.pixabay.com/photo/2023/05/11/16/25/hall-7986771_1280.jpg",
			title: "Tytuł1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
			isFavorite: true,
		},
		{
			img: "https://cdn.pixabay.com/photo/2024/10/02/18/24/leaf-9091894_1280.jpg",
			title: "Tytuł2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
			isFavorite: false,
		},
		{
			img: "https://cdn.pixabay.com/photo/2025/06/05/16/39/desert-9643279_1280.jpg",
			title: "Tytuł5",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			isFavorite: false,
		},
	];

	return (
		<section className="review-section">
			<h2>Nowe recenzje</h2>
			{books.map(({ img, title, description, timer, isFavorite }, idx) => {
				const isEven = idx % 2 === 0;

				const bookComponent = (
					<Book
						img={img}
						title={title}
						description={description}
						timer={timer}
						isFavorite={isFavorite}
					/>
				);

				const reviewComponent = (
					<Review/>
				);
				return (
					<div className="review-box" key={idx}>
						{isEven ? (
							<>
								{bookComponent}
								{reviewComponent}
							</>
						) : (
							<>
								{reviewComponent}
								{bookComponent}
							</>
						)}
					</div>
				);
			})}
		</section>
	);
}
