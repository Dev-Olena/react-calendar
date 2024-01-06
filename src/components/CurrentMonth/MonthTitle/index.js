import React, {useContext} from 'react';
import {format} from 'date-fns';
import CalendarContext from '../../../contexts/CalendarContext';
import styles from './MonthTitle.module.css';



const MonthTitle = () => {
    const [currentDay, setCurrentDay] = useContext(CalendarContext);

    const title = format(currentDay, `MMMM yyyy`);

    return (
        <h3 className={styles['month-title']}>
            {title}
        </h3>
    );
}

export default MonthTitle;
