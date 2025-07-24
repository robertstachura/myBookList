import "./news.scss";

export default function News() {
	return (
		<div className="news">
			<div className="header">
				<div className="header__user-details">
					<img
						src="https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_1280.jpg"
						alt=""
						className="header__user-details-avatar"
					/>
					<a href="" className="header__user-details-name">
						User name
					</a>
				</div>
				<div className="header__tags">
					<a href="" className="header__tags-tag">
						news
					</a>
					<a href="" className="header__tags-tag">
						post
					</a>
					<a href="" className="header__tags-tag">
						popular
					</a>
				</div>
				<p className="header__publication-date">1d</p>
			</div>

			<div className="news-body">
				<p className="news-body__text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius facere
					distinctio maiores excepturi aliquam laudantium tempore praesentium
					quia, nihil eos impedit beatae qui voluptas numquam eveniet commodi
					sed quibusdam placeat?
				</p>
			</div>

			<div className="btns">
				<button className="btns-btn"><i class="ti ti-message"></i></button>
				<button className="btns-btn"><i class="ti ti-thumb-up"></i></button>
			</div>
		</div>
	);
}
