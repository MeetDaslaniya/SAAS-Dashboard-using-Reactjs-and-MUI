import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import TakePhoto from "../Images/TakePhoto.svg";
import Delete from "../Images/Delete.svg";
import DeletBack from "../Images/DeletBack.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PrintInvoic from "../Images/PrintInvoic.svg";
import DownloadInvoice from "../Images/DownloadInvoice.svg";
import PreviewLogo from "../Images/PreviewLogo.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handleDownloadPDF = () => {
  const input = document.getElementById("pdf-content");
  // Specify the id of the element you want to convert to PDF
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("downloaded-file.pdf");
    // Specify the name of the downloaded PDF file
  });
};

let BillList = [
  {
    ProductName: "ipod 2021",
    Rate: "$1000",
    QTY: "10 Pcs",
    Amount: "$10,000",
  },
  {
    ProductName: "Apple Mackbook",
    Rate: "$1500",
    QTY: "10 Pcs",
    Amount: "$150,000",
  },
  {
    ProductName: "i phone 12",
    Rate: "$885",
    QTY: "10 Pcs",
    Amount: "$8850",
  },
];

function AddInvoice() {
  var count;
  const [updateList, setUpdatelist] = useState(0);
  const BillListItem = BillList.map((item) => {
    return (
      <tr>
        <td style={{ color: "rgba(0, 104, 221, 1)" }}>{item.ProductName}</td>
        <td>{item.Rate}</td>
        <td>{item.QTY}</td>
        <td style={{ color: "rgba(43, 153, 67, 1)" }}>{item.Amount}</td>
        <td>
          <Button>
            <img src={DeletBack} style={{ position: "relative" }} />
            <img src={Delete} style={{ position: "absolute" }} />
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "48%",
          backgroundColor: "white",
          padding: "30px",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ fontWeight: "700", fontSize: "24px", marginBottom: "20px" }}
        >
          Create New Invoice
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={TakePhoto} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Box>
            <label>Invoice Id</label>
            <br />
            <input
              type="text"
              placeholder="#876370"
              style={{
                width: "220px",
                height: "50px",
                border: "none",
                backgroundColor: "rgba(250, 250, 251, 1)",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box>
            <label>Date</label>
            <br />
            <DatePicker
              sx={{ backgroundColor: "rgba(250, 250, 251, 1)", border: "none" }}
            />
          </Box>
        </Box>
        <Box>
          <label>Name</label>
          <br />
          <input
            placeholder="Alison G."
            style={{
              width: "98%",
              height: "50px",
              border: "none",
              backgroundColor: "rgba(250, 250, 251, 1)",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <label>Email</label>
            <br />
            <input
              type="text"
              placeholder="Example@gmail.com"
              style={{
                width: "220px",
                height: "50px",
                border: "none",
                backgroundColor: "rgba(250, 250, 251, 1)",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box>
            <label>Address</label>
            <br />
            <input
              type="text"
              placeholder="Street"
              style={{
                width: "220px",
                height: "50px",
                border: "none",
                backgroundColor: "rgba(250, 250, 251, 1)",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
            Product Description
          </Typography>
          <Button
            variant="contained"
            sx={{
              height: "30px",
              borderRadius: "10px",
              backgroundColor: "rgba(96, 91, 255, 1)",
              marginRight: "20px",
              fontSize: "22px",
              minWidth: "10px !important",
            }}
            onClick={() => {
              BillList.push({
                ProductName: "ipod 2060",
                Rate: "$1000",
                QTY: "10 Pcs",
                Amount: "$10,000",
              });
              console.log(BillList);
              setUpdatelist(updateList + 1);
            }}
          >
            +
          </Button>
        </Box>
        <table style={{ width: "100%" }}>
          <tr>
            <td>Product Name</td>
            <td>Rate</td>
            <td>QTY</td>
            <td>Amount</td>
          </tr>
          {BillListItem}
        </table>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            style={{ width: "165px", height: "42px", marginRight: "50px" }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              Send Invoice
            </div>
          </Button>
          <Button
            variant="contained"
            style={{ width: "165px", height: "42px", marginRight: "50px" }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              Create Invoice
            </div>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ margin: "30px", fontWeight: "700", fontSize: "24px" }}
          >
            {" "}
            Preview
          </Typography>
          <Box>
            <Button>
              <img src={DownloadInvoice} onClick={handleDownloadPDF} />
            </Button>
            <Button>
              <img src={PrintInvoic} />
            </Button>
          </Box>
        </Box>
        <Box id="pdf-content">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={PreviewLogo} style={{ margin: "37px auto 37px 51px" }} />
            <Box sx={{ marginRight: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "rgba(0, 153, 255, 1)" }}>
                  @
                </Typography>
                <Typography sx={{ color: "rgba(130, 134, 145, 1)" }}>
                  your.mail@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "rgba(0, 153, 255, 1)" }}>
                  m
                </Typography>
                <Typography sx={{ color: "rgba(130, 134, 145, 1)" }}>
                  +386 989 271 3115
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "112px", marginLeft: "51px" }}>
              <Typography sx={{fontWeight:"500",fontSize:"10px", marginBottom:"15px"}}>RECIPIENT</Typography>
              <Typography
                sx={{
                  width: "77px",
                  fontSize: "8px",
                  color: "rgba(130, 134, 145, 1)",
                }}
              >
                JOHN SMITH <br /> 4304 Liberty Avenue 92680 Tustin, CA VAT no.:
                12345678
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}
              >
                <Typography
                  sx={{ color: "rgba(0, 153, 255, 1)", fontSize: "10px" }}
                >
                  @
                </Typography>
                <Typography
                  sx={{ color: "rgba(130, 134, 145, 1)", fontSize: "8px" }}
                >
                  your.mail@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ color: "rgba(0, 153, 255, 1)", fontSize: "10px" }}
                >
                  m
                </Typography>
                <Typography
                  sx={{ color: "rgba(130, 134, 145, 1)", fontSize: "8px" }}
                >
                  +386 989 271 3115
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <Typography sx={{fontWeight:"700",fontSize:"20px"}}>INVOICE</Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "600",
                  color: "rgba(31, 34, 41, 1)",
                }}
              >
                invoice no.
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "400",
                  color: "rgba(130, 134, 145, 1)",
                }}
              >
                001/2021
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "600",
                  color: "rgba(31, 34, 41, 1)",
                }}
              >
                Invoice date
              </Typography>
              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "400",
                  color: "rgba(130, 134, 145, 1)",
                }}
              >
                January 1, 2021
              </Typography>
            </Box>
          </Box>
          <table
            style={{ marginTop: "100px", marginLeft: "50px", width: "94%" }}
          >
            <tr
              style={{
                fontWeight: "600",
                fontSize: "8px",
                color: "rgba(157, 168, 187, 1)",
              }}
            >
              <td>TASK DESCRIPTION</td>
              <td>HOURS</td>
              <td>RATE</td>
              <td>AMOUNT</td>
            </tr>
            <tr style={{ fontWeight: "400", fontSize: "8px" }}>
              <td>Website redesign</td>
              <td>60</td>
              <td>15 USD</td>
              <td>900,00 USD</td>
            </tr>
            <tr style={{ fontWeight: "400", fontSize: "8px" }}>
              <td>Newsletter template design</td>
              <td>20</td>
              <td>12 USD</td>
              <td>240,00 USD</td>
            </tr>
            <tr style={{ fontSize: "8px" }}>
              <td></td>
              <td
                style={{ color: "rgba(157, 168, 187, 1)", fontWeight: "600" }}
              >
                SUBTOTAL
              </td>
              <td></td>
              <td style={{ fontWeight: "400" }}>1140,00 USD</td>
            </tr>
            <tr style={{ fontSize: "8px" }}>
              <td></td>
              <td
                style={{ color: "rgba(157, 168, 187, 1)", fontWeight: "600" }}
              >
                DISCOUNT 5%
              </td>
              <td></td>
              <td style={{ fontWeight: "400" }}>57,00 USD</td>
            </tr>
            <tr style={{ fontSize: "8px" }}>
              <td></td>
              <td
                style={{ color: "rgba(157, 168, 187, 1)", fontWeight: "600" }}
              >
                TOTAL
              </td>
              <td></td>
              <td
                style={{
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "rgba(0, 153, 255, 1)",
                }}
              >
                1083,00 USD
              </td>
            </tr>
          </table>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "8px",
                marginRight: "50px",
                color: "rgba(130, 134, 145, 1)",
              }}
            >
              Transfer the amount to the business account below. Please include
              invoice number on your check.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginTop: "10px",
              justifyContent: "end",
              marginRight: "50px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ color: "rgba(157, 168, 187, 1)", fontSize: "8px" }}
              >
                BANK:{" "}
              </Typography>
              <Typography sx={{ fontSize: "8px" }}>FTSBUS33</Typography>
            </Box>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50px",
                backgroundColor: "rgba(0, 153, 255, 1)",
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ color: "rgba(157, 168, 187, 1)", fontSize: "8px" }}
              >
                IBAN:{" "}
              </Typography>
              <Typography sx={{ fontSize: "8px" }}>
                GB82-1111-2222-3333
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "80%", marginLeft: "50px", marginTop: "60px" }}>
            <Typography
              sx={{ fontSize: "8px", marginBottom: "15px", fontWeight: "600" }}
            >
              NOTES
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "rgba(130, 134, 145, 1)" }}
            >
              All amounts are in dollars. Please make the payment within 15 days
              from the issue of date of this invoice. Tax is not charged on the
              basis of paragraph 1 of Article 94 of the Value Added Tax Act (I
              am not liable for VAT).
              <br />
              <br /> Thank you for you confidence in my work.
              <br />
              Signiture
            </Typography>
          </Box>

          <br />
          <br />
          <Divider />
          <br />
          <Box sx={{display:"flex",justifyContent:"space-around"}}>
            <Box>
              <Typography
                sx={{
                  color: "rgba(130, 134, 145, 1)",
                  fontSize: "8px",
                  marginLeft: "50px",
                }}
              >
                YOUR COMPANY
                <br />
                1331 Hart Ridge Road, 48436 Gaines, MI
              </Typography>
            </Box>
            <Box>
              <Box sx={{ marginRight: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "rgba(0, 153, 255, 1)",fontSize:"8px" }}>
                    @
                  </Typography>
                  <Typography sx={{ color: "rgba(130, 134, 145, 1)",fontSize:"8px" }}>
                    your.mail@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "rgba(0, 153, 255, 1)",fontSize:"8px" }}>
                    m
                  </Typography>
                  <Typography sx={{ color: "rgba(130, 134, 145, 1)",fontSize:"8px" }}>
                    +386 989 271 3115
                  </Typography>
                </Box>
              </Box>
            </Box>
              <Box>
                <Typography sx={{fontSize:"8px",color:"rgba(130, 134, 145, 1)"}}>The company is registered in the<br/> business register under no. 87650000</Typography>
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddInvoice;
