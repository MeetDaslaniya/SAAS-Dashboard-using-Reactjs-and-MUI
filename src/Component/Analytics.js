import { Button,Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ThreeDotHoverAnalytics from "./ThreeDotHoverAnalytics";
import CustomerSideBarInfo from "./CustomerSideBarInfo";
import CustomerSideBarEdit from "./CustomerSideBarEdit";
import C1 from "../Images/C1.svg";
import C2 from "../Images/C2.svg";
import C3 from "../Images/C3.svg";
import C4 from "../Images/C4.svg";
import C5 from "../Images/C5.svg";
import C6 from "../Images/C6.svg";
import C7 from "../Images/C7.svg";
import C8 from "../Images/C8.svg";
import C9 from "../Images/C9.svg";
import C10 from "../Images/C10.svg";
import C11 from "../Images/C11.svg";
import ArrowDownList from "../Images/ArrowDownList.svg";

const CustomerList = [
  {
    Name: "John Deo",
    Email: "johndoe2211@gmail.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C1,
  },
  {
    Name: "Shelby Goode",
    Email: "shelbygoode481@gmail.com",
    PhoneNumber: "+33757005467",
    Gender: "Female",
    CustimerImg: C2,
  },
  {
    Name: "Robert Bacins",
    Email: "robertbacins4182@.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C3,
  },
  {
    Name: "John Carilo",
    Email: "john carilo182@.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C4,
  },
  {
    Name: "Adriene Watson",
    Email: "adrienewatson82@.com",
    PhoneNumber: "+33757005467",
    Gender: "Female",
    CustimerImg: C5,
  },
  {
    Name: "John Deo",
    Email: "johndoe2211@gmail.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C6,
  },
  {
    Name: "Mark Ruffalo",
    Email: "markruffalo3735@.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C7,
  },
  {
    Name: "Bethany Jackson",
    Email: "bethanyjackson5@.com",
    PhoneNumber: "+33757005467",
    Gender: "Female",
    CustimerImg: C8,
  },
  {
    Name: "Christine Huston",
    Email: "christinehuston4@.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C9,
  },
  {
    Name: "Anne Jacob",
    Email: "annejacob2@ummoh.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C10,
  },
  {
    Name: "James Mullican",
    Email: "jamesmullican5346@.com",
    PhoneNumber: "+33757005467",
    Gender: "Male",
    CustimerImg: C11,
  },
];



function Analytics() {
  const [selectedName,setSelectedName]=useState("John Deo")
  const [selectedPhoto,setSelectedPhoto]=useState("/static/media/C1.2d50a09159934e179ac4e661951fbf50.svg")
  const CData = CustomerList.map((item) => {
    return (
      <tr style={{borderRadius:"10px", backgroundColor: "white", marginRight: "20px"}} onClick={()=>{
        setSelectedName(item.Name)
        setSelectedPhoto(item.CustimerImg)
      }}>
        <td
        onClick={()=>{
          setIsInfo(true)
          setIsEdit(false)
        }}
          style={{
            cursor:"pointer",
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
            marginTop: "10px",
          }}
        >
          <img src={item.CustimerImg} style={{ marginRight: "10px" }} />
          {item.Name}
        </td>
        <td>{item.Email}</td>
        <td>{item.PhoneNumber}</td>
        <td>
          <Button
            style={{
              backgroundColor:
                item.Gender === "Male"
                  ? "rgba(91, 147, 255, 0.1)"
                  : "rgba(255, 143, 107, 0.1)",
              color:
                item.Gender === "Male"
                  ? "rgba(91, 147, 255, 1)"
                  : "rgba(255, 143, 107, 1)",
              border: "none",
              width: item.Gender === "Male" ? "66px" : "75px",
              height: "27px",
              borderRadius: "33px",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {item.Gender}
          </Button>
        </td>
        <ThreeDotHoverAnalytics />
      </tr>
    );
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  console.log(selectedPhoto)
  console.log(selectedName)
  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <div style={{ width:isEdit||isInfo? "75%":"100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "700", fontSize: "24px" }}>Customer List</h1>
          <Button
            variant="contained"
            style={{ width: "165px", height: "42px",display:isEdit?"none":"flex",marginRight:"50px",backgroundColor:"rgba(96, 91, 255, 1)"}}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                textTransform:"capitalize",
                
              }}
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <div style={{ fontSize: "24px", paddingRight: "5px"}}>+</div> 
              Add Customer
            </div>
          </Button>
        </div>
        <div style={{overflowY: 'auto', height: '90vh',scrollbarWidth:"none"}}>
          <table
            style={{
              borderCollapse: "separate",
              width: "97%",
              height:"95vh",  
              borderSpacing: "0px 15px",
              marginRight: "20px",
              textWrap: "nowrap",
            }}
          >
            <tr style={{ color: "#828691", backgroundColor:"white",height:"50px" ,position: 'sticky',zIndex:"1",top: '0'}}>

              
              <td style={{ paddingLeft: "25px" }}>
                Name{" "}
                <img src={ArrowDownList} style={{ paddingBottom: "2px" }} />
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                Email{" "}
                <img src={ArrowDownList} style={{ paddingBottom: "2px" }} />
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                Phone number{" "}
                <img src={ArrowDownList} style={{ paddingBottom: "2px" }} />
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                Gender{" "}
                <img src={ArrowDownList} style={{ paddingBottom: "2px" }} />
              </td>
              <td></td>
            </tr>
            {CData}
          </table>
        </div>
      </div>

      <Box sx={{width:isInfo||isEdit?"25%":"", display:isInfo||isEdit?"block":"none"}}>{isEdit ? <CustomerSideBarEdit setIsInfo={setIsInfo}  setIsEdit={setIsEdit}/> : <CustomerSideBarInfo selectedName={selectedName} selectedPhoto={selectedPhoto} isInfo={setIsInfo} setIsEdit={setIsEdit}/>}</Box>
    </div>
  );
}

export default Analytics;
