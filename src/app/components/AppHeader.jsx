import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box }from "@mui/material"; 
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AppLogo from "./AppLogo";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";
// import { useScrollTrigger } from "@mui/material";

const pages = [
  "Find a Property",
  "Share Stories",
  "Rental Guides"
];
const menu = ["Login/Sign Up", "Help Center"];

const useStyles = makeStyles(() => ({
  appBarTransparent: {
    background: "transparent !important",
    boxShadow: "none !important",
  },
  appBarPrimary: {
    background: "#3B79C9 !important",
    boxShadow: "unset !important",
  },
  hostButton: {
    background: "#FFFFFF !important",
    color: "3B79C9 !important",
    "&:hover": {
      background: "FFFFFF !important",
      color: "#3B79C9 !important",
    },
  },
}));

export default function AppHeader(props) {
  const isAppBarDynamic = props.appBarStyle == "dynamic";
  const compStyles = useStyles();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenMenuItem = (event) => {
    console.log("Menu: ", event);
    setAuthModal(true);

    handleCloseUserMenu();
  };

  const setAuthModal = (bool) => {
    console.log("Inside App Header: ", bool);
    props.showAuthModal(bool);
  };
  return (
    <div id="back-to-top-anchor">
      <AppBar
        position="fixed"
        classes={{
          paper: `${isAppBarDynamic} ? ${compStyles.appBarTransparent} : ${compStyles.appBarPrimary}`,
        }}
      >
        <Toolbar disableGutters sx={{ margin: "0px 40px 0px 32px" }}>
          <Link to="/">
            <AppLogo logoHeight="75" sx={{ display: "flex", mr: 1 }} />
          </Link>

          <Box sx={{ display: "flex", ml: "auto" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography sx={{ textTransform: "initial" }}>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Button
            sx={{
              background: "white",
              color: "#3B79C9",
              display: "block",
              borderRadius: "30px",
              mx: 2,
              padding: "11px 25px",
            }}
            classes={{ root: compStyles.hostButton }}
          >
            <Typography sx={{ textTransform: "initial" }}>
              {`Become A Host`}
            </Typography>
          </Button>

          <Box
            sx={{
              background: "white",
              display: "block",
              borderRadius: "30px",
              padding: "5px",
            }}
          >
            <Tooltip title="Open Menu">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon sx={{ px: 2, color: "#3B79C9" }} />
              </IconButton>
            </Tooltip>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="User Profile Icon"
                src=""
                sx={{ width: 37, height: 37, bgcolor: "#3B79C9" }}
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menu.map((menu) => (
                <MenuItem key={menu} onClick={handleOpenMenuItem}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}