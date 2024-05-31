import { Box } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";

function CalendarYear() {
    const [startDate, setStartDate] = useState('july 18 2024');

  return (
    <Box sx={{width:"723px"}}>
      <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={12}
              inline
            />
    </Box>
  )
}

export default CalendarYear