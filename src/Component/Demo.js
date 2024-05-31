import { Box, Button, Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/Logo.svg";
import DeshBord from "../Images/DeshBord.svg";
import Analytics from "../Images/Analytics.svg";
import invoice from "../Images/invoice.svg";
import Scadule from "../Images/Scadule.svg";
import Calendar from "../Images/Calendar.svg";
import Messages from "../Images/Messages.svg";
import Notification from "../Images/Notification.svg";
import LogoutSymbol from "../Images/LogoutSymbol.svg";
import Settings from "../Images/Setting.svg";
import LoginPerson from "../Images/LoginPerson.svg";
import lemp from "../Images/lemp.svg";
import ActiveDeshbord from "../Images/ActiveDeshbord.svg";
import ActiveAnalitics from "../Images/ActiveAnalitics.svg";
import ActiveInvoice from "../Images/ActiveInvoice.svg";
import ActiveScadule from "../Images/ActiveScadule.svg";
import ActiveCalendar from "../Images/ActiveCalendar.svg";
import ActivityMsg from "../Images/ActivityMsg.svg";

const MenuItem = [
  {
    name: "Dashboard",
    LogoImage: DeshBord,
    ActiveLogoImage: ActiveDeshbord,
    to: "Dashboard",
  },
  {
    name: "Analytics",
    LogoImage: Analytics,
    ActiveLogoImage: ActiveAnalitics,
    to: "Analytics",
  },
  {
    name: "Invoice",
    LogoImage: invoice,
    ActiveLogoImage: ActiveInvoice,
    to: "Invoice",
  },
  {
    name: "Schedule",
    LogoImage: Scadule,
    ActiveLogoImage: ActiveScadule,
    to: "Schedule",
  },
  {
    name: "Calendar",
    LogoImage: Calendar,
    ActiveLogoImage: ActiveCalendar,
    to: "Calendar",
  },
  {
    name: "Messages",
    LogoImage: Messages,
    ActiveLogoImage: ActivityMsg,
    to: "Messages",
  },
  {
    name: "Notification",
    LogoImage: Notification,
    to: "Notification",
  },
  {
    name: "Settings",
    LogoImage: Settings,
    to: "Settings",
  },
];

function Demo() {
  // console.log(window.location.pathname.split('/')[2])
  const [sideBarSize, setSideBarSize] = useState("6vw");
  const [toggle, setToggle] = useState("flase");
  const [activeLink, setActiveLink] = useState("Dashboard");
  const menuitem = MenuItem.map((item) => {
    return (
      <Link
        className={
          window.location.pathname.split('/')[2] === `${item.to}` ? "LinearGradiant" : ""
        }
        to={item.to}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: sideBarSize === "6vw" ? "center" : "",
          paddingLeft: sideBarSize != "6vw" ? "15px" : "",
          // backgroundColor: window.location.pathname===`${item.to}`?"yellow":""
        }}
        onClick={() => {
          setActiveLink(item.to);
        }}
      >
        <button
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "8px",
            marginBottom:"8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <img
            src={
               window.location.pathname.split('/')[2]=== item.to
                ? item.ActiveLogoImage
                : item.LogoImage
            }
            style={{ display: "flex", justifyContent: "center" }}
          />
          <li
            style={{
              listStyle: "none",
              color: "#828691",
              fontSize: "16px",
              textTransform: "capitalize",
              display: sideBarSize == "6vw" ? "none" : "block",
            }}
          >
            {item.name}
          </li>
          <div
            style={{
              width: "22px",
              height: "14px",
              backgroundColor: "rgba(209, 26, 42, 0.1)",
              color: "rgba(209, 26, 42, 1)",
              borderRadius: "7px",
              display:
                sideBarSize === "6vw" || item.name != "Messages"
                  ? "none"
                  : "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10px",
            }}
          >
            49
          </div>
        </button>
      </Link>
    );
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        sx={{ width: "100%", display: "flex", backgroundColor: "#FAFAFB" }}
      >
        <Grid
          item
          xs={sideBarSize === "6vw" ?1.8:12}
          sm={sideBarSize === "6vw" ? 0.9 : 1.8}
          sx={{ backgroundColor: sideBarSize === "6vw" ? "" : "white" }}
        >
          <Box
            sx={{
              marginLeft: sideBarSize === "6vw" ? "1vw" : "0px",
              whightSpace: "nowrap",
              overflow: "hidden",
              // backgroundColor:"white",
              height: "500px",
              paddingTop: sideBarSize === "6vw" ? "30px" : "0",
              paddingBottom: sideBarSize === "6vw" ? "30px" : "0",
              display: "flex",
              flexDirection: "column",
             
            }}
          >
            <div
              className="scrollbarHidden"
              style={{
                position: "fixed",
                height: sideBarSize==="6vw"?"90vh":"100vh",
                overflow: "scroll",
                backgroundColor: sideBarSize === "6vw" ? "white" : "",
                borderRadius: sideBarSize === "6vw" ? "10px" : "",
              }}
            >
              <div>
                <Box
                  style={{
                    display: toggle ? "block" : "flex",
                    margin: sideBarSize === "6vw" ? "1vw" : "25px 19px 0 19px",
                    display: "flex",
                    justifyContent: sideBarSize === "6vw" ? "center" : "start",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (sideBarSize === "6vw") {
                        setSideBarSize("220px");
                      } else {
                        setSideBarSize("6vw");
                      }
                      setToggle(!toggle);
                    }}
                  >
                    <img
                      src={logo}
                      style={{
                        marginLeft: sideBarSize === "6vw" ? "0px" : "15px",
                        width: "42px",
                      }}
                    />
                  </button>
                  <Typography
                    style={{
                      display: sideBarSize === "6vw" ? "none" : "block",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Base
                  </Typography>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    style={{
                      display: sideBarSize === "6vw" ? "block" : "none",
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  >
                    Base
                  </Typography>
                </div>
                <ul style={{ paddingInlineStart: "0vw" }}>{menuitem}</ul>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Box
                  style={{
                    display: sideBarSize === "6vw" ? "none" : "flex",
                    justifyContent: "center",
                    position: "relative",
                    marginBottom: "30px",
                  }}
                >
                  <img src={lemp} />
                  <Button
                    variant="contained"
                    sx={{
                      position: "absolute",
                      bottom: "5px",
                      borderRadius: "10px",
                      height: "33px",
                      backgroundColor:"rgba(96, 91, 255, 1)",
                      textTransform:"capitalize"
                    }}
                  >
                    Upgrade Now
                  </Button>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: sideBarSize === "6vw" ? "50px" : "",
                    }}
                  >
                    <img src={LoginPerson} style={{width:"35px"}}/>
                  </div>
                  <Box
                    style={{ display: sideBarSize == "6vw" ? "none" : "block" , marginLeft:"10px"}}
                  >
                    <Typography sx={{ fontWeight: "600px" , fontSize:"12px"}}>
                      Easin Arafat
                    </Typography>
                    <Typography sx={{ color: "#828691" , fontSize:"12px"}}>
                      Free Account
                    </Typography>
                  </Box>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      display: sideBarSize == "6vw" ? "none" : "block",
                    }}
                  >
                    <Link to="/">
                    <img src={LogoutSymbol} />
                    </Link>
                  </button>
                </Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "5px",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Link to="/">
                    <img
                      src={LogoutSymbol}
                      style={{
                        display: toggle ? "block" : "none",
                        marginTop: "20px",
                      }}
                    />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={sideBarSize === "6vw"?10.2:0} sm={sideBarSize === "6vw" ? 11.1 : 10.2}>
          <Box className="scrollbarHidden"  sx={{ width: "100%", overflow: "scroll", display:{sm:"block", sx:sideBarSize === "6vw" ?"block":"none"} }}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Demo;
