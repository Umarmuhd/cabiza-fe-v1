import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
    console.log(value)

    return (
        <div>
            <h1>NextJs Calendar - GeeksforGeeks</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}