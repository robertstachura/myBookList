import "./Book-banner.scss";

import defaultImg from "../../assets/placeholder.png";
import StatsLabel from "../../components/StatsLabel/StatsLabel";

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
				<StatsLabel header="Wydawca" content="Publisher" />
				<StatsLabel header="Tłumacz" content="" />
				<StatsLabel header="ISBN" content="9780593801710" />
				<StatsLabel header="Liczba stron" content="1342" />
				<StatsLabel header="Język" content="Polski" />
				<StatsLabel header="Format" content="Twarda oprawa" />
				<StatsLabel header="Język orginału" content="" />
				<StatsLabel header="Premiery" content="" />
				<StatsLabel header="Premiery orginału" content="" />
			</div>
		</div>
	);
}
