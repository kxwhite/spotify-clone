import React from 'react'
import { ArrowDropDown, ArrowDropUp, OpenInNew } from '@mui/icons-material';
import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, useTheme } from '@mui/material';
import { useStateProviderValue } from '../../StateProvider';
import { deepOrange } from '@mui/material/colors';

function AccountMenu({spotify}) {
   const [{ user }, dispatch] = useStateProviderValue();

   const theme = useTheme();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

  const handleLogout = () => {
    const url = "https://accounts.spotify.com/en/logout";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );
    document.body.style.display = "none";
    setTimeout(() => { spotifyLogoutWindow.close(); window.location.href = "/login"; }, 2000);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "whitesmoke", padding: 0, minWidth: 30 }}
        disableRipple
      >
        <Avatar
          alt={user?.display_name}
          src={user?.images[0]?.url}
          sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
          className="nav--avatar"
        />
        <strong className="nav--username">{user?.display_name}</strong>
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
              theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "whitesmoke",
            backgroundColor:
              theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#282828",
            width: "165px",
            marginTop: 1,
            marginLeft: -3,
            width: 220,
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
          Account
          <ListItemIcon>
            <OpenInNew
              fontSize="small"
              sx={{ color: "whitesmoke", marginLeft: "120px" }}
            />
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
          Profile
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
          Upgrade to Premium
          <ListItemIcon>
            <OpenInNew
              fontSize="small"
              sx={{ color: "whitesmoke", marginLeft: "39px" }}
            />
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
          Support
          <ListItemIcon>
            <OpenInNew
              fontSize="small"
              sx={{ color: "whitesmoke", marginLeft: "120px" }}
            />
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
          Download
          <ListItemIcon>
            <OpenInNew
              fontSize="small"
              sx={{ color: "whitesmoke", marginLeft: "107px" }}
            />
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
          Settings
        </MenuItem>
        <Divider sx={{ backgroundColor: "#757575" }} />
        <MenuItem
          onClick={handleLogout}
          sx={{
            fontSize: 14,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#3D3D3D",
              marginInline: "6px",
            },
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;
