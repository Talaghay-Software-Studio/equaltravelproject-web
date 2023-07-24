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
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import LoadingScreen from "./LoadingScreen";

const pages = [
  "Find a Property",
  "Share Stories",
  "Rental Guides"
];
const menu = [
  {
    id: "login",
    label: "Login/Sign Up"
  },
  {
    id: "help",
    label: "Help Center"
  } 
];
const authenticatedMenu = [
  {
    id: "account",
    label: "Account",
  },
  {
    id: "blogs",
    label: "Blogs",
  },
  {
    id: "help",
    label: "Help Center",
  },
  {
    id: "logout",
    label: "Logout",
  },
];

const CustomAppBar = styled(AppBar)`
  &.appBarPrimary {
    background-color: #3B79C9 !important;
    box-shadow: unset;
  },
  &.appBarTransparent {
    background-color: transparent ;
    box-shadow: none;
  }
`;

const CustomHostButton = styled(Button)`
  &.blueButton {
    background: #3B79C9  !important;
    color: #FFFFFF !important;
    &:hover: {
      background: #3B79C9  !important;
      color: #FFFFFF !important;
    }
  }

  &.whiteButton {
    background: #FFFFFF !important;
    color: 3B79C9 !important;
    &:hover: {
      background: FFFFFF !important;
      color: #3B79C9 !important;
    }
  }
`;

export default function AppHeader(props) {
  const navigate = useNavigate();
  
  const isAppBarDynamic = props.appBarStyle == "dynamic";
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [appBarColored, setAppBarColored] = React.useState(false);
  const [user, setUser] = React.useState({...props.userDetails});
  const [isLoading, setIsLoading] = React.useState(false);

  const { auth, setAuth } = React.useContext(AuthContext);

  React.useEffect(() => {
    setUser(props.userDetails);
  }, [props.userDetails]);
  const changeAppBarBG = () => {
    if(window.scrollY >= 80){
      setAppBarColored(true);
      
    } else {
      setAppBarColored(false);
    }
  }

  window.addEventListener("scroll", changeAppBarBG);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenMenuItem = (type) => {
    if(type == "login"){
      setAuthModal(true);
    } else if (type == "account") {
      navigate({
        pathname: "/account",
      });
    } else if (type == "blogs") {
      navigate({
        pathname: "/blogs",
      });
    } else if (type == "help") {
      handleCloseUserMenu();
    } else if (type == "logout") {
      setUser({});
      handleUserLogout();
    }
    handleCloseUserMenu();
  };

  const handleUserLogout = async () => {
    setIsLoading(true);
    try {
        const response = await axios.post("/api/v1/logout", {
          user_id: user.id
        });
        setIsLoading(false);
        console.log("Logged out: ", response)
    } catch (err) {
        console.error(err);
        setIsLoading(false);
    }
    navigate({
      pathname: "/",
    });
    setAuth({});
  }

  const setAuthModal = (bool) => {
    props.showAuthModal(bool);
  };

  const setUserAvatar = () => {
    const { userDetails } = user;
    const initials = userDetails && userDetails["first_name"][0] + userDetails["last_name"][0];
    return initials ? (
      <Avatar sx={{ backgroundColor: "#C2C6CC", fontWeight: 600 }}>
        {initials}
      </Avatar>
    ) : (
      <Avatar
        alt="User Profile Icon"
        src=""
        sx={{ width: 37, height: 37, bgcolor: "#3B79C9" }}
      />
    );

  };

  return (
    <div id="back-to-top-anchor">
      <CustomAppBar
        className={
          isAppBarDynamic
            ? appBarColored
              ? "appBarPrimary"
              : "appBarTransparent"
            : "appBarPrimary"
        }
        position="fixed"
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

          {!props.hideBecomeHostBtn && (
            <CustomHostButton
              href="/host-page"
              sx={{
                background: "white",
                color: "#3B79C9",
                display: "block",
                borderRadius: "30px",
                mx: 2,
                padding: "11px 25px",
              }}
              className={
                isAppBarDynamic
                  ? appBarColored
                    ? "whiteButton"
                    : "blueButton"
                  : "whiteButton"
              }
            >
              {`Become A Host`}
            </CustomHostButton>
          )}

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
            <IconButton sx={{ p: 0 }}>{setUserAvatar()}</IconButton>
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
              {auth?.token &&
                authenticatedMenu.map((menu) => (
                  <MenuItem
                    key={menu.id}
                    onClick={() => handleOpenMenuItem(menu.id)}
                  >
                    <Typography textAlign="center">{menu.label}</Typography>
                  </MenuItem>
                ))}

              {!auth?.token &&
                menu.map((menu) => (
                  <MenuItem
                    key={menu.id}
                    onClick={() => handleOpenMenuItem(menu.id)}
                  >
                    <Typography textAlign="center">{menu.label}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </CustomAppBar>
      <LoadingScreen isLoading={isLoading} />
    </div>
  );
}