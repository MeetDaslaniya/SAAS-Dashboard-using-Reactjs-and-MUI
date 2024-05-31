import React from 'react'
import { Box, Button, Typography, colors } from '@mui/material'
import Figma from '../Images/Figma.svg'
import FigmaBack from '../Images/FigmaBack.svg'
import EditTask from '../Images/EditTask.svg'
import DeleteTask from '../Images/DeleteTask.svg'
import PSBack from '../Images/PSBack.svg'
import PS from '../Images/PS.svg'
import AdobiTaskView from '../Images/AdobiTaskView.svg'
function TaskPreviewList() {
  return (
    <div>
        <Box sx={{width:"98%", marginRight:"2%",borderRadius:"15px",backgroundColor:"white", marginTop:"30px",padding:"20px",alignItems:"center"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography sx={{fontWeight:"600",fontSize:"16px"}}>To Do</Typography>
                <Button>
                See More
                </Button>
            </Box>
            <table style={{width:"100%"}}>
                <tr>
                    <td>Check Box</td>
                    <td>Task Name</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Member</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <tr>
                    <td><input type='checkbox'/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={FigmaBack} /><img src={Figma} style={{position:"absolute",top:"1px",left:"3px"}}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Ui Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(255, 143, 107, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Pending</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
                <tr>
                    <td><input type='checkbox'/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={AdobiTaskView}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Logo Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(255, 143, 107, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Pending</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
            </table>
        </Box>
        <Box sx={{width:"98%", marginRight:"2%",borderRadius:"15px",backgroundColor:"white", marginTop:"30px",padding:"20px",alignItems:"center"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Doing</Typography>
                <Button>
                See More
                </Button>
            </Box>
            <table style={{width:"100%"}}>
                <tr>
                    <td>Check Box</td>
                    <td>Task Name</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Member</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <tr>
                    <td><input type='checkbox' checked/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={PSBack} /><img src={PS} style={{position:"absolute",top:"7px",left:"8px"}}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Grapich Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(96, 91, 255, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Running</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
                <tr>
                    <td><input type='checkbox' checked/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={AdobiTaskView}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Web Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(96, 91, 255, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Running</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
            </table>
        </Box>
        <Box sx={{width:"98%", marginRight:"2%",borderRadius:"15px",backgroundColor:"white", marginTop:"30px",padding:"20px",alignItems:"center"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Done</Typography>
                <Button>
                See More
                </Button>
            </Box>
            <table style={{width:"100%"}}>
                <tr>
                    <td>Check Box</td>
                    <td>Task Name</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Member</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
                <tr>
                    <td><input type='checkbox' checked/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={FigmaBack} /><img src={Figma} style={{position:"absolute",top:"1px",left:"3px"}}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Ui Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(43, 153, 67, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Done</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
                <tr>
                    <td><input type='checkbox' checked/></td>
                    <td style={{position:"relative",display:"flex",alignItems:"center"}}><img src={AdobiTaskView}/> <Typography sx={{ marginLeft:"5px",color:"rgba(96, 91, 255, 1)"}}>Logo Design</Typography></td>
                    <td>03/12/2021</td>
                    <td style={{color:"rgba(209, 26, 42, 1)"}}>5/12/2021</td>
                    <td>5 Member</td>
                    <td><Button style={{backgroundColor:"rgba(43, 153, 67, 1)",color:"white",borderRadius:"8px",textTransform:"capitalize"}}>Done</Button></td>
                    <td><img src={EditTask}  style={{marginRight:"20px"}}/><img src={DeleteTask}/></td>
                </tr>
            </table>
        </Box>
    </div>
  )
}

export default TaskPreviewList