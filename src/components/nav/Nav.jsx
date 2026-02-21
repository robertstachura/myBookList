import "./nav.scss";
import { Link } from "react-router-dom";
export default function Nav() {
	return (
		<nav className="nav">
			<div className="nav__box">
				<Link to="/" className="nav__box-item">
					Home
				</Link>
				<Link to="/author" className="nav__box-item">
					Author
				</Link>
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
