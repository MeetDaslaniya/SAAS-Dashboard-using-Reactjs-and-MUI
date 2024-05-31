import React from "react";
import {
  Checkbox,
  Divider,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import SignUpIMG from "../Images/SignUp.svg";
import logo from "../Images/Logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
function SignUp() {
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
              Sign Up
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
              Full Name
            </Typography>
            <input
              type="text"
              style={{
                marginTop: "3%",
                width: "90%",
                marginLeft: "5%",
                height: "7vh",
                border: "0.5px solid #FAFAFB",
                backgroundColor: "#F7F7F8",
                color: "#030229",
              }}
              placeholder="Jiangyu"
            ></input>
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
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "5%",
                marginTop: "7%",
              }}
            >
              Username
            </Typography>
            <input
              type="text"
              style={{
                marginTop: "3%",
                width: "90%",
                marginLeft: "5%",
                height: "7vh",
                border: "0.5px solid #FAFAFB",
                backgroundColor: "#F7F7F8",
                color: "#030229",
              }}
              placeholder="johnkevine4362"
            ></input>
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
              style={{
                marginTop: "3%",
                width: "90%",
                marginLeft: "5%",
                height: "7vh",
                border: "0.5px solid #FAFAFB",
                backgroundColor: "#F7F7F8",
                color: "#030229",
              }}
              placeholder=""
            ></input>
          </form>
          <Box style={{ display: "flex", marginTop: "5%", marginLeft: "3%" }}>
            <Checkbox />
            <Box>
              By creating an account you agree to the{" "}
              <a href="#">terms of use</a> and our{" "}
              <a href={"#"}>privacy policy</a>.
            </Box>
          </Box>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#605BFF",
                width: "90%",
                marginLeft: "5%",
                marginTop: "7%",
                padding: "15px",
              }}
            >
              Create account
            </Button>
          </Link>
          <Typography
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              fontFamily: "Nunito",
            }}
          >
            Already have an account?&nbsp;&nbsp;{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              <Link to="/">Log in</Link>
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
          <img src={SignUpIMG} alt="SignUpIMG" style={{ width: 500 }}></img>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
