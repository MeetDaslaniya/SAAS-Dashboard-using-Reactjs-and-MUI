import { Typography, Box, Button, AvatarGroup, Avatar } from "@mui/material";
import React from "react";
import TeenDot from "../Images/TeenDot.svg";
import L2 from "../Images/L2.svg";
import L3 from "../Images/L3.svg";
import L4 from "../Images/L4.svg";
import L5 from "../Images/L5.svg";
import AddAvtrBack from "../Images/AddAvtrBack.svg";
import HeartTask from "../Images/HeartTask.svg";
import ChatTask from "../Images/ChatTask.svg";
import Img1Task from "../Images/Img1Task.svg";
import Img2task from "../Images/Img2task.svg";
import ReviewImg from "../Images/ReviewImg.svg";
import done1 from "../Images/done1.svg";
import done2 from "../Images/done2.svg";

function TaskPreviewBoard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginTop: "25px", width: "275px" }}>
        <Typography
          sx={{
            color: "rgba(3, 2, 41, 0.7)",
            fontWeight: "600",
            fontSize: "21px",
          }}
        >
          ToDo
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Dashboard Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 106, 119, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Low
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 214, 107, 1)",
                borderRadius: "23px",
              }}
            >
              On Track
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Landing page Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 143, 107, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Mediun
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(209, 26, 42, 1)",
                borderRadius: "23px",
              }}
            >
              At risk
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                E-Shop Mobile App
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(38, 192, 226, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              High
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "25px", width: "275px", marginLeft: "20px" }}>
        <Typography
          sx={{
            color: "rgba(3, 2, 41, 0.7)",
            fontWeight: "600",
            fontSize: "21px",
          }}
        >
          In Progress
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" checked />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Dashboard Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(38, 192, 226, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              High
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 214, 107, 1)",
                borderRadius: "23px",
              }}
            >
              On Track
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Landing page Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 106, 119, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Low
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>

          <Box sx={{ display: "flex", marginBottom: "10px", gap: "15px" }}>
            <img src={Img1Task} />
            <img src={Img2task} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" />
              <Typography sx={{ marginLeft: "10px" }}>
                E-Shop Mobile App
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 106, 119, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Low
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 214, 107, 1)",
                borderRadius: "23px",
              }}
            >
              On Track
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "25px", width: "275px", marginLeft: "20px" }}>
        <Typography
          sx={{
            color: "rgba(3, 2, 41, 0.7)",
            fontWeight: "600",
            fontSize: "21px",
          }}
        >
          In Review
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" checked />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Dashboard Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 143, 107, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Mediun
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>
          <img src={ReviewImg} style={{ margin: "15px 0 15px 0" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" checked />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                E-Shop Mobile App
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 106, 119, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              Low
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>

          <Box sx={{ display: "flex", marginBottom: "10px", gap: "15px" }}>
            <img src={Img1Task} />
            <img src={Img2task} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "25px", width: "275px", marginLeft: "20px" }}>
        <Typography
          sx={{
            color: "rgba(3, 2, 41, 0.7)",
            fontWeight: "600",
            fontSize: "21px",
          }}
        >
          Done
        </Typography>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <input type="checkbox" checked />
              <Typography sx={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                Dashboard Design
              </Typography>
            </Box>
            <Button>
              <img src={TeenDot} />
            </Button>
          </Box>
          <Box sx={{ display: "flex", marginTop: "19px" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(38, 192, 226, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              High
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(255, 214, 107, 1)",
                borderRadius: "23px",
                marginRight: "10px",
              }}
            >
              On Track
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "400",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Discussion for management dashboard ui design
          </Typography>

          <Box sx={{ display: "flex", marginBottom: "10px", gap: "15px" }}>
            <img src={done1} />
            <img src={done2} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={L2} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Cindy Baker" src={L4} />
              <Avatar alt="Travis Howard" src={L3} />
              <Avatar alt="Travis Howard" src={L3} />
            </AvatarGroup>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={ChatTask} />
              <Typography>112</Typography>
              <img src={HeartTask} />
              <Typography>1.2k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskPreviewBoard;
