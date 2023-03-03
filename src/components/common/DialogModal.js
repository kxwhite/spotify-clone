import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Language } from '@mui/icons-material';
import './DialogModal.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    color: theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "whitesmoke",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#282828",
    maxWidth: 900,
    maxHeight: '35vh',
    borderRadius: 10,
    scrollbarColor: "#6b6b6b #2b2b2b",
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        backgroundColor: "#2b2b2b",
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: 8,
        backgroundColor: "#6b6b6b",
        minHeight: 24,
        border: "3px solid #2b2b2b",
      },
      "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#959595",
      },
      "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#959595",
      },
      "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#959595",
      },
      "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
        backgroundColor: "#2b2b2b",
      },
  },
  "& .MuiSvgIcon-root": {
    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#0C0C0C",
    width: 25,
    height: 25,
    borderRadius: '50%',
    padding: 4,
  },
  "& .MuiDialogContent-dividers": {
    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.87)" : "#282828",
    borderTop: theme.palette.mode === "dark" ? "0.5px solid #282828" : "0.5px solid #3E3E3E",
    borderBottom: theme.palette.mode === "dark" ? "0.5px solid #282828" : "0.5px solid #3E3E3E",
  },
  "& .MuiDialogContent-root": {
    paddingInline: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen("paper")}
        sx={{
          backgroundColor: "transparent",
          border: "1px solid #A4A4A4",
          borderRadius: "500px",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingInline: "14px",
          display: "flex",
          alignItems: "center",
          color: "whitesmoke",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: 12,
          "&:hover": {
            transition: 'all 0.2s ease',
            scale: 1.05,
            border: '1.5px solid whitesmoke',
          },
        }}
      >
        <Language className="sidebar--globe-icon" />
        English
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ fontWeight: 800, fontSize: 22, marginLeft: -1 }}
        >
          Choose a language
        </BootstrapDialogTitle>
        <Typography gutterBottom sx={{ marginLeft: 2, marginBottom: 2 }}>
          This updates what you read on open.spotify.com
        </Typography>
        <DialogContent dividers={scroll === "paper"}>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
          <div className="modal--lang-g1">
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">English</p>
              <p className="modal--lang-2">English</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">Afrikaans</p>
              <p className="modal--lang-2">Afrikaans</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">አማርኛ</p>
              <p className="modal--lang-2">Amharic</p>
            </Typography>
            <Typography gutterBottom className="modal--lang-hover">
              <p className="modal--lang-1">العَرَبِيَّة</p>
              <p className="modal--lang-2">Arabic</p>
            </Typography>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
