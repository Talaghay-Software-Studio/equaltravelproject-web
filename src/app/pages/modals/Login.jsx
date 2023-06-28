import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import React from "react";
import LoadingScreen from "../../components/LoadingScreen";

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
}));

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default function Login(props) {
  const compStyles = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_add: props.email,
          password: values.password
        }),
      });

      if (response.ok) {
        
        // const data = await response.json();
        // Handle successful login
        setIsLoading(false);
        handleUserLogin("success");
      } else {
        // Handle login error
        setIsLoading(false);
        handleUserLogin("error");
        console.error("Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred during login:", error);
    }
  };

  const handleUserLogin = (status) => {
    props.handleUserLogin(status);
  }
  
  return (
    <>
      <Formik
        initialValues={{ password: "" }}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <DialogContent sx={{ paddingBottom: "10px" }}>
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "5px",
                      height: "52px",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(errors.password && {
                        border: "1px solid #D32F2F",
                      }),
                      ...(!errors.password && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    <TextField
                      focused
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      error={!!errors.password}
                      label="Password"
                      placeholder="Enter Your Password"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              sx={{ marginBottom: "20px" }}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  {errors.password && touched.password && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.password}
                    </Typography>
                  )}
                </DialogContent>
                <DialogActions
                  sx={{
                    justifyContent: "center",
                    padding: "8px 24px",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    disabled={!(dirty && isValid)}
                    type="submit"
                    sx={{
                      color: "white",
                      borderRadius: "30px",
                      width: "-webkit-fill-available",
                      height: "55px",
                    }}
                    className="title"
                    classes={{ root: compStyles.buttonBackground }}
                  >
                    LOGIN
                  </Button>

                  <Grid
                    sx={{ display: "flex", justifyContent: "center", m: 2 }}
                  >
                    <Typography
                      sx={{ color: "#9A9A9A", cursor: "pointer" }}
                      onClick={() => handleUserLogin("forgotPassword")}
                    >{`Forgot Your Password?`}</Typography>
                  </Grid>

                  <DialogContentText
                    sx={{
                      padding: "40px 0px 15px",
                      display: "inline-block",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <span>
                      {
                        "By signing in and creating an account, you agree with our "
                      }
                    </span>
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      style={{
                        my: 2,
                        color: "#3B79C9",
                        display: "inline-block",
                        textDecoration: "underline",
                        padding: "0px 5px",
                      }}
                    >
                      <span>{"Terms & Conditions"}</span>
                    </a>
                    <span>{" and "}</span>
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      style={{
                        my: 2,
                        color: "#3B79C9",
                        display: "inline-block",
                        textDecoration: "underline",
                        padding: "0px 5px",
                      }}
                    >
                      <span>{"Privacy statement."}</span>
                    </a>
                  </DialogContentText>
                </DialogActions>
              </Grid>
            </form>
          );
        }}
      </Formik>
      <LoadingScreen isLoading={isLoading} />
    </>
  );
}
