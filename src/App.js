import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-date-picker';
// import { DateTime } from "luxon";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./App.css";


const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {

      title: "Tennis  Meet up With Paul",
      allDay: true,
      start: new Date(2022, 4, 4, 15, 19, 50),
      end: new Date(2022, 4, 4, 16, 19, 50),
  },
  {
      title: "Ice hockey boot camp with Paul",
      start: new Date(2022, 4, 7),
      end: new Date(2022, 4, 10),
  },
  {
      title: "Marketing tour",
      start: new Date(2022, 4, 20),
      end: new Date(2022, 4, 23),
  },
];


function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
}

  return (
    <div className="App">
      <h1>Sports Network Calender from Niranjan </h1>
      <h3>Creat a new activity</h3>
      <div>
        <input type="text" placeholder="Title of the event" style={{ width: "20%", marginRight: "10px" }}value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}/>
        <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Activity
                </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      
    </div>
  );
}

export default App;
