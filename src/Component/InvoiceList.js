import React from "react";
import { Box, Button, Typography } from "@mui/material";
import StarImgComponent from "../Component/StarImgComponent";
import ThreeDotHover from "../Component/ThreeDotHover";
import EmailLogo from "../Images/EmailLogo.svg";
import ListCalendar from "../Images/ListCalendar.svg";
import DeleteList from "../Images/DeleteList.svg";
import L1 from "../Images/L1.svg";
import L2 from "../Images/L2.svg";
import L3 from "../Images/L3.svg";
import L4 from "../Images/L4.svg";
import L5 from "../Images/L5.svg";
import L6 from "../Images/L6.svg";
import L7 from "../Images/L7.svg";
import L8 from "../Images/L8.svg";
import L9 from "../Images/L9.svg";
import L10 from "../Images/L10.svg";
import SearchPolo from "../Images/SearchPolo.svg";
import ArrowDownList from "../Images/ArrowDownList.svg";

const InvoiceListdata = [
    {
      InvoiceId: "#876364",
      Name: "Arrora gaur",
      PersonImg: L1,
      Email: "arroragaur@gmail.com",
      Date: "12 Dec, 2020",
      Status: "Complete",
    },
    {
      InvoiceId: "#876123",
      Name: "James Mullican",
      PersonImg: L2,
      Email: "jamesmullican@gmail.com",
      Date: "10 Dec, 2020",
      Status: "Pending",
    },
    {
      InvoiceId: "#876213",
      Name: "Robert Bacins",
      PersonImg: L3,
      Email: "robertbacins@gmail.com",
      Date: "09 Dec, 2020",
      Status: "Complete",
    },
    {
      InvoiceId: "#876987",
      Name: "Bethany Jackson",
      PersonImg: L4,
      Email: "bethanyjackson@gmail.com",
      Date: "09 Dec, 2020",
      Status: "Cancel",
    },
    {
      InvoiceId: "#871345",
      Name: "Anne Jacob",
      PersonImg: L5,
      Email: "annejacob@gmail.com",
      Date: "10 Dec, 2020",
      Status: "Complete",
    },
    {
      InvoiceId: "#872345",
      Name: "Bethany jackson",
      PersonImg: L6,
      Email: "bethanyjackson@gmail.com",
      Date: "10 Dec, 2020",
      Status: "Pending",
    },
    {
      InvoiceId: "#872346",
      Name: "James Mullican",
      PersonImg: L7,
      Email: "jamesmullican@gmail.com",
      Date: "10 Dec, 2020",
      Status: "Complete",
    },
    {
      InvoiceId: "#873245",
      Name: "Jhon Deo",
      PersonImg: L8,
      Email: "jhondeo32@gmail.com",
      Date: "08 Dec, 2020",
      Status: "Complete",
    },
    {
      InvoiceId: "#876364",
      Name: "Bethany jackson",
      PersonImg: L9,
      Email: "bethanyjackson@gmail.com",
      Date: "02 Dec, 2020",
      Status: "Cancel",
    },
    {
      InvoiceId: "#878769",
      Name: "James Mullican",
      PersonImg: L10,
      Email: "jamesmullican@gmail.com",
      Date: "01 Dec, 2020",
      Status: "Pending",
    },
  ];

function InvoiceList(props) {
  const persondetail = InvoiceListdata.map((item) => {
    return (
      <tr style={{ background: "White", height: "70px"}}>
        <td style={{ paddingLeft: "20px" }}>
          <input type="checkbox" style={{ width: "20px" }} />
        </td>
        <td style={{ paddingLeft: "20px" }}>{item.InvoiceId}</td>
        <td
          style={{
            paddingLeft: "50px",
            display: "flex",
            alignItems: "center",
            marginTop: "2vh",
          }}
        >
          <img src={item.PersonImg} style={{ width: "36px" }} />
          {item.Name}
        </td>
        <td style={{ paddingLeft: "65px" }}>
          <img src={EmailLogo} /> {item.Email}
        </td>
        <td style={{ paddingLeft: "70px" }}>
          <img src={ListCalendar} /> {item.Date}
        </td>
        <td style={{ paddingLeft: "50px" }}>
          <Button
            variant="contained"
              style={{
              width: "162px",
              height: "45px",
              borderRadius: "23px",
              fontWeight: "600",
              textTransform: "capitalize",
              backgroundColor:
                item.Status === "Complete"
                  ? "rgba(220, 235, 220, 1)"
                  : item.Status === "Pending"
                  ? "rgba(255, 215, 180, 0.6)"
                  : "rgba(255, 220, 225, 1)",
              color:
                item.Status === "Complete"
                  ? "rgba(58, 151, 76, 1)"
                  : item.Status === "Pending"
                  ? "rgba(242, 147, 57, 1)"
                  : "rgba(209, 26, 42, 1)",
            }}
          >
            {item.Status}
          </Button>
        </td>
        <StarImgComponent />
        <ThreeDotHover />
      </tr>
    );
  });
  return (
    <Box sx={{height:"80", overflowY:"auto"}}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            marginLeft: "50px",
            marginBottom: "30px",
          }}
        >
          Invoice List
        </Typography>
        <div style={{ display: "flex", alignItems: "start" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "10px",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "90%",
                height: "34px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "none",
                marginLeft: "20px",
              }}
            />
            <img src={SearchPolo} style={{ paddingRight: "20px" }} />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "122px",
              height: "34px",
              marginLeft: "15px",
              borderRadius: "10px",
              backgroundColor: "rgba(96, 91, 255, 1)",
              marginRight: "20px",
              textTransform:"capitalize",
            }}
            onClick={() => {
              props.setNewInvoice(true);
            }}
          >
             <div style={{ fontSize: "24px", paddingRight: "5px"}}>+</div> 
            Add New
          </Button>
        </div>
      </Box>
<Box sx={{overflowY: 'auto', height: '85vh',scrollbarWidth:"none"}}>
      <table
        style={{
          borderCollapse: "separate",
          width: "96%",
          borderSpacing: "0px 15px",
          marginRight:"20px",
          textWrap: "nowrap",
          fontWeight: "600",
          marginLeft:"20px"
        }}
      >
        <tr style={{ fontSize: "12px", color: "#828691" ,backgroundColor:"white",height:"50px" ,position: 'sticky',zIndex:"1",top: '0'}}>
          <td style={{ paddingLeft: "20px" }}>
            <input type="checkbox" />
          </td>
          <td style={{ paddingLeft: "20px" }}>
            Invoice Id
            <img src={ArrowDownList} style={{ marginLeft: "10px" }} />{" "}
          </td>
          <td style={{ paddingLeft: "50px" }}>
            Name <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
          </td>
          <td style={{ paddingLeft: "65px" }}>
            Email <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
          </td>
          <td style={{ paddingLeft: "70px" }}>
            Date <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
          </td>
          <td style={{ paddingLeft: "50px" }}>
            Status <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
          </td>
          <td style={{ paddingLeft: "20px" }}></td>
          <td style={{paddingRight: "20px" }}>
            <Button>
              {" "}
              <img src={DeleteList} />
            </Button>
          </td>
        </tr>
        {persondetail}
      </table>
</Box>
    </Box>
  );
}

export default InvoiceList;
