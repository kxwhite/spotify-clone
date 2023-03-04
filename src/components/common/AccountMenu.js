import React from 'react'
import { ArrowDropDown, Logout, Settings } from '@mui/icons-material';
import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, useTheme } from '@mui/material';

function AccountMenu() {
   const theme = useTheme();
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
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: 'whitesmoke', padding: 0, minWidth: 30}}
        >
          <ArrowDropDown />
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
              '& .MuiPaper-root': {
                color: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : 'whitesmoke',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#282828',
                width: '165px',
                marginTop: 1,
              },
          }}
          PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              backgroundColor: '#757575',
              color: '#3D3D3D',
            },
          },
        }}
        >
          <MenuItem onClick={handleClose}
            sx={{
              fontSize: 14,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#3D3D3D',
                marginInline: '6px',
              }
            }}>
              <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}
            sx={{
              fontSize: 14,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#3D3D3D',
                marginInline: '6px',
              }
            }}
          >
            <Avatar /> My account
          </MenuItem>
          <Divider sx={{ backgroundColor: '#757575' }} />
          <MenuItem onClick={handleClose}
            sx={{
              fontSize: 14,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#3D3D3D',
                  marginInline: '6px',
                }
              }}
          >
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: 'whitesmoke'}}/>
          </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}
            sx={{
              fontSize: 14,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.87)' : '#3D3D3D',
                  marginInline: '6px',
                }
              }}
          >
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: 'whitesmoke'}}/>
          </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
    </div>
  )
}

export default AccountMenu;
