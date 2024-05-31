import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { BarChart } from '@mui/x-charts/BarChart';
import ContectMessage from '../Images/ContectMessage.svg';
import ContactCall from '../Images/ContactCall.svg';
import ContactLocation from '../Images/ContactLocation.svg';
import { Button, Divider, Typography } from "@mui/material";
import CloseBack from '../Images/CloseBack.svg'

function CustomerSideBarInfo(props) {
  return (
    <div style={{ width: "auto", backgroundColor: "white", height: "100vh", padding: "0 25px",height:"100vh", overflowY:"auto",scrollbarWidth:"none" }}>
        <Button
          onClick={() => {
            props.isInfo(false)
            props.setIsEdit(false)
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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={props.selectedPhoto} style={{ width: "70px", marginTop: "22px" }} />
                    <div style={{ fontSize: "22px", fontWeight: "600" }}>{props.selectedName}</div>
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#828691" }}>UI/UX Designer</div>
                </div>
                <Divider sx={{ marginTop: "30px", marginBottom: "30px" }} />
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>Contact Info</Typography>
                <div style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "400", marginTop: "20px", marginBottom: "17px" }}><img src={ContectMessage} style={{ marginRight: "15px" }} />kajope5182@ummoh.com</div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "400", marginTop: "20px", marginBottom: "17px" }}><img src={ContactCall} style={{ marginRight: "15px" }} />33757005467</div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "400" }}><img src={ContactLocation} style={{ marginRight: "15px" }} />2239  Hog Camp Road Schaumburg</div>
                    <Typography sx={{fontWeight:"600",fontSize:"18px",marginLeft:"35px",marginTop:"40px"}}>Performance</Typography>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <BarChart
                        series={[{ data: [1000, 1300, 1500, 1300, 1711, 1850] }]}
                        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }]}
                        height={250}
                        width={300}
                        leftAxis={null}
                    />


                </div>
                <div style={{ display: "flex" }}>
                    <Gauge
                        value={70}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                        sx={(theme) => ({
                            width: "114px", height: "114px", border: "1px solid rgba(247, 247, 248, 1)", borderRadius: "7px",
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 16,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: 'rgba(255, 214, 107, 1)',
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: theme.palette.text.disabled,
                            },
                        })}
                    />
                    <Gauge
                        value={60}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                        sx={(theme) => ({
                            width: "114px", height: "114px", border: "1px solid rgba(247, 247, 248, 1)", borderRadius: "7px",
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 16,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: 'rgba(91, 147, 255, 1)',
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: theme.palette.text.disabled,
                            },
                        })}
                    />
                </div>
            </div>
  )
}

export default CustomerSideBarInfo
