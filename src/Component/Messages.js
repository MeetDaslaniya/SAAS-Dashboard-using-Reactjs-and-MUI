import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Addbaton from "../Images/Addbaton.svg";
import SearchIcon from "../Images/SearchIcon.svg";
import M1 from "../Images/M1.svg";
import M2 from "../Images/M2.svg";
import M3 from "../Images/M3.svg";
import M4 from "../Images/M4.svg";
import M5 from "../Images/M5.svg";
import M6 from "../Images/M6.svg";
import M7 from "../Images/M7.svg";
import MsgChat from './MsgChat';
import DefaultMsg from './DefaultMsg';

const MsgDetails = [
  {
    name: "Shelby Goode",
    img: M1,
    time: "1 min ago",
  },
  {
    name: "Robert Bacins",
    img: M2,
    time: "9 min ago",
  },
  {
    name: "John Carilo",
    img: M3,
    time: "15 min ago",
  },
  {
    name: "Adriene Watson",
    img: M4,
    time: "21 min ago",
  },
  {
    name: "Jhon Deo",
    img: M5,
    time: "29 min ago",
  },
  {
    name: "Mark Ruffalo",
    img: M6,
    time: "45 min ago",
  },
  {
    name: "Bethany Jackson",
    img: M7,
    time: "1h ago",
  },
];


const Messages = () => {
  const [ChatPerson,setChatperson]=useState(null)
  const [search,setSearch]=useState("")
  const [ChatPersonImg,setChatpersonImg]=useState(null)
  const personMsgD =MsgDetails.filter((item) => {
    return search.toLowerCase() === ""
      ? MsgDetails
      : item.name.toLowerCase().includes(search.toLowerCase());
  }).map((item) => {
    return (
      <Box>
        <Button onClick={()=>{
          setChatperson(()=>{
           return item.name
          })
          setChatpersonImg(()=>{
            return item.img
          })
        }}>
          <Box style={{ display: "flex",padding:"10px",backgroundColor:ChatPerson===item.name?"rgba(96, 91, 255, 0.1)":""}}>
            <img src={item.img} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textTransform: "capitalize",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                {item.name}
              </Typography>
              <Typography
              className="lineLimite"
                sx={{
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#828691",
                  textAlign: "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
            </Box>
            <small
              style={{ fontSize: "10px", color: "#828691", whiteSpace: "nowrap" }}
            >
              {item.time}
            </small>
          </Box>
        </Button>
        <Divider sx={{ margin: "8px 0px 5px 0px" }} />
      </Box>
    );
  });
  return (
    <Box sx={{display:'flex'}}>

      <div
        style={{
          width: "25%",
          height:"85vh",
          backgroundColor: "#FFFFFF",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "30px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            Message
          </Typography>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={Addbaton} />
          </button>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(247, 247, 248, 1)",
            marginTop: "15px",
          }}
        >
          <img src={SearchIcon} style={{ paddingLeft: "20px" }} />
          <input
            type="text"
            placeholder="Search"
            onChange={(e)=>{setSearch(e.target.value)}}
            style={{
              width: "90%",
              height: "34px",
              backgroundColor: "rgba(247, 247, 248, 1)",
              border: "none",
              marginLeft: "20px",
            }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#828691",
            padding: "20px 20px 0 20px",
          }}
        >
          <Typography>All</Typography>
          <Typography style={{ color: "rgba(96, 91, 255, 1)", position:"relative" }}>
            Personal
          <Box sx={{width:"100%",height:"2px",backgroundColor:"blue",position:"absolute", top:"25px"}}></Box>
          </Typography>
          <Typography>Teams</Typography>
        </Box>
        <Box sx={{ marginBottom: "20px" , height:"1px", width:"100%", backgroundColor:"rgba(3, 2, 41, 0.1)"}} >
          </Box>
        <Box className="scrollbarHidden" sx={{height:"65vh", overflow:"scroll"}}>
        {personMsgD}
        </Box>
  
      </div>
        <Box sx={{width:"70%"}}>
            {
              ChatPerson?<MsgChat ChatPerson={ChatPerson} ChatPersonImg={ChatPersonImg}/>:<DefaultMsg/>
            }
        </Box>
  
    </Box>
    
  );
};

export default Messages;
