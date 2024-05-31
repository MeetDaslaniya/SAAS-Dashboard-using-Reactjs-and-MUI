import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";


function CalendarDay() {
  return (
    <div style={{width:"55vw"}}>
      <Scheduler
      
      view="day"
      day={{
        startHour: 9, 
        endHour: 26, 
        step: 60,
        navigation: true
        }}
      events={[
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2024/5/28 9:00"),
      end: new Date("2024/5/28 10:00"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2024/5/28 10:00"),
      end: new Date("2024/5/28 11:00"),
    },
  ]}
/>
    </div>
  )
}
export default CalendarDay