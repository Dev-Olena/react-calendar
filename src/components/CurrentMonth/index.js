import React from 'react';
import MonthTitle from './MonthTitle';
import MonthGrid from './MonthGrid';
import styles from './CurrentMonth.module.css';


const CurrentMonth = () => {
      
    return (
        <section className={styles['month-wrapper']}>
            <MonthTitle />
            <MonthGrid />
        </section>
    );
}

export default CurrentMonth;

