import { useState } from "react";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
} from "../../assets/Icon/UiIcon";
import "./DatePicker.scss";

export default function DatePicker({ selectedDate, onDateSelect, position}) {
	const date = new Date();
	const [year, setYear] = useState(selectedDate?.year ?? date.getFullYear());
	const [month, setMonth] = useState(selectedDate?.month ?? date.getMonth());
	const [day, setDay] = useState(selectedDate?.day ?? date.getDate());

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	const prevMonth = month === 0 ? 11 : month - 1;
	const prevMonthYear = month === 0 ? year - 1 : year;

	const prevMonthBtn = () => {
		if (month > 0) {
			setMonth((prev) => prev - 1);
		} else {
			setYear((prev) => prev - 1);
			setMonth(11);
		}
	};

	const nextMonthBtn = () => {
		if (month < 11) {
			setMonth((prev) => prev + 1);
		} else {
			setYear((prev) => prev + 1);
			setMonth(0);
		}
	};

	let firstDayOfWeek = new Date(year, month, 1).getDay();
	firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

	const days = [];

	for (let i = 0; i < firstDayOfWeek; i++) {
		days.push({
			day: daysInPrevMonth - firstDayOfWeek + 1 + i,
			month: prevMonth,
			year: prevMonthYear,
			isCurrentMonth: false,
		});
	}

	for (let i = 0; i < daysInMonth; i++) {
		days.push({
			day: i + 1,
			month: month,
			year: year,
			isCurrentMonth: true,
		});
	}

	const nextMonth = month === 11 ? 0 : month + 1;
	const nextMonthYear = month === 11 ? year + 1 : year;

	for (let i = 0; i < 42 - firstDayOfWeek - daysInMonth; i++) {
		days.push({
			day: i + 1,
			month: nextMonth,
			year: nextMonthYear,
			isCurrentMonth: false,
		});
	}

	return (
		<div className={`date-picker date-picker--${position}`}>
			<div className="date-picker__header">
				<button
					onClick={() => setYear((prev) => prev - 1)}
					className="date-picker__header-btn">
					<ChevronsLeftIcon />
				</button>
				<button
					onClick={() => prevMonthBtn()}
					className="date-picker__header-btn">
					<ChevronLeftIcon />
				</button>
				<span className="date-picker__header-date">
					{year}{" "}
					{new Date(year, month, 1).toLocaleString("en-US", { month: "long" })}
				</span>
				<button
					onClick={() => nextMonthBtn()}
					className="date-picker__header-btn">
					<ChevronRightIcon />
				</button>
				<button
					onClick={() => setYear((prev) => prev + 1)}
					className="date-picker__header-btn">
					<ChevronsRightIcon />
				</button>
			</div>

			<div className="date-picker__day-of-week">
				<p className="date-picker__day-of-week-item">Mon</p>
				<p className="date-picker__day-of-week-item">Tue</p>
				<p className="date-picker__day-of-week-item">Wed</p>
				<p className="date-picker__day-of-week-item">Thu</p>
				<p className="date-picker__day-of-week-item">Fri</p>
				<p className="date-picker__day-of-week-item">Sat</p>
				<p className="date-picker__day-of-week-item">Sun</p>
			</div>

			<div className="date-picker__content">
				{days.map((d, index) => {
					const isSelected =
						selectedDate &&
						selectedDate.day === d.day &&
						selectedDate.month === d.month &&
						selectedDate.year === d.year;
					return (
						<button
							key={`${d.year}-${d.month}-${d.day}-${index}`}
							onClick={() => {
								onDateSelect?.({ year: d.year, month: d.month, day: d.day });
								setYear(d.year);
								setMonth(d.month);
								setDay(d.day);
							}}
							className={`date-picker__content-day ${
								d.isCurrentMonth
									? "date-picker__content-day--current-month"
									: ""
							}
							${isSelected ? "date-picker__content-day--focus" : ""} 
							
							`}
							>
							{d.day}
						</button>
					);
				})}
			</div>
		</div>
	);
}

// ${year === d.year && month === d.month && day === d.day ? "date-picker__content-day--focus" : ""}