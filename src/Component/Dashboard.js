import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import DT1 from "../Images/DT1.svg";
import DT2 from "../Images/DT2.svg";
import DT3 from "../Images/DT3.svg";
import DT4 from "../Images/DT4.svg";
import RO1 from "../Images/RO1.svg";
import RO2 from "../Images/RO2.svg";
import RO3 from "../Images/RO3.svg";
import RO4 from "../Images/RO4.svg";
import DonutChart from "react-donut-chart";
import ArrowDownList from "../Images/ArrowDownList.svg";
import TeenDot from "../Images/TeenDot.svg";
import Shoes from "../Images/Shoes.svg";
import MobileBack from "../Images/MobileBack.svg";
import iPhone12 from "../Images/iPhone-12.svg";
import ReviewStar from "../Images/ReviewStar.svg";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(0, 0, 156)";
Chart.defaults.plugins.legend.position = "right";
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = "60 of 100 Done";
Chart.defaults.plugins.legend.title.font = "Helvetica Neue";

const data = {
  labels: ["processed", "pending"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["rgb(0, 197, 0)", "rgb(204, 223, 243)"],
      borderWidth: 2,
      radius: "40%",
    },
  ],
};

const RecentOrder = [
  {
    TrackingNo: "#876364",
    ProductName: "Camera Lens",
    Price: "$178",
    TotalOrder: "325",
    TotalAmount: "$1,46,660",
    Img: RO1,
  },
  {
    TrackingNo: "#876368",
    ProductName: "Black Sleep Dress",
    Price: "$14",
    TotalOrder: "53",
    TotalAmount: "$46,660",
    Img: RO2,
  },
  {
    TrackingNo: "#876412",
    ProductName: "Argan Oil",
    Price: "$21",
    TotalOrder: "78",
    TotalAmount: "$3,46,676",
    Img: RO3,
  },
  {
    TrackingNo: "#876621",
    ProductName: "EAU DE Parfum",
    Price: "$32",
    TotalOrder: "98",
    TotalAmount: "$3,46,981",
    Img: RO4,
  },
];

const Rorder = RecentOrder.map((item) => {
  return (
    <tr>
      <td>{item.TrackingNo}</td>
      <td style={{ display: "flex", alignItems: "center" }}>
        <img src={item.Img} /> {item.ProductName}
      </td>
      <td>{item.Price}</td>
      <td>
        <Box
          sx={{
            width: "61px",
            height: "30px",
            borderRadius: "8px",
            backgroundColor: "rgba(38, 192, 226, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.TotalOrder}
        </Box>{" "}
      </td>
      <td>{item.TotalAmount}</td>
    </tr>
  );
});

function Dashboard() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Box>
        <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
          Dashboard
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        <Grid container item spacing={2}>
          <Grid item lg={3} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                height: "116px",
                borderRadius: "10px",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={DT1} style={{ width: "80px" }} />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontWeight: "800", fontSize: "22px" }}>
                  178+
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(3, 2, 41, 1)",
                  }}
                >
                  Save Products
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                height: "116px",
                borderRadius: "10px",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={DT2} style={{ width: "80px" }} />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontWeight: "800", fontSize: "22px" }}>
                  20+
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(3, 2, 41, 1)",
                  }}
                >
                  Stock Products
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                height: "116px",
                borderRadius: "10px",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={DT3} style={{ width: "80px" }} />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontWeight: "800", fontSize: "22px" }}>
                  190+
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(3, 2, 41, 1)",
                  }}
                >
                  Sales Products
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                height: "116px",
                borderRadius: "10px",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={DT4} style={{ width: "80px" }} />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontWeight: "800", fontSize: "22px" }}>
                  12+
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(3, 2, 41, 1)",
                  }}
                >
                  Job Application
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item lg={8} xs={12}>
            <Box
              sx={{
                backgroundColor: "white",
                marginTop: "30px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    margin: "25px 0px 0px 25px",
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "rgba(3, 2, 41, 0.7)",
                    textWrap: "nowrap",
                  }}
                >
                  Reports
                </Typography>
                <Button>
                  <img src={TeenDot} />
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [60, 38, 54, 38, 70, 50],
                    },
                  ]}
                  width={600}
                  height={310}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
          >
            <Box
              sx={{
                backgroundColor: "white",
                marginTop: "30px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "rgba(3, 2, 41, 0.7)",
                    margin: "25px 0px 0px 25px",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Analytics
                </Typography>
                <Link
                  to="/home/ProductAnalytics"
                  sx={{ textDecoration: "none" }}
                >
                  <Button sx={{ marginTop: "20px" }}>
                    <img src={TeenDot} />
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DonutChart
                  legend={false}
                  data={[
                    {
                      label: "Sale",
                      value: 25,
                    },
                    {
                      label: "Distribute",
                      value: 27,
                    },
                    {
                      label: "",
                      value: 20,
                      isEmpty: true,
                    },
                    {
                      label: "Return",
                      value: 28,
                    },
                  ]}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "95px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "5px",
                      backgroundColor: "rgb(233, 30, 99)",
                    }}
                  ></Box>
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography>Sale</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                >
                  <Box
                    sx={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "5px",
                      backgroundColor: "rgb(244, 67, 54)",
                    }}
                  ></Box>
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography>Distribute</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                >
                  <Box
                    sx={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "5px",
                      backgroundColor: "rgb(103, 58, 183)",
                    }}
                  ></Box>
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography>Return</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={8}
            xs={12}
           
          >
            <Box
          sx={{
            backgroundColor: "white",
            paddingLeft: "20px",
            paddingTop: "20px",
          }}
        >
          <Typography
            style={{
              color: "rgba(3, 2, 41, 0.7)",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Recent Orders
          </Typography>

          <table
            style={{
              borderCollapse: "separate",
              width: "100%",
              borderSpacing: "0px 20px",
            }}
          >
            <thead>
              <td>
                Tracking no{" "}
                <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
              </td>
              <td>
                Product Name
                <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
              </td>
              <td>
                Price <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
              </td>
              <td>
                Total Order{" "}
                <img src={ArrowDownList} style={{ marginLeft: "10px" }} />
              </td>
              <td>Total Amount</td>
            </thead>
            {/* <Box sx={{width:"98%", height:"2px", backgroundColor:"black"}}></Box> */}
            {Rorder}
          </table>
        </Box>
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
          >
            <Box
          sx={{
            backgroundColor: "white",
            padding: "20px 10px 0 20px",
            
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.7)",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Top selling Products
            </Typography>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={TeenDot} />
            </button>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img src={Shoes} />
            <Box sx={{ fontSize: "15px", marginLeft: "20px" }}>
              <Typography sx={{ fontWeight: "400", whiteSpace: "nowrap" }}>
                NIKE Shoes Black Pattern
              </Typography>
              <img src={ReviewStar} />
              <Typography sx={{ fontWeight: "700", fontSize: "15px" }}>
                $87
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}
          >
            <Box style={{ position: "relative" }}>
              <img src={MobileBack} />
              <img
                src={iPhone12}
                style={{ position: "absolute", left: "15px", top: "15px" }}
              />
            </Box>
            <Box sx={{ fontSize: "15px", marginLeft: "20px" }}>
              <Typography sx={{ fontWeight: "400" }}>iPhone 12</Typography>
              <img src={ReviewStar} />
              <Typography sx={{ fontWeight: "700" }}>$987</Typography>
            </Box>
          </Box>
        </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
