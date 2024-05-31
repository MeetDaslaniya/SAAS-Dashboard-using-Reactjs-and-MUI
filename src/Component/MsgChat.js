import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import call from "../Images/call.svg";
import video from "../Images/video.svg";
import ChatPhoto from "../Images/ChatPhoto.svg";
import threedottopbtm from "../Images/threedottopbtm.svg";
import AttechmentTypeBox from "../Images/AttechmentTypeBox.svg";
import EmojiTypeBox from "../Images/EmojiTypeBox.svg";
import sendiconTypeBox from "../Images/sendiconTypeBox.svg";

function MsgChat(props) {
  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "#FFFFFF",
        marginTop: "30px",
        marginBottom: "30px",
        marginLeft: "30px",
        marginRight: "30px",
        padding: "20px",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={props.ChatPersonImg} />
            <Box>
              <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                {props.ChatPerson}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                Online
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button>
              <img src={call} />
            </Button>
            <Button sx={{ margin: "0 15px 0 15px" }}>
              <img src={video} />
            </Button>
            <Button>
              <img src={threedottopbtm} />
            </Button>
          </Box>
        </Box>
      </Box>

      <div
        style={{
          width: "200px",
          padding: "5px 15px 5px 10px",
          backgroundColor: "rgba(91, 147, 255, 1)",
          borderRadius: "5px 5px 5px 0px",
          color: "rgba(255, 255, 255, 1)",
          marginTop: "50px",
          marginLeft: "20px",
        }}
      >
        <Typography>Lorem Ipsum is simply</Typography>
      </div>
      <div
        style={{
          width: "330px",
          padding: "5px 15px 5px 10px",
          backgroundColor: "rgba(91, 147, 255, 1)",
          borderRadius: "5px 5px 5px 0px",
          color: "rgba(255, 255, 255, 1)",
          marginTop: "5px",
          fontWeight: "400",
          fontSize: "12px",
          marginLeft: "20px",
        }}
      >
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
      <Box>
        <img src={props.ChatPersonImg} />
      </Box>
      <Box sx={{ position: "absolute", top: "290px", right: "10px" }}>
        <img src={ChatPhoto} />
      </Box>
      <div
        style={{
          width: "330px",
          padding: "5px 15px 5px 10px",
          backgroundColor: "rgba(91, 147, 255, 1)",
          borderRadius: "5px 5px 5px 0px",
          color: "rgba(255, 255, 255, 1)",
          marginTop: "210px",
          fontWeight: "400",
          fontSize: "12px",
          marginLeft: "20px",
        }}
      >
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
      <Box>
        <img src={props.ChatPersonImg} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "96%",
          backgroundColor: "rgba(247, 247, 248, 1)",
          borderRadius: "10px",
          height: "50px",
          marginLeft: "2%",
        }}
      >
        <Button>
          <img src={AttechmentTypeBox} style={{ marginLeft: "2%" }} />
        </Button>
        <Divider orientation="vertical" />
        <input
          type="text"
          style={{
            border: "none",
            height: "50px",
            width: "85%",
            backgroundColor: "rgba(247, 247, 248, 1)",
          }}
        />
        <Button>
          <img src={EmojiTypeBox} style={{ marginLeft: "2%" }} />
        </Button>
        <Button sx={{ width: "1%" }}>
          <img src={sendiconTypeBox} />
        </Button>
      </Box>
    </Box>
  );
}

export default MsgChat;
