import React, {useContext} from "react";
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
import { CalenderContext } from "../../App";

const ReactCalender = () => {
  const calenderData = useContext(CalenderContext)
  const onChange = date => calenderData.setDate(date)

  return (
        <div className="my-calender">
            <Calendar
              onChange={onChange}
              value={calenderData.value}
            />
        </div>
    
  );
};

export default ReactCalender;
