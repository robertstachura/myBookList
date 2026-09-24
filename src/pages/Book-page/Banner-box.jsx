import "./Banner-box.scss";
import defaultImg from "../../assets/placeholder.png";
import { useState } from "react";
import StatsLabel from "../../components/StatsLabel/StatsLabel"
import LibraryModal from "./Library-modal"


export default function BannerBox() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<div className="banner">
			<div className="banner__div">
				<img src={defaultImg} alt="" className="banner__div-img" />
				<button
					className="banner__div-add-btn"
					onClick={() => setIsOpenModal(true)}>
					Dodaj do biblioteki
				</button>
			</div>

			{/* <button className="book-banner__actions-favorite-btn">
									<i class="ti ti-heart"></i>
								</button> */}

			<div className="banner__info">
				{/* <StatsLabel header="Autor" content="Brandon Sanderson" />
				<StatsLabel header="Seria" content="Archiwum" />
				<StatsLabel header="Wydawca" content="Publisher" />
				<StatsLabel header="Tłumacz" content="" />
				<StatsLabel header="ISBN" content="9780593801710" />
				<StatsLabel header="Liczba stron" content="1342" />
				<StatsLabel header="Język" content="Polski" />
				<StatsLabel header="Format" content="Twarda oprawa" />
				<StatsLabel header="Język orginału" content="" />
				<StatsLabel header="Premiery" content="" />
				<StatsLabel header="Premiery orginału" content="" /> */}

				<StatsLabel header="Ocena" content="Brandon Sanderson" />
				<StatsLabel header="Obserwujący" content="124k" />
				<StatsLabel header="Kraj" content="USA" />
				<StatsLabel header="Data urodzenia" content="19-12-1975" />
				<StatsLabel header="Napisane książki" content="102" />
				<StatsLabel header="Nagrody" content="1" />
				<StatsLabel header="" content="" />
				<StatsLabel header="" content="" />
				<StatsLabel header="" content="" />
				<StatsLabel header="" content="" />
				<StatsLabel header="" content="" />
			</div>
			<LibraryModal isActive={isOpenModal} />
		</div>
	);
}
