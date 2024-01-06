import React from 'react';
import Calendar from '../../components/Calendar';
import styles from './CalendarPage.module.css'

const CalendarPage = () => {
    return (
        <div className={styles.page}>
            <Calendar/>
        </div>
    );
}

export default CalendarPage;
