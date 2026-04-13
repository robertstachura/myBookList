import "./MediaBox.scss";

export default function MediaBox() {
	return (
		<div className="media-box">
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__official-site media-box__item--disable"
						: "media-box__item media-box__official-site"
				}>
				<i class="ti ti-link"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__linkedin-site media-box__item--disable"
						: "media-box__item media-box__linkedin-site"
				}>
				<i class="ti ti-brand-linkedin"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__x-site media-box__item--disable"
						: "media-box__item media-box__x-site"
				}>
				<i class="ti ti-brand-x"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__facebook-site media-box__item--disable"
						: "media-box__item media-box__facebook-site"
				}>
				<i class="ti ti-brand-facebook"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__instagram-site media-box__item--disable"
						: "media-box__item media-box__instagram-site"
				}>
				<i class="ti ti-brand-instagram"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__youtube-site media-box__item--disable"
						: "media-box__item media-box__youtube-site"
				}>
				<i class="ti ti-brand-youtube"></i>
			</a>
			<a
				href=""
				rel="noopener noreferrer"
				target="_blank"
				className={
					false === true
						? "media-box__item media-box__tiktok-site media-box__item--disable"
						: "media-box__item media-box__tiktok-site"
				}>
				<i class="ti ti-brand-tiktok"></i>
			</a>
		</div>
	);
}
