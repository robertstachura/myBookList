import "./MediaBox.scss";

export default function MediaBox({
	officialSite,
	linkedin,
	xProfile,
	facebook,
	instagram,
	youtube,
	tiktok,
}) {
	return (
		<div className="media-box">
			<a
				href={officialSite}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${officialSite === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-link media-box__item-link"></i>
				<p className="media-box__item-text">Strona autora</p>
			</a>

			<a
				href={linkedin}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${linkedin === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-linkedin media-box__item-link"></i>
				<p className="media-box__item-text">Linkedin</p>
			</a>

			<a
				href={xProfile}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${xProfile === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-x media-box__item-link"></i>
				<p className="media-box__item-text">Profil X</p>
			</a>

			<a
				href={facebook}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${facebook === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-facebook media-box__item-link"></i>
				<p className="media-box__item-text">Facebook</p>
			</a>

			<a
				href={instagram}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${instagram === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-instagram media-box__item-link"></i>
				<p className="media-box__item-text">Instagram</p>
			</a>

			<a
				href={youtube}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${youtube === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-youtube media-box__item-link"></i>
				<p className="media-box__item-text">YouTube</p>
			</a>

			<a
				href={tiktok}
				rel="noopener noreferrer"
				target="_blank"
				className={`media-box__item  
					${tiktok === "" ? "media-box__item--disable" : ""}`}>
				<i class="ti ti-brand-tiktok media-box__item-link"></i>
				<p className="media-box__item-text">TikTok</p>
			</a>
		</div>
	);
}
