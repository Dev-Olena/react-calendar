import React, {useContext} from 'react';
import {format} from 'date-fns';
import CalendarContext from '../../contexts/CalendarContext';
import styles from './CurrentDay.module.css'

const CurrentDay = () => {
    
    const [currentDay, setCurrentDay] = useContext(CalendarContext);
    
    const day = format(currentDay, 'EEEE');
    const date = format(currentDay, 'd')
    
    return (
        <section className={styles['day-wrapper']}>
            <p className={styles.day}>{day}</p>
            <p className={styles.date}>{date}</p>
        </section>
    );
}

export default CurrentDay;
