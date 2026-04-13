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
				<StatsLabel header="Autor" content="Sanderson" />
				<StatsLabel header="Ranking" content="Sanderson" />
				<StatsLabel header="Ulubione" content="Sanderson" />
				<StatsLabel header="Seria" content="Sanderson" />
				<StatsLabel header="Data premiery" content="Sanderson" />
				<StatsLabel header="Data premiery orginału" content="Sanderson" />
				<StatsLabel header="Liczba stron" content="Sanderson" />
				<StatsLabel header="ISBN" content="Sanderson" />
				<StatsLabel header="Orginalny język" content="Sanderson" />
				<StatsLabel header="Tłumacz" content="Sanderson" />
			</div>
		</div>
	);
}
