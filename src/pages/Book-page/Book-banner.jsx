import "./Book-banner.scss";

import defaultImg from "../../assets/placeholder.png";
import Label from "../label/Label";

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
				<Label header="Autor" content="Sanderson" />
				<Label header="Ranking" content="Sanderson" />
				<Label header="Ulubione" content="Sanderson" />
				<Label header="Seria" content="Sanderson" />
				<Label header="Data premiery" content="Sanderson" />
				<Label header="Data premiery orginału" content="Sanderson" />
				<Label header="Liczba stron" content="Sanderson" />
				<Label header="ISBN" content="Sanderson" />
				<Label header="Orginalny język" content="Sanderson" />
				<Label header="Tłumacz" content="Sanderson" />
			</div>
		</div>
	);
}
