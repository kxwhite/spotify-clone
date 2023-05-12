import React, { useState } from 'react'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Button, ListItemIcon, Menu, MenuItem, useTheme } from '@mui/material';
import { Check } from '@mui/icons-material';

function RecentlyPlayed() {
   const theme = useTheme();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [check, setCheck] = useState(false);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
     setCheck(true);
   };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#767676", padding: 0, minWidth: 30 }}
        disableRipple
      >
        <p className="playlist--recent-txt">Recently played</p>
        {open ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            color:
              theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#767676",
            backgroundColor:
              theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#282828",
            width: "165px",
            marginTop: 1,
            marginLeft: -5,
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              backgroundColor: "#757575",
              color: "#3D3D3D",
            },
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Most relevant
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Recently played
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Recently added &nbsp;
          <ListItemIcon>
            <Check fontSize="small" sx={{ color: "#767676" }} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Alphabetical
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Custom order
        </MenuItem>
      </Menu>
    </div>
  );
}

export default RecentlyPlayed;
