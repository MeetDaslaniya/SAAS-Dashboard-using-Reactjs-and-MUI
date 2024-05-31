import FullCalendar from '@fullcalendar/react'
import { Box } from '@mui/material'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
function CalendarMonth() {
  return (
    <Box sx={{width:"55vw",backgroundColor:"white", padding:"0 20px 20px"}}>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        
        events={[
          { title: 'Party Time', description: 'asdasd', date: '2024-05-02' },
          { title: 'Free day', description: 'asdasd', date: '2024-05-02' },
          { title: 'Victory day', description: 'asdasd', date: '2024-05-16' },
          { title: 'Invited by friends', description: 'asdasdasd', date: '2024-05-21' },
          { title: 'Christmas Day', description: 'asdasdasd', date: '2024-12-25' }
      ]}
        />
    </Box>
  )
}

export default CalendarMonth;