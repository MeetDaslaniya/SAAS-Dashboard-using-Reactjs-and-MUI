// import React, { act, useState } from 'react'
import * as React from 'react';
import { MenuItem, Button, Menu } from '@mui/material';
import TeenDot from '../Images/TeenDot.svg';
import EditMenu from '../Images/EditMenu.svg';
import DeleteMenu from '../Images/DeleteMenu.svg';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disableRipple
        style={{ marginRight: "10px", marginBottom:"20px"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={TeenDot} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} style={{backgroundColor: 'rgba(91, 147, 255, 0.1)',margin:"5px",borderRadius:"7px"}}><img src={EditMenu} style={{width:"8px",fontSize:"12px !important",width: '14px', marginRight: '10px'}}/>Edit</MenuItem>
        <MenuItem onClick={handleClose} style={{backgroundColor: 'rgba(231, 29, 54, 0.1)',margin:"5px",borderRadius:"7px"}}><img src={DeleteMenu} style={{width:"8px",fontSize:"12px !important",width: '14px', marginRight: '10px'}}/>Delete</MenuItem>
      </Menu>
    </div>
  );
}