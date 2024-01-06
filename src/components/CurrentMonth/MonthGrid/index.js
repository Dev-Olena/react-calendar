import React, { useContext } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import CalendarContext from '../../../contexts/CalendarContext';
import Day from './Day';
import { CONSTANTS } from '../../../constants';
import styles from './MonthGrid.module.css';

const { WEEKDAYS } = CONSTANTS;

const MonthGrid = () => {
    const [currentDay, setCurrentDay] = useContext(CalendarContext);

    //days of month
    const firstDayOfMonth = startOfMonth(currentDay);
    const lastDayOfMonth = endOfMonth(currentDay);
    const startDay = startOfWeek(firstDayOfMonth);
    const endDay = endOfWeek(lastDayOfMonth);
    const calendarDays = eachDayOfInterval({ start: startDay, end: endDay });


    return (
        <article className={styles['calendar-grid']}>

            {WEEKDAYS.map((day, index) => <li
                key={index}
                className={styles.weekdays}>
                {day}
            </li>)}
            
            {calendarDays.map((date, index) => <Day
                key={index}
                dateObj={date} />)}

        </article>
    );
}

export default MonthGrid;
