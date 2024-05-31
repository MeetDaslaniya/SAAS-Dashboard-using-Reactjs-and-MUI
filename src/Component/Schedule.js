import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import SearchIcon from "../Images/SearchIcon.svg";
import SL1 from "../Images/SL1.svg";
import SL2 from "../Images/SL2.svg";
import SL3 from "../Images/SL3.svg";
import ListCalendar from "../Images/ListCalendar.svg";
import TimeCircle from "../Images/TimeCircle.svg";
import ScaduleLocation from "../Images/ScaduleLocation.svg";
import EditScadule from "../Images/EditScadule.svg";
import DeletBack from "../Images/DeletBack.svg";
import Delete from "../Images/Delete.svg";
import { Link } from "react-router-dom";

const ScaduleData = [
  {
    Date: "12 Dec, 2021",
    Time: "10.15AM",
    Location: "Office Meeting",
  },
  {
    Date: "10 Dec, 2021",
    Time: "11.20AM",
    Location: "Home",
  },
  {
    Date: "09 Dec, 2021",
    Time: "11.45AM",
    Location: "Friends Zone",
  },
  {
    Date: "08 Dec, 2021",
    Time: "12.15PM",
    Location: "Office Meeting",
  },
  {
    Date: "07 Dec, 2021",
    Time: "01.20PM",
    Location: "Home",
  },
  {
    Date: "05 Dec, 2021",
    Time: "10.15AM",
    Location: "Meeting Outside",
  },
  {
    Date: "04 Dec, 2021",
    Time: "11.15AM",
    Location: "Office Meeting",
  },
  {
    Date: "04 Dec, 2021",
    Time: "01.25PM",
    Location: "Home",
  },
  {
    Date: "02 Dec, 2021",
    Time: "10.15AM",
    Location: "Friends",
  },
  {
    Date: "01 Dec, 2021",
    Time: "04.30PM",
    Location: "Meeting Outside",
  },
];

const Scadule = ScaduleData.map((item) => {
  return (
    <tr style={{ backgroundColor: "white" }}>
      <td>
        <input type="checkbox" style={{marginLeft:"15px"}}/>
      </td>
      <td>
        <img src={ListCalendar} style={{ marginRight: "15px" }} />
        {item.Date}
      </td>
      <td>
        <img src={TimeCircle} style={{ marginRight: "15px" }} />
        {item.Time}
      </td>
      <td>
        <button
          style={{
            width: "171px",
            height: "45px",
            backgroundColor: "rgba(96, 91, 255, 0.1)",
            color: "rgba(96, 91, 255, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            border: "none",
            borderRadius: "23px",
          }}
        >
          <img
            src={ScaduleLocation}
            style={{ marginLeft: "15px", marginRight: "15px" }}
          />
          {item.Location}
        </button>
      </td>
      <td>
        <Button>
          <img src={EditScadule} />
        </Button>
        <Button>
          <img src={DeletBack} style={{ position: "relative" }} />
          <img src={Delete} style={{ position: "absolute" }} />
        </Button>
      </td>
    </tr>
  );
});

function Schedule() {
  return (
    <Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
            Schedule List
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              width: "122px",
              height: "40px",
              marginLeft: "15px",
              borderRadius: "10px",
              backgroundColor: "rgba(96, 91, 255, 1)",
              marginRight: "20px",
              textTransform:"capitalize",
              border:"1px solod rgba(255, 255, 255, 1)"
            }}
          >
             <div style={{ fontSize: "24px", paddingRight: "5px"}}>+</div>  Add New
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ padding: "0 20px 20px", overflowY: 'auto', height: '82vh', scrollbarWidth:"none" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              width: "18vw",
              backgroundColor: "white",
            }}
          >
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "206px",
                    height: "45px",
                    marginLeft: "15px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(96, 91, 255, 1)",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                    textTransform:"capitalize",
                  }}
                >
                   <div style={{ fontSize: "24px", paddingRight: "5px"}}>+</div>  Create Schedule
                </Button>
              </Box>
              <Box sx={{ padding: "20px" }}>
                <DateCalendar
                  sx={{ width: "16vw" }}
                  referenceDate={dayjs("2024-05-13")}
                  views={["year", "month", "day"]}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                  People
                </Typography>
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
                    placeholder="Search for People"
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
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <img src={SL1} />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                      Eddie Lobanovskiy
                    </Typography>
                    <Typography
                      sx={{
                        color: "#828691",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      laboanovskiy@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <img src={SL2} />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                      Alexey Stave
                    </Typography>
                    <Typography
                      sx={{
                        color: "#828691",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      alexeyst@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <img src={SL3} />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                      Anton Tkacheve
                    </Typography>
                    <Typography
                      sx={{
                        color: "#828691",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      tkacheveanton@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Link to="TaskPreview" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    width: "206px",
                    height: "45px",
                    marginLeft: "15px",
                    borderRadius: "10px",
                    color: "rgba(96, 91, 255, 1)",
                    textTransform: "capitalize",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                    border:"1px solid rgba(96, 91, 255, 0.5)"
                  }}
                >
                  My Schedule
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{overflowY: 'auto', height: '87vh',scrollbarWidth:"none"}}>
          <table
            style={{
              borderCollapse: "separate",
              width: "59vw",
              borderSpacing: "0 20px",
              marginRight: "20px",
              textWrap: "nowrap",
            }}
          >
            <tr style={{backgroundColor:"white",height:"50px" ,position: 'sticky',zIndex:"1",top: '0'}}>
              <td style={{width:"10%"}}>
                <input type="checkbox" style={{marginLeft:"15px"}}/>
              </td>
              <td style={{width:"25%"}}>Date</td>
              <td style={{width:"23%"}}>Time</td>
              <td style={{width:"27%"}}>Location</td>
              <td></td>
            </tr>
            {Scadule}
          </table>
        </Box>
      </Box>
    </Box>
  );
}

export default Schedule;
