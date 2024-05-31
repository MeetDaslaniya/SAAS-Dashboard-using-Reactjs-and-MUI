import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import logo from '../Images/Logo.svg'

function Confirm(){
    return(
        <Box style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "100vh", backgroundColor: "#FAFAFB" }}>
            <Box style={{ width: "35vw", backgroundColor: "#FFFFFF" ,padding:"50px"}}>
                <Box style={{display:"flex",justifyContent:"center",marginTop: "10%"}}>
                <img src={logo} ></img>
                </Box>
                <Typography style={{ fontSize: "25px", fontWeight: "600",display:"flex",justifyContent:"center",marginTop: "7%" }}>Recover</Typography>
                <Typography style={{ fontSize: "16px", fontWeight: "400", marginLeft: "5%", marginTop: "7%" }}>Email Address</Typography>
                <input type='email' style={{ marginTop: "3%", width: '90%', marginLeft: '5%', height: '7vh', border: '0.5px solid #FAFAFB', backgroundColor: '#F7F7F8', color: "#030229" }} placeholder='example@gmail.com'></input>
                <Button variant="contained" style={{backgroundColor:"#605BFF", width:"90%", marginLeft:"5%", marginTop:"7%",marginBottom:"10%", padding:"15px"}}>Reset Your Password</Button>

            </Box>
        </Box>
    )
}

export default Confirm;