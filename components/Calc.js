import React, {useState} from "react";
import {
    format, startOfWeek, addDays, startOfMonth, endOfMonth,
    endOfWeek, isSameMonth, isSameDay, addMonths, subMonths
} from 'date-fns';
import styles from '/styles/Calc.module.scss';
import {useDispatch, useSelector} from "react-redux";


const Calendar = () => {

    const dispatch = useDispatch();
    const selectDate = useSelector(({selectDate}) => selectDate)
    const [currentDate, setCurrentDate] = useState(new Date());

    const header = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="column col-center">
                    <span>{format(currentDate, dateFormat)}</span>
                </div>
                <div className="column col-end">
                    <div className="icon" onClick={nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        );
    };

    const days = () => {
        const dateFormat = "EEEEEE";
        const days = [];
        let startDate = startOfWeek(currentDate);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="column col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };
    const cells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`column cell ${!isSameMonth(day, monthStart)
                            ? "disabled" : isSameDay(day, selectDate)
                                ? "selected" : ""}`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}>
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}> {days} </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }
    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };
    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };
    const onDateClick = (day) => {
        dispatch({type: "MOD"});
        dispatch({type: "DATA", payload: day})
    }
    return (
        <div className={styles.wrapper}>
            <div className="calendar">
                <div>{header()}</div>
                <div>{days()}</div>
                <div>{cells()}</div>
            </div>
        </div>
    );
};
export default Calendar;

