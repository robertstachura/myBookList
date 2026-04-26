import "./Book-banner.scss";

import defaultImg from "../../assets/placeholder.png";
import StatsLabel from "../Label/StatsLabel/StatsLabel";

export default function BookBanner() {
	return (
		<div className="book-banner">
			<div className="book-banner__div">
				<img src={defaultImg} alt="" className="book-banner__div-img" />
				<button className="book-banner__div-add-btn">Dodaj do listy</button>
			</div>

			{/* <button className="book-banner__actions-favorite-btn">
					<i class="ti ti-heart"></i>
				</button> */}

			<div className="book-banner__info">
				<StatsLabel header="Autor" content="Brandon Sanderson" />
				<StatsLabel header="Seria" content="Archiwum" />
				<StatsLabel header="Średnia ocen" content="7,8" />
				<StatsLabel header="Liczba ocen" content="234574" />
				<StatsLabel header="Ranking" content="1" />
				<StatsLabel header="Top rakning" content="" />
				<StatsLabel header="Ulubione" content="1235" />
				<StatsLabel header="Liczba stron" content="1342 / 38h" />
				<StatsLabel header="Recenzje" content="" />
				<StatsLabel header="Język" content="Polski" />
			</div>
		</div>
	);
}
