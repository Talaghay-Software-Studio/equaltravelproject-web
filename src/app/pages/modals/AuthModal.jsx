import {
  Dialog,
  DialogTitle,
  IconButton,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import CloseIcon from "@mui/icons-material/Close";
import BackIcon from "../../../assets/icons/svg/back.svg";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CheckEmail from "./CheckEmail";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import UpdatePassword from "./UpdatePassword";

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none !important",
    "&:hover": {
      border: "none !important",
    },
    "&:after": {
      border: "none !important",
    },
    "&:before": {
      border: "none !important",
    },
  },
  innerInputStyles: {
    padding: "8px 14px !important",
    fontSize: "1rem !important",
  },

  passwordInputStyles: {
    padding: "2px 2px 8px 14px !important",
    fontSize: "1rem !important",
  },
  buttonBackground: {
    background: "#3B79C9 !important",
    "&:hover": {
      background: "#3B79C9 !important",
    },
  },
  dialogBorderRadius: {
    borderRadius: "10px !important"
  }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AuthModal({ showAuth, showAuthModal }) {
  let dialogContent = null;
  const compStyles = useStyles();
  const [dialogType, setDialogType] = React.useState("default");
  const [dialogTitle, setDialogTitle] = React.useState("Login or Sign Up");

  const [formState, setFormState] = React.useState({
    email: "",
  });
  
  const [authSnackbar, setauthSnackbar] = React.useState({
    open: false,
    severity: "",
    message: ""
  });

  const handleOpenAuthSnackbar = (severity, message) => {
    setauthSnackbar({
      open: true,
      severity: severity,
      message: message
    })
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setauthSnackbar({
      ...authSnackbar,
      open: false
    });
  };

  const handleCloseModal = () => {
    showAuthModal(false);
    changeDialogType("default");
  };

  const handleBack = () => {

    let type = "";

    switch (dialogTitle) {
      case "Login":
        type = "default";
        break;
      case "Let's get you signed up":
        type = "default";
        break;
      case "Forgot your password?":
        type = "login";
        break;
      case "Update your password?":
        type = "forgetPassword";
        break;
      default:
        break;
    }

    changeDialogType(type);
  }

  const changeDialogType = (type) => {
    setDialogType(type);

    let title = "";
    switch (type) {
      case "login":
        title = "Login";
        break;
      case "signup":
        title = "Let's get you signed up";
        break;
      case "forgotPassword":
        title = "Forgot your password?";
        break;
      case "updatePassword":
        title = "Update your password?";
        break;
      case "default":
        title = "Login or Sign Up";
        break;
    }

    setDialogTitle(title);
  }

  const handleFormChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleUserLogin = (status) => {
    if(status == "success"){
      handleOpenAuthSnackbar("success", "Login successful!");
      handleCloseModal();
    } 
    else if (status == "forgotPassword") {
      changeDialogType("forgotPassword");
    } else {
      handleOpenAuthSnackbar("error", "Invalid password.");
    }
  }

  const handleForgotPassword = (message) => {
    handleOpenAuthSnackbar("success", message);
    handleCloseModal();
  }

  const handleUserSignup = (status) => {
    if (status == "success") {
      handleOpenAuthSnackbar("success", "Account creation successful!");
      changeDialogType("login");
    } else {
      handleOpenAuthSnackbar("error", "Something went wrong");
    }
  }

  //Login or Input password screen
  if(dialogType === "login"){
    dialogContent = (
      <Login
        email={formState.email}
        handleUserLogin={(status) => handleUserLogin(status)}
      />
    );
  }

  // Sign up screen
  else if(dialogType === "signup") {
    dialogContent = (
     <Signup email={formState.email} handleUserSignup={(status) => handleUserSignup(status)}/>
    );
  } 

  // Forgot Password Screen
  else if (dialogType === "forgotPassword") {
    dialogContent = (
      <ForgotPassword email={formState.email} handleForgotPassword={(messsage) => handleForgotPassword(messsage)}/>
    );
  }

  // Update Password Screen
  else if (dialogType === "updatePassword") {
    dialogContent = (
      <UpdatePassword />
    );
  }

  // Default Dialog Screen
  else {
    dialogContent = (
      <CheckEmail
        handleEmailChecking={(isExisting, email) => {
          handleFormChange("email", email);

          if (isExisting){
            changeDialogType("login");
          }
          else{
            changeDialogType("signup");
          }
        }}
      />
    );
  }

  return (
    <div>
      <Dialog
        open={showAuth}
        onClose={handleCloseModal}
        maxWidth="sm"
        scroll="body"
        fullWidth
        aria-labelledby="auth-dialog-title"
        aria-describedby="auth-dialog-description"
        classes={{ paper: compStyles.dialogBorderRadius }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {dialogTitle != "Login or Sign Up" && (
            <IconButton
              color="inherit"
              onClick={handleBack}
              aria-label="close"
              sx={{
                height: "fit-content",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={BackIcon}
                alt="Back Icon"
                style={{ height: 15, width: 15 }}
              />
            </IconButton>
          )}
          <DialogTitle
            className="title"
            id="auth-dialog-title"
            sx={{ color: "#3B79C9" }}
          >
            {dialogTitle}
          </DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
            sx={{
              ml: "auto",
              marginRight: "18px",
              height: "fit-content",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        {dialogContent}
      </Dialog>

      <Snackbar
        open={authSnackbar.open}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={authSnackbar.severity}
          sx={{ width: "100%" }}
        >
          {authSnackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
