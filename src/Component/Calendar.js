import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import SL1 from "../Images/SL1.svg";
import SL2 from "../Images/SL2.svg";
import SL3 from "../Images/SL3.svg";
import CalendarYear from "./CalendarYear";
import CalendarMonth from "./CalendarMonth";
import CalendarDay from "./CalendarDay";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
const Calendar = () => {
  const [alignment, setAlignment] = React.useState("Year");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [displayType, setDisplayType] = useState("Year");
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
            Calendar
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            sx={{ backgroundColor: "rgba(96, 91, 255, 0.05)" }}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "rgba(96, 91, 255, 1)",
                },
              }}
              value="Day"
              onClick={() => {
                setDisplayType(() => {
                  return "Day";
                });
              }}
            >
              Day
            </ToggleButton>
            <ToggleButton
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "rgba(96, 91, 255, 1)",
                },
              }}
              value="Week"
            >
              Week
            </ToggleButton>
            <ToggleButton
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "rgba(96, 91, 255, 1)",
                },
              }}
              value="Month"
              onClick={() => {
                setDisplayType(() => {
                  return "Month";
                });
              }}
            >
              Month
            </ToggleButton>
            <ToggleButton
              sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "rgba(96, 91, 255, 1)",
                },
              }}
              value="Year"
              onClick={() => {
                setDisplayType(() => {
                  return "Year";
                });
              }}
            >
              Year
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ padding: "0 20px 20px",overflowY: 'auto', height: '80vh',scrollbarWidth:"none" }}>
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
                    fontWeight:"600",
                    fontSize:"14px",
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
        <Box sx={{ overflowY: 'auto', height: '87vh',scrollbarWidth:"none"}}>
          {displayType === "Year" ? (
            <CalendarYear />
          ) : displayType === "Month" ? (
            <CalendarMonth />
          ) : (
            <CalendarDay />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
