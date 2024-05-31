import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "../Images/SearchIcon.svg";
import TaskPreviewBoard from "./TaskPreviewBoard";
import TaskPreviewTimeline from "./TaskPreviewTimeline";
import TaskPreviewList from "./TaskPreviewList";

function TaskPreview() {
  const [alignment, setAlignment] = useState('List');

  const [activeButton, setActiveButton] = useState("List");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box sx={{ padding: "20px", margin: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
          Task Preview
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "122px",
            height: "34px",
            marginLeft: "15px",
            borderRadius: "10px",
            backgroundColor: "rgba(96, 91, 255, 1)",
            marginRight: "20px",
            textTransform: "capitalize",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>+&nbsp;</Typography>
          Add Task
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            value="List"
            sx={{
                textTransform:"capitalize",
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: 'rgba(96, 91, 255, 1)'
              }
            }}
            onClick={() => {
              setActiveButton("List");
            }}
          >
            List
          </ToggleButton>
          <ToggleButton
          
            value="Board"
            onClick={() => {
              setActiveButton("Board");
            }}
            sx={{
              textTransform:"capitalize",
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: 'rgba(96, 91, 255, 1)',
              }
            }}
          >
            Board
          </ToggleButton>
          <ToggleButton
            value="Timeline"
            onClick={() => {
              setActiveButton("Timeline");
            }}
            sx={{
              textTransform:"capitalize",
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: 'rgba(96, 91, 255, 1)'
              }
            }}
          >
            Timeline
          </ToggleButton>
        </ToggleButtonGroup>
        
        <Box
          style={{
            width: "230px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius:"10px",
            marginTop: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "90%",
              height: "34px",
              backgroundColor: "white",
              border: "none",
              marginLeft: "20px",
              borderRadius:"10px",
            }}
          />
          <img src={SearchIcon} style={{ paddingRight: "20px" }} />
        </Box>
      </Box>
      <Box>
        {activeButton === "List" ? (
          <TaskPreviewList />
        ) : activeButton === "Board" ? (
          <TaskPreviewBoard />
        ) : (
          <TaskPreviewTimeline />
        )}
      </Box>
    </Box>
  );
}

export default TaskPreview;
