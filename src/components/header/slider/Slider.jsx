import React, { useState, useRef, useEffect } from "react";
import "./slider.scss";
import leftBtn from "../../../assets/icon/chevron-left.svg";
import rightBtn from "../../../assets/icon/chevron-right.svg";

export default function Slider() {
	const [current, setCurrent] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const timeoutRef = useRef(null);
	const delay = 3000;

	const news = [
		{
			img: "https://cdn.pixabay.com/photo/2022/05/05/12/57/flowers-7176104_1280.jpg",
			title: "Informacje 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			img: "https://cdn.pixabay.com/photo/2022/07/17/13/41/sunflower-7327456_1280.jpg",
			title: "Informacje 2",
			text: "Necessitatibus, cum! Doloribus, ipsa.",
		},
		{
			img: "https://cdn.pixabay.com/photo/2021/11/05/19/01/cappadocia-6771879_1280.jpg",
			title: "Informacje 3",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
	];

	const getSlidePosition = (index) => {
		const diff = index - current;
		return diff * 100;
	};

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const goToPrev = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setCurrent((prev) => (prev === 0 ? news.length - 1 : prev - 1));
			setTimeout(() => setIsAnimating(false), 600);
		}
	};

	const goToNext = React.useCallback(() => {
		if (!isAnimating) {
			setIsAnimating(true);
			setCurrent((prev) => (prev === news.length - 1 ? 0 : prev + 1));
			setTimeout(() => setIsAnimating(false), 600);
		}
	}, [isAnimating, news.length]);

	const goToNewsByIndex = (index) => {
		if (
			index >= 0 &&
			index < news.length &&
			!isAnimating &&
			index !== current
		) {
			setIsAnimating(true);
			setCurrent(index);
			setTimeout(() => setIsAnimating(false), 600);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			if (!isAnimating) {
				goToNext();
			}
		}, delay);

		return () => resetTimeout();
	}, [current, isAnimating, goToNext, delay]);
	return (
		<div className="slider">
			<div className="slider__box">
				{news.map(({ img, title, text }, idx) => {
					const position = getSlidePosition(idx);

					return (
						<div
							className="slider__slide"
							key={idx}
							style={{
								transform: `translateX(${position}%)`,
								left: 0,
							}}>
							<img className="slider__slide-img" src={img} alt={title} />
							<div className="slider__slide__news">
								<h2 className="slider__slide__news-header">{title}</h2>
								<p className="slider__slide__news-text">{text}</p>
								<div className="slider__slide__news-shadow"></div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="slider__btns">
				<button
					className="slider__btns-btn slider__btns-left"
					onClick={goToPrev}>
					<img src={leftBtn} alt="" />
				</button>
				<button
					className="slider__btns-btn slider__btns-right"
					onClick={goToNext}>
					<img src={rightBtn} alt="" />
				</button>
			</div>

			<div className="slider__navigation">
				{news.map((_, index) => {
					return (
						<button
							className={`slider__navigation-dot ${
								current === index ? "slider__navigation-dot--active" : ""
							}`}
							key={index}
							onClick={() => goToNewsByIndex(index)}></button>
					);
				})}
			</div>
		</div>
	);
}
