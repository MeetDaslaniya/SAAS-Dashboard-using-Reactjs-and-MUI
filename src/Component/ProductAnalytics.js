import React from "react";
import {
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Drawer,
} from "@mui/material";
import TotelProd from "../Images/TotelProd.svg";
import DonutChart from "react-donut-chart";
import BlueShed from "../Images/BlueShed.svg";
import { BarChart } from "@mui/x-charts/BarChart";
import TotelSels from "../Images/TotelSels.svg";
import YellowShed from "../Images/YellowShed.svg";
import SaveProduct from "../Images/SaveProduct.svg";
import LessThenSign from "../Images/LessThenSign.svg";
import TeenDot from "../Images/TeenDot.svg";
import TS1 from "../Images/TS1.svg";
import TS2 from "../Images/TS2.svg";
import TS3 from "../Images/TS3.svg";
import TS4 from "../Images/TS4.svg";
import TS5 from "../Images/TS5.svg";
import TS6 from "../Images/TS6.svg";
import CloseBack from "../Images/CloseBack.svg";
import TakePhoto from "../Images/TakePhoto.svg";

// for DropDOwn
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const chartSetting = {
  width: 300,
  height: 300,
};
const dataset = [
  {
    seoul: 23400,
    month: "Jan",
  },
  {
    seoul: 15000,
    month: "Fev",
  },
  {
    seoul: 30000,
    month: "Mar",
  },
  {
    seoul: 22000,
    month: "Apr",
  },
  {
    seoul: 10000,
    month: "May",
  },
  {
    seoul: 23400,
    month: "June",
  },
  {
    seoul: 500,
    month: "July",
  },
];

const valueFormatter = (value) => `${value}`;

const TopSellingProducts = [
  {
    SN: "1",
    Name: "Blutooth Devices",
    Price: "$10",
    TotalOrder: "34,666 Piece",
    TotalSales: "$3,46,660",
    img: TS1,
  },
  {
    SN: "2",
    Name: "Airdot",
    Price: "$15",
    TotalOrder: "20,000 Piece",
    TotalSales: "$3,00,000",
    img: TS2,
  },
  {
    SN: "3",
    Name: "Shoes",
    Price: "$10",
    TotalOrder: "15,000 Piece",
    TotalSales: "$1,50,000",
    img: TS3,
  },
  {
    SN: "4",
    Name: "Kids T-Shirt",
    Price: "$12",
    TotalOrder: "10,000 Piece",
    TotalSales: "$1,20,000",
    img: TS4,
  },
  {
    SN: "5",
    Name: "Smart Watch",
    Price: "$12",
    TotalOrder: "10,000 Piece",
    TotalSales: "$1,20,000",
    img: TS5,
  },
  {
    SN: "6",
    Name: "Girls Top",
    Price: "$12",
    TotalOrder: "10,000 Piece",
    TotalSales: "$1,20,000",
    img: TS6,
  },
];

// const data = [
//   { id: 0, value: 10, label: "series A" },
//   { id: 1, value: 15, label: "series B" },
//   { id: 2, value: 20, label: "series C" },
// ];
function ProductAnalytics() {
  const [age, setAge] = React.useState("");

  const TopItem = TopSellingProducts.map((item) => {
    return (
      <tr>
        <td>{item.SN}</td>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(0, 104, 221, 1)",
          }}
        >
          <img src={item.img} /> {item.Name}
        </td>
        <td>{item.Price}</td>
        <td>{item.TotalOrder}</td>
        <td style={{ color: "rgba(43, 153, 67, 1)" }}>{item.TotalSales}</td>
      </tr>
    );
  });
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [alignment, setAlignment] = React.useState("Product");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box sx={{ paddingLeft: "10px" }}>
      <div style={{ fontWeight: "700", fontSize: "24px", marginTop: "30px" }}>
        Product Analytics
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          sx={{
            height: "34px",
          }}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            value="Product"
            sx={{
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: "rgba(96, 91, 255, 1)",
              },
              textTransform: "capitalize",
            }}
          >
            Product
          </ToggleButton>
          <ToggleButton
            value="Customer"
            sx={{
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: "rgba(96, 91, 255, 1)",
              },
              textTransform: "capitalize",
            }}
          >
            Customer
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="contained"
          sx={{
            height: "34px",
            marginLeft: "15px",
            borderRadius: "10px",
            backgroundColor: "rgba(96, 91, 255, 1)",
            marginRight: "20px",
            textTransform:"capitalize"
          }}
          onClick={toggleDrawer(true)}
        >
           <div style={{ fontSize: "24px", paddingRight: "5px"}}>+</div> 
            Add Product
        </Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "70vw" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "30vw",
                backgroundColor: "white",
                position: "relative",
                height: "20vh",
                paddingTop: "20px",
                marginRight:"15px"
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  <img src={TotelProd} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#828691",
                    }}
                  >
                    Total Product
                  </Typography>
                  <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
                    5,00,874
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "11px",
                      color: "rgba(43, 153, 67, 1)",
                    }}
                  >
                    +1400 New Added
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={BlueShed} style={{ width: "100%" }} />
              </Box>
            </Box>
            <Box
              sx={{
                width: "28vw",     
                backgroundColor: "white",
                position: "relative",
                height: "20vh",
                paddingTop: "20px",
                marginRight:"20px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginRight: "4%",
                }}
              >
                <Box>
                  <img src={TotelSels} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#828691",
                    }}
                  >
                    Total Product
                  </Typography>
                  <Typography sx={{ fontWeight: "700", fontSize: "24px" }}>
                    5,00,874
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "11px",
                      color: "rgba(43, 153, 67, 1)",
                    }}
                  >
                    +1400 New Added
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "35px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={YellowShed} style={{ width: "100%" }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "30px", backgroundColor:"white", padding:"20px", marginRight:"30px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                Top Selling Products
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "rgba(96, 91, 255, 1)",
                }}
              >
                <Button sx={{ textTransform: "capitalize" }}>See More</Button>
              </Typography>
            </Box>
            <table style={{ width: "100%", borderSpacing: "0px 15px" }}>
              <tr>
                <td>SN</td>
                <td>Name</td>
                <td>Price </td>
                <td>Total Order </td>
                <td>Total Sales</td>
              </tr>
              {TopItem}
            </table>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "300px", marginRight:"20px" , backgroundColor:"white", textAlign:"end"}}>
            <BarChart   
              dataset={dataset}
              yAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                {
                  dataKey: "seoul",
                  label: "Product Add  by Month",
                  valueFormatter,
                },
              ]}
              layout="horizontal"
              {...chartSetting}
            />
          </Box>

          <Box
          sx={{
            width: "290px",
            marginLeft:"0px",
            marginRight:"20px",
            backgroundColor: "white",
            marginTop: "30px",
          }}
        >
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography sx={{margin:"25px 0px 0px 25px", fontWeight:"700",fontSize:"16px",textWrap:"nowrap"}}>Product Sales Analytics</Typography>
          <Button>
          <img src={TeenDot}/>
          </Button>
          </Box>
          <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
          <DonutChart
             legend={false}
             data={[
               {
                 label: "Sale",
                 value: 26,
               },
               {
                 label: "Distribute",
                 value: 27,
               },
               {
                 label: "Return",
                 value: 27,
               },
             ]}
          />
          </Box>
          <Box sx={{display:"flex",marginTop:"95px",width:"100%",justifyContent:"center"}}>
            <Box sx={{display:"flex",alignItems:"center"}}>
            <Box sx={{height:"15px",width:"15px",borderRadius:"5px",backgroundColor:"rgb(233, 30, 99)"}}>
              </Box>
              <Box sx={{marginLeft:"5px"}}>
              <Typography >Sale</Typography>
            </Box>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",marginLeft:"15px"}}>
            <Box sx={{height:"15px",width:"15px",borderRadius:"5px",backgroundColor:"rgb(244, 67, 54)"}}>
              </Box>
              <Box sx={{marginLeft:"5px"}}>
              <Typography >Distribute</Typography>
            </Box>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",marginLeft:"15px"}}>
            <Box sx={{height:"15px",width:"15px",borderRadius:"5px",backgroundColor:"rgb(103, 58, 183)"}}>
              </Box>
              <Box sx={{marginLeft:"5px"}}>
              <Typography >Return</Typography>
            </Box>
            </Box>
          </Box>
        </Box>
        </Box>
      </Box>

      <div>
        <Drawer
          open={open}
          anchor="right"
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: "30%" },
          }}
        >
          <div style={{ width: "100%", backgroundColor: "white" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Button  onClick={toggleDrawer(false)}>
                <img src={LessThenSign}/>
              </Button>
              <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
              Add a New Product
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img src={TakePhoto} />
            </Box>
            <Box sx={{ paddingLeft: "30px", paddingTop: "35px" }}>
              <Box>
                <label style={{ fontWeight: "600", fontSize: "16px" }}>
                  Product Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Mackbook Pro 2021 14”"
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

              <Box sx={{ marginTop: "15px", border: "none" ,fontWeight:"600",fontSize:"16px"}}>
                <label>Brand</label>
                <Box
                  sx={{
                    width: "90%",
                    backgroundColor: "rgba(247, 247, 248, 1)",
                    border: "none",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Apple</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Apple"}>Apple</MenuItem>
                      <MenuItem value={"Samsung"}>Samsung</MenuItem>
                      <MenuItem value={"OnePluse"}>OnePluse</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ marginTop: "15px" }}>
                  <label style={{ fontWeight: "600", fontSize: "16px" }}>
                    Price
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="$1200 "
                    style={{
                      height: "50px",
                      width: "100%",
                      border: "none",
                      backgroundColor: "rgba(247, 247, 248, 1)",
                      borderRadius: "5px",
                    }}
                  />
                  <br />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "30px",
                    marginLeft: "20px",
                  }}
                >
                  <input type="checkbox" checked />
                  Negotiable
                </Box>
              </Box>
                <Box sx={{marginTop:"20px"}}>
                  <Box sx={{fontWeight:"600",fontSize:"16px"}}>Descriptions</Box>
                  <Typography sx={{backgroundColor:"rgba(250, 250, 251, 1)",width:"90%",padding:"20px"}}>
                    This the New creation Of apple This the New creation Of
                    apple This the New creation Of apple This the New creation
                    Of apple.
                  </Typography>
                </Box>
              <Button
                variant="contained"
                sx={{
                  width: "90%",
                  height: "50px",
                  backgroundColor: "rgba(96, 91, 255, 1)",
                  marginTop: "0px",
                  display:"flex",
                  alignItems:"center",
                  marginBottom:"30px",
                  textTransform:"capitalize"
                }}
                onClick={toggleDrawer(false)}
                >
                <img src={SaveProduct} style={{marginRight:"20px"}}/>
                 Save Product
              </Button>
            </Box>
          </div>
        </Drawer>
      </div>
    </Box>
  );
}

export default ProductAnalytics;
