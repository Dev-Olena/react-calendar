import React, {useState}  from 'react';
import CalendarContext from '../../contexts/CalendarContext';
import CurrentDay from '../CurrentDay';
import CurrentMonth from '../CurrentMonth';
import styles from './Calendar.module.css'


const Calendar = () => {
    const [currentDay, setCurrentDay] = useState(new Date());
       
    return (
        <CalendarContext.Provider value={[currentDay, setCurrentDay]}>
            <main className={styles.wrapper}>
                <CurrentDay />
                <CurrentMonth />
            </main>
        </CalendarContext.Provider>
    );
}

export default Calendar;