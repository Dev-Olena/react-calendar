import React, { useContext } from 'react';
import { format, isSameMonth, isSameDay } from 'date-fns';
import cx from 'classnames';
import CalendarContext from '../../../../contexts/CalendarContext';
import styles from './Day.module.css';

const Day = (props) => {

    const [currentDay, setCurrentDay] = useContext(CalendarContext);

    const date = props.dateObj;

    const dayClass = cx([styles.day], {
        [styles.number]: !isSameDay(date, currentDay),
        [styles.current]: isSameDay(date, currentDay)

    })

    return (

        <li
            className={isSameMonth(date, currentDay) ? dayClass : styles.hidden}
            onClick={() => {
                setCurrentDay(date)
            }}>
            {format(date, 'd')}

        </li>
    );
}

export default Day;
