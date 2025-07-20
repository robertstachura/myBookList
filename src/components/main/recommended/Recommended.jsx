import "./recommended.scss";
import Book from "../../C/book/Book";

export default function RecommendedSection() {
	const book = [
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
			img: "https://cdn.pixabay.com/photo/2024/10/02/18/24/leaf-9091894_1280.jpg",
			title: "Tytuł2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
			isFavorite: true,
		},
		{
			img: "https://cdn.pixabay.com/photo/2023/01/08/09/36/mountain-7704817_1280.jpg",
			title: "Tytuł4",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
			isFavorite: true,
		},
		{
			img: "https://cdn.pixabay.com/photo/2025/06/05/16/39/desert-9643279_1280.jpg",
			title: "Tytuł5",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
		<section id="recommended" className="recommended-section">
			<h3 className="tag-title first">Trending now</h3>
			<div className="tag">
				{book.map(({ img, title, description, isFavorite }) => {
					return (
						<Book
							img={img}
							title={title}
							description={description}
							isFavorite={isFavorite}
						/>
					);
				})}
			</div>
			<h3 className="tag-title">All time popular</h3>
			<div className="tag">
				{book.map(({ img, title, description, isFavorite }) => {
					return (
						<Book
							img={img}
							title={title}
							description={description}
							isFavorite={isFavorite}
						/>
					);
				})}
			</div>

            <h3 className="tag-title">Most awaited</h3>
			<div className="tag">
				{book.map(({ img, title, description, isFavorite }) => {
					return (
						<Book
							img={img}
							title={title}
							description={description}
							isFavorite={isFavorite}
						/>
					);
				})}
			</div>

            
			
		</section>
	);
}
