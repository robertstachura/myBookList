import "./BookReviewPage.scss";
import { useState } from "react";
import { LabelList } from "recharts";
import Tooltip from "../../components/C/Tooltip/Tooltip";
import {
	ArrowDownIcon,
	ArrowDownFilledIcon,
	ArrowUpIcon,
	ArrowUpFilledIcon,
	MessageIcon,
	MessageFilledIcon,
} from "../../assets/Icon/UiIcon";
export default function BookReviewPage() {
	const [arrowDownHover, setArrowDownHover] = useState(false);
	const [arrowUpHover, setArrowUpHover] = useState(false);

	return (
		<div className="book-review">
			<div className="book-review__content">
				<p className="book-review__content-date-of-issue">14-06-2025</p>
				<div className="book-review__content-header">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eius, deleniti numquam, rem iste veniam repudiandae mollitia sed inventore nihil doloribus veritatis nobis distinctio accusamus est maxime ad placeat consequatur reiciendis necessitatibus blanditiis. Illum nam praesentium in voluptatum alias laudantium esse culpa, ratione explicabo iste cupiditate ut quas, quod, harum rem veritatis illo soluta provident! Atque doloremque obcaecati modi? Iste non quis culpa, quasi cupiditate ratione sit quas cum incidunt provident dolores a corrupti nam. Nulla voluptates deleniti, nemo nostrum debitis aperiam aliquam distinctio esse suscipit numquam blanditiis voluptas ipsa id vero officiis doloribus sit odio dolorum. Mollitia, iure exercitationem!</p>
				</div>
				<p className="book-review__content-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora
					ex molestiae provident nemo eaque ab voluptatum, blanditiis eos ad
					explicabo aperiam inventore eius? Consequatur expedita natus repellat.
					Corrupti error modi rerum asperiores temporibus omnis fugit quas optio
					mollitia odio molestias in, enim necessitatibus nesciunt fuga deleniti
					nihil unde vitae ex ad eos similique repudiandae tenetur. Quis harum
					quidem illo illum repellendus recusandae magnam possimus accusantium
					consequatur architecto libero eos, rem, nesciunt ullam fugiat. Tenetur
					impedit rerum molestiae laboriosam quia qui iste, ipsum quo quis
					corrupti pariatur dolorem provident cumque voluptas maxime mollitia
					soluta odio eos labore molestias esse, beatae numquam adipisci ipsam.
					Sunt dolor temporibus veritatis ab cumque velit earum, consectetur
					inventore soluta sequi. Perferendis inventore dignissimos laboriosam
					nulla, quaerat architecto nihil. Vero iste nemo molestias molestiae id
					corrupti reprehenderit repellat nulla minus veniam. Explicabo quos
					quasi ad reiciendis! Delectus deserunt reiciendis nulla reprehenderit
					aspernatur doloribus pariatur, nisi cumque commodi natus voluptates
					eius fuga deleniti illum. Nobis maiores aliquid, quis earum sint sit
					quod obcaecati totam itaque repudiandae molestias reprehenderit
					facilis iste, ut consectetur adipisci eius modi cupiditate. Et
					provident maiores minus repudiandae repellat doloremque repellendus
					unde cumque pariatur, in voluptatem velit, quasi delectus possimus
					maxime totam dolorem numquam. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Sit, tempora ex molestiae provident nemo eaque ab
					voluptatum, blanditiis eos ad explicabo aperiam inventore eius?
					Consequatur expedita natus repellat. Corrupti error modi rerum
					asperiores temporibus omnis fugit quas optio mollitia odio molestias
					in, enim necessitatibus nesciunt fuga deleniti nihil unde vitae ex ad
					eos similique repudiandae tenetur. Quis harum quidem illo illum
					repellendus recusandae magnam possimus accusantium consequatur
					architecto libero eos, rem, nesciunt ullam fugiat. Tenetur impedit
					rerum molestiae laboriosam quia qui iste, ipsum quo quis corrupti
					pariatur dolorem provident cumque voluptas maxime mollitia soluta odio
					eos labore molestias esse, beatae numquam adipisci ipsam. Sunt dolor
					temporibus veritatis ab cumque velit earum, consectetur inventore
					soluta sequi. Perferendis inventore dignissimos laboriosam nulla,
					quaerat architecto nihil. Vero iste nemo molestias molestiae id
					corrupti reprehenderit repellat nulla minus veniam. Explicabo quos
					quasi ad reiciendis! Delectus deserunt reiciendis nulla reprehenderit
					aspernatur doloribus pariatur, nisi cumque commodi natus voluptates
					eius fuga deleniti illum. Nobis maiores aliquid, quis earum sint sit
					quod obcaecati totam itaque repudiandae molestias reprehenderit
					facilis iste, ut consectetur adipisci eius modi cupiditate. Et
					provident maiores minus repudiandae repellat doloremque repellendus
					unde cumque pariatur, in voluptatem velit, quasi delectus possimus
					maxime totam dolorem numquam.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Sit, tempora ex molestiae provident nemo eaque ab
					voluptatum, blanditiis eos ad explicabo aperiam inventore eius?
					Consequatur expedita natus repellat. Corrupti error modi rerum
					asperiores temporibus omnis fugit quas optio mollitia odio molestias
					in, enim necessitatibus nesciunt fuga deleniti nihil unde vitae ex ad
					eos similique repudiandae tenetur. Quis harum quidem illo illum
					repellendus recusandae magnam possimus accusantium consequatur
					architecto libero eos, rem, nesciunt ullam fugiat. Tenetur impedit
					rerum molestiae laboriosam quia qui iste, ipsum quo quis corrupti
					pariatur dolorem provident cumque voluptas maxime mollitia soluta odio
					eos labore molestias esse, beatae numquam adipisci ipsam. Sunt dolor
					temporibus veritatis ab cumque velit earum, consectetur inventore
					soluta sequi. Perferendis inventore dignissimos laboriosam nulla,
					quaerat architecto nihil. Vero iste nemo molestias molestiae id
					corrupti reprehenderit repellat nulla minus veniam. Explicabo quos
					quasi ad reiciendis! Delectus deserunt reiciendis nulla reprehenderit
					aspernatur doloribus pariatur, nisi cumque commodi natus voluptates
					eius fuga deleniti illum. Nobis maiores aliquid, quis earum sint sit
					quod obcaecati totam itaque repudiandae molestias reprehenderit
					facilis iste, ut consectetur adipisci eius modi cupiditate. Et
					provident maiores minus repudiandae repellat doloremque repellendus
					unde cumque pariatur, in voluptatem velit, quasi delectus possimus
					maxime totam dolorem numquam.
				</p>
				<div className="book-review__content-user-info">
					<a className="book-review__content-user">
						<img
							src="../../src/assets/user.png"
							alt="user avatar img"
							className="book-review__content-user-img"
						/>

						<p className="book-review__content-user-name">user123</p>
					</a>
					<p className="book-review__content-user-score">
						<span className="book-review__content-span">93</span>/100
					</p>
				</div>
			</div>

			<div className="book-review__rating">
				<div className="book-review__rating-actions">
					<button
						className="book-review__rating-btn"
						onMouseEnter={() => setArrowDownHover(true)}
						onMouseLeave={() => setArrowDownHover(false)}>
						{!arrowDownHover ? (
							<ArrowDownIcon className={"arrow-down-icon"} />
						) : (
							<ArrowDownFilledIcon className={"arrow-down-icon"} />
						)}
					</button>
					<p className="book-review__rating-down-counter">5</p>
					{/* <p>/</p> */}
					<div className="book-review__rating-percent">
						<p>95%</p>
					</div>
					<p className="book-review__rating-up-counter">95</p>
					<button
						className="book-review__rating-btn"
						onMouseEnter={() => setArrowUpHover(true)}
						onMouseLeave={() => setArrowUpHover(false)}>
						{!arrowUpHover ? (
							<ArrowUpIcon className={"arrow-up-icon"} />
						) : (
							<ArrowUpFilledIcon className={"arrow-up-icon"} />
						)}
					</button>
				</div>
			</div>
			{/* 
			<div className="book-review__comments">
				<div className="book-review__comments-item">
					<div className="book-review__comments-details">
						<a className="book-review__comments-user">
							<img
								src="../../src/assets/user.png"
								alt="user avatar img"
								className="book-review__banner-user-img"
							/>
							adwdf
						</a>
						<button className="book-review__comments-btn">
							<ArrowDownIcon className={"arrow-down-icon"} />
						</button>
						<button className="book-review__comments-btn">
							<ArrowUpIcon className={"arrow-up-icon"} />
						</button>
						<button className="book-review__comments-btn">
							<MessageIcon className={"message-icon"} />
						</button>
						<p>15-06-2025</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}
