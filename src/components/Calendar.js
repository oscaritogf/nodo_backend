import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = ({ date, setDate }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-center ">Calendario</h2>
      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-lg"
      />
    </div>
  );
};

export default CalendarSection;
