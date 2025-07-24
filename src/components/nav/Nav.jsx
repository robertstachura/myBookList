import "./nav.scss";
export default function Nav() {
	return (
		<nav className="nav">
			<div className="nav__box">
				<a href="#" className="nav__box-item">
					Home
				</a>
				<a href="#news" className="nav__box-item">
					News
				</a>
				<a href="#review" className="nav__box-item">
					Review
				</a>
				<a href="#" className="nav__box-item">
					Contact
				</a>
				<a href="#" className="nav__box-item">
					Blog
				</a>
			</div>
		</nav>
	);
}
