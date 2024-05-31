import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import CloseBack from "../Images/CloseBack.svg";
import TakePhoto from "../Images/TakePhoto.svg";

// for DropDOwn
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CustomerSideBarEdit(props) {
  const inputFile = useRef(null);

  const [age, setAge] = React.useState("");
  const [ImgSrc,setImgSrc]=useState(TakePhoto)
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ width: "100%",height:"100vh", overflowY:"auto", backgroundColor: "white",scrollbarWidth:"none" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
          Add Customer
        </Typography>
        <Button
          onClick={() => {
            props.setIsEdit(false);
            props.setIsInfo(false)
          }}
        >
          <img src={CloseBack} style={{ position: "relative" }}></img>
          <Typography
            sx={{
              position: "absolute",
              fontWeight: "700",
              color: "rgba(231, 29, 54, 1)",
            }}
          >
            X
          </Typography>
        </Button>
      </Box>
      <Box  sx={{paddingLeft: "30px"}}>
          <label>Select photo
           <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={(e)=>{
            setImgSrc(URL.createObjectURL(e.target.files[0]))
           }}/>
          </label>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "63px",
        }}
      >
        <img src={ImgSrc} style={{width:"110px",height:"110px",borderRadius:"100px"}}/>
      </Box>
      <Box sx={{ paddingLeft: "30px", paddingTop: "35px" }}>
        <Box>
          <label style={{ fontWeight: "400", fontSize: "14px" }}>
            First Name
          </label>
          <br />
          <input
            type="text"
            placeholder="John "
            style={{
              height: "50px",
              width: "90%",
              border: "none",
              backgroundColor: "rgba(247, 247, 248, 1)",
              borderRadius: "5px",
            }}
          />
          <br />
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "400", fontSize: "14px" }}>
            Last Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Deo "
            style={{
              height: "50px",
              width: "90%",
              border: "none",
              backgroundColor: "rgba(247, 247, 248, 1)",
              borderRadius: "5px",
            }}
          />
          <br />
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "400", fontSize: "14px" }}>Email</label>
          <br />
          <input
            type="email"
            placeholder="Example@gmail.com "
            style={{
              height: "50px",
              width: "90%",
              border: "none",
              backgroundColor: "rgba(247, 247, 248, 1)",
              borderRadius: "5px",
            }}
          />
          <br />
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "400", fontSize: "14px" }}>
            Phone Number
          </label>
          <br />
          <input
            type="number"
            placeholder="33757005467"
            style={{
              height: "50px",
              width: "90%",
              border: "none",
              backgroundColor: "rgba(247, 247, 248, 1)",
              borderRadius: "5px",
            }}
          />
          <br />
        </Box>
        <Box sx={{ marginTop: "15px", border: "none" }}>
          <label>Gender</label>
          <Box
            sx={{
              width: "90%",
              backgroundColor: "rgba(247, 247, 248, 1)",
              border: "none",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "90%",
            height: "50px",
            backgroundColor: "rgba(96, 91, 255, 1)",
            marginTop: "20px",
            textTransform:"capitalize",
            marginBottom:"20px"
          }}
          onClick={() => {
            props.setIsEdit(false);
          }}
        >
          Add Customer
        </Button>
      </Box>
    </div>
  );
}

export default CustomerSideBarEdit;
