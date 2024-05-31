import React from "react";
import { useState } from "react";
import {
  Checkbox,
  Divider,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import LogInImg from "../Images/LogIn.svg";
import logo from "../Images/Logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

function LogIn() {
    const [Message,setMessage]=useState("")
    const [passwordMessage,setpasswordMessage]=useState("")
    const [visitedEmail,setVisitedEmail]=useState(false)
    const [visitedPassword,setvisitedPassword]=useState(false)
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

   const blurFunctionPassword=(e)=>{
    setvisitedPassword(true)
   }
  
   const blurFunction=(e)=>{
    setVisitedEmail(true)
   }
  const handleChange = (e) => {
    if (visitedEmail===true){
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(formData.email)) {
          setMessage("*you have entered invalid email.");
        } else {
          setMessage("");
        }
    }
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
}
const handleChangePassword=(e)=>{
    if (visitedPassword===true){
        let passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
        if (!passwordRegex.test(formData.password)) {
          setpasswordMessage("*you have entered invalid Password.");
        } else {
          setpasswordMessage("");
        }
    }
    
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid item lg={12} container>
      <Grid item lg={3} sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <Box style={{ padding: "15px" }}>
          <Box
            style={{ display: "flex", justifyContent: "center" }}
            sx={{ marginTop: "10vh" }}
          >
            <img src={logo} alt="LOGO" style={{}}></img>
          </Box>
          <Box
            sx={{ marginTop: "5%", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h5" style={{ fontWeight: "600" }}>
              Log in
            </Typography>
          </Box>
          <Box
            sx={{ marginTop: "10%", display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{
                color: "black",
                backgroundColor: "#F7F7F8",
                padding: "20px",
              }}
              size="large"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "#F7F7F8",
                marginLeft: "2vw",
                padding: "20px",
              }}
              size="large"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
          </Box>
          <Divider style={{ marginTop: "5%" }}>
            <Typography style={{ fontWeight: "600" }}>Or</Typography>
          </Divider>
          <form>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "5%",
                marginTop: "7%",
              }}
            >
              Email Address
            </Typography>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
             onBlur={blurFunction} 
              type="email"
              style={{
                marginTop: "3%",
                width: "90%",
                marginLeft: "5%",
                height: "7vh",
                border: "0.5px solid #FAFAFB",
                backgroundColor: "#F7F7F8",
                color: "#030229",
              }}
              placeholder="example@gmail.com"
            ></input>
            <Typography sx={{color:"red", fontSize:"10px", marginLeft:"25px", marginTop:"5px",display:visitedEmail?"block":"none"}}>{Message}</Typography>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "5%",
                marginTop: "7%",
              }}
            >
              Password
            </Typography>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={blurFunctionPassword}
              value={formData.password}
              onChange={handleChangePassword}
              style={{
                marginTop: "3%",
                width: "90%",
                marginLeft: "5%",
                height: "7vh",
                border: "0.5px solid #FAFAFB",
                backgroundColor: "#F7F7F8",
                color: "#030229",
              }}
            ></input>
            <Typography sx={{color:"red", fontSize:"10px", marginLeft:"25px", marginTop:"5px",display:visitedPassword?"block":"none"}}>{passwordMessage}</Typography>
            <Box style={{ display: "flex", marginTop: "5%", marginLeft: "3%" }}>
              <Checkbox />
              <Box style={{ marginTop: "3%", fontSize: "14px" }}>
                Remember me
              </Box>
            </Box>
            <Link
              to={formData.email==='meetdaslaniya2004@gmail.com'&&formData.password==='Meet@1234'?"home/Dashboard":"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#605BFF",
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "7%",
                  padding: "15px",
                }}
                onClick={()=>{
                    if(formData.email!='meetdaslaniya2004@gmail.com'){
                        setMessage("*you have entered invalid email.")
                    }
                    else if(formData.password!='Meet@1234'){
                        setpasswordMessage("*invalid Password.");
                    }
                }}
              >
                Log in
              </Button>
            </Link>
          </form>
          <Typography
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              fontSize: "14px",
            }}
          >
            Don’t have account yet?&nbsp;&nbsp;{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              <Link to="/SignUp">New Account</Link>
            </a>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        lg={9}
        sx={{
          backgroundColor: "#FAFAFB",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={LogInImg} alt="SignUpIMG" style={{ width: 500 }}></img>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LogIn;
