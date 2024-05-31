import React from 'react'
import { Box } from '@mui/material'
import LogIn from '../Images/LogIn.svg'
function DefaultMsg() {
  return (
    <Box sx={{width:"100%", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={LogIn} style={{width:"300px"}}/>
    </Box>
  )
}

export default DefaultMsg