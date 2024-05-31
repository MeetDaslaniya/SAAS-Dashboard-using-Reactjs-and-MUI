import React, { useState } from "react";
import { Box, Button, Typography } from '@mui/material';
import FilledStar from '../Images/FilledStar.svg'
import UnfilledStar from '../Images/UnfilledStar.svg'
function StarImgComponent() {
    const [starImg, setStarImg] = useState(FilledStar)
    return (
        <td><Button style={{ marginLeft: "35px" }} onClick={() => {
            if (starImg === UnfilledStar) {
                setStarImg(FilledStar)
            }
            else {
                setStarImg(UnfilledStar)
            }
        }}><img src={starImg} /></Button></td>
    )
}

export default StarImgComponent
