import "./upcomingReleases.scss";
import Book from "../../C/book/Book";

const books = [
	{
		img: "https://cdn.pixabay.com/photo/2023/05/11/16/25/hall-7986771_1280.jpg",
		title: "Tytuł1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
		timer: "12h",
		isFavorite: true,
	},
	{
		img: "https://cdn.pixabay.com/photo/2024/10/02/18/24/leaf-9091894_1280.jpg",
		title: "Tytuł2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
		timer: "1d",
		isFavorite: false,
	},
	{
		img: "https://cdn.pixabay.com/photo/2024/10/02/18/24/leaf-9091894_1280.jpg",
		title: "Tytuł2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
		timer: "2d",
		isFavorite: true,
	},
	{
		img: "https://cdn.pixabay.com/photo/2023/01/08/09/36/mountain-7704817_1280.jpg",
		title: "Tytuł4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat?",
		timer: "4d",
		isFavorite: true,
	},
	{
		img: "https://cdn.pixabay.com/photo/2025/06/05/16/39/desert-9643279_1280.jpg",
		title: "Tytuł5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quas ratione ipsa libero dicta, accusantium qui explicabo quam debitis doloremque modi illum, suscipit molestiae aut quae rem non placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		timer: "14d",
		isFavorite: false,
	},
];

export default function UpcomingReleases() {
	return (
		<div className="upcoming-releases">
			<h2 className="upcoming-releases__header">Nadchodzonce premiery</h2>

			<div className="upcoming-releases__box">
				{books.map(({ img, title, description, timer, isFavorite }) => {
					return (
						<Book
							img={img}
							title={title}
							description={description}
							timer={timer}
							isFavorite={isFavorite}
						/>
					);
				})}
			</div>
		</div>
	);
}
