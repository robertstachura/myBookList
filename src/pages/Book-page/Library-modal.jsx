import "./Library-modal.scss";
import {
	PlusIcon,
	MinusIcon,
	ChevronDownIcon,
	CalendaryIcon,
} from "../../assets/Icon/UiIcon";
import { useEffect, useRef, useState } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";

export default function LibraryModal({ isActive }) {
	const [score, setScore] = useState(0);
	const [readingCounter, setReadingCounter] = useState(0);
	const [status, setStatus] = useState("Status");
	const [pageCounter, setPageCounter] = useState("");

	const [statusIsActive, setStatusIsActive] = useState(false);
	const [activePicker, setActivePicker] = useState(false);
	const startDatePickerRef = useRef(null);
	const [startDate, setStartDate] = useState(false);
	const [finishDate, setFinishDate] = useState(false);

	const intervalRef = useRef(null);

	const [note, setNote] = useState("");

	const [userLists, setUserLists] = useState([
		{ listName: "name1", isChecked: true },
		{ listName: "name2", isChecked: false },
		{ listName: "name3", isChecked: false },
	]);
	const [newList, setNewList] = useState("");

	//////////////////////// Kalędarz

	const handleStartDateSelect = (dateObj) => {
		setStartDate(dateObj);
	};

	const handleFinishDateSelect = (dateObj) => {
		setFinishDate(dateObj);
	};
	const finishDatePickerRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			const activeRef =
				activePicker === "start" ? startDatePickerRef : finishDatePickerRef;
			if (activeRef.current && !activeRef.current.contains(event.target)) {
				setActivePicker(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [activePicker]);

	///////////////////////

	const incrementScore = () => setScore((prev) => Math.min(prev + 5, 100));

	const startIncrement = () => {
		intervalRef.current = setInterval(incrementScore, 150);
	};

	const stop = () => {
		clearInterval(intervalRef.current);
	};

	const decrementScore = () => setScore((prev) => Math.max(prev - 5, 0));

	const startDecrement = () => {
		intervalRef.current = setInterval(decrementScore, 150);
	};

	const incrementReadingCounter = () => setReadingCounter((prev) => prev + 1);
	const decrementReadingCounter = () =>
		setReadingCounter((prev) => Math.max(prev - 1, 0));

	///////////////////////

	const toggleSelect = () => setStatusIsActive((prev) => !prev);

	///////////////////////// Listy

	const toggleList = (name) => {
		setUserLists((prev) =>
			prev.map((list) =>
				list.listName === name ? { ...list, isChecked: !list.isChecked } : list,
			),
		);
	};

	const addToList = () => {
		if (!newList.trim() || userLists.length >= 5) return;
		setUserLists((prev) => [
			...prev,
			{
				listName: `${newList}`,
				isChecked: false,
			},
		]);

		setNewList("");
	};

	/////////////////////////

	const handlePageCounterChange = (e) => {
		const cleaned = e.target.value.replace(/[^0-9]/g, "");

		if (cleaned === "") {
			setPageCounter("");
			return;
		}

		setPageCounter(Math.max(0, Number(cleaned)));
	};

	return (
		<div className={`library-modal ${isActive ? "library-modal--active" : ""}`}>
			<div className="library-modal__body">
				<div className="library-modal__body-status">
					<h3 className="library-modal__body-header">Status</h3>
					<div onClick={toggleSelect} className="input-item status-input">
						<span>{status}</span>
						<ChevronDownIcon
							className={`status-input__chevron-down-icon ${statusIsActive ? "status-input__chevron-down-icon--rotate" : ""}`}
						/>
						<div
							className={`status-input__options ${statusIsActive ? "status-input__options--open" : ""}`}>
							<p
								onClick={() => setStatus("Current")}
								className="status-input__options-item">
								Current
							</p>
							<p
								onClick={() => setStatus("Planing")}
								className="status-input__options-item">
								Planing
							</p>
							<p
								onClick={() => setStatus("Completed")}
								className="status-input__options-item">
								Completed
							</p>
							<p
								onClick={() => setStatus("Paused")}
								className="status-input__options-item">
								Paused
							</p>
							<p
								onClick={() => setStatus("Dropped")}
								className="status-input__options-item">
								Dropped
							</p>
						</div>
					</div>
				</div>

				<div className="library-modal__body-score">
					<h3 className="library-modal__body-header ">Ocena</h3>
					<div className="input-item score-input">
						<button
							onMouseDown={startDecrement}
							onMouseUp={stop}
							onClick={decrementScore}
							className="input-btn">
							<MinusIcon />
						</button>
						<span>{score}</span>
						<button
							onMouseDown={startIncrement}
							onMouseUp={stop}
							onClick={incrementScore}
							className="input-btn">
							<PlusIcon />
						</button>
					</div>
				</div>

				<div className="library-modal__body-page-counter">
					<h3 className="library-modal__body-header ">Przeczytane strony</h3>
					<div className="page-counter-input">
						<input
							className="input-item library-modal__body-item--counter"
							type="text"
							min={0}
							placeholder="0"
							value={pageCounter}
							onChange={handlePageCounterChange}
						/>
						<button className="input-btn input-btn__max">Max</button>
					</div>
				</div>

				<div className="library-modal__body-reading-counter">
					<h3 className="library-modal__body-header">Liczba odczytań</h3>
					<div className="input-item score-input">
						<button onClick={decrementReadingCounter} className="input-btn">
							<MinusIcon />
						</button>
						<span>{readingCounter}</span>
						<button onClick={incrementReadingCounter} className="input-btn">
							<PlusIcon />
						</button>
					</div>
				</div>

				<div className="library-modal__body-start-date-picker">
					<h3 className="library-modal__body-header">Data rozpoczęcia</h3>
					<div
						ref={startDatePickerRef}
						onClick={() => setActivePicker("start")}
						className="input-item date-picker-input ">
						<p className="date-picker-input__text">
							{startDate
								? `${startDate.day}/${startDate.month + 1}/${startDate.year}`
								: "Wybierz datę"}{" "}
							<CalendaryIcon className={"date-picker-input__calendary-icon"} />
						</p>
						{activePicker === "start" && (
							<DatePicker
								selectedDate={startDate}
								onDateSelect={handleStartDateSelect}
							/>
						)}
					</div>
				</div>

				<div className="library-modal__body-end-date-picker">
					<h3 className="library-modal__body-header">Data zakończenia</h3>
					<div
						ref={finishDatePickerRef}
						onClick={() => setActivePicker("finish")}
						className="input-item date-picker-input">
						<p className="date-picker-input__text">
							{finishDate
								? `${finishDate.day}/${finishDate.month + 1}/${finishDate.year}`
								: "Wybierz datę"}{" "}
							<CalendaryIcon className={"date-picker-input__calendary-icon"} />
						</p>
						{activePicker === "finish" && (
							<DatePicker
								selectedDate={finishDate}
								onDateSelect={handleFinishDateSelect}
								position={"right"}
							/>
						)}
					</div>
				</div>

				<textarea
					className="library-modal__body-note note-input"
					placeholder="Notatka"
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>

				<div className="library-modal__body-list user-lists">
					<h3 className="library-modal__body-header">Własne listy</h3>
					{userLists.map((list) => {
						return (
							<label className="user-lists__item" key={list.listName}>
								<input
									className="user-lists__item-input"
									type="checkbox"
									checked={list.isChecked}
									onChange={() => toggleList(list.listName)}
								/>
								<span className="user-lists__item-custom-checkbox"></span>
								<span className="user-lists__item-name">{list.listName}</span>
							</label>
						);
					})}

					<label className="user-lists__item">
						<PlusIcon className={"user-lists__item-icon"} />
						<input
							className="user-lists__item-new-list-input"
							type="text"
							placeholder="Nowa lista"
							value={newList}
							onChange={(e) => setNewList(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									addToList();
								}
							}}
						/>
					</label>
				</div>
			<button className="library-modal__body-save-btn">Zapisz</button>
			</div>
			<div className="library-modal__bg"></div>
		</div>
	);
}
