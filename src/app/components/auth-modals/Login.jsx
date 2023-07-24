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
import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import React, { useContext } from "react";
import LoadingScreen from "../shared/LoadingScreen";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthProvider"
import { useNavigate, useLocation } from "react-router-dom";

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused > fieldset {
    border: none !important;
  }
  ,
  & .MuiInputBase-root.MuiOutlinedInput-root > input {
    padding: 8px 14px !important;
    font-size: 14px !important;
  }
`;

const BlueAuthButton = styled(Button)`
  background: #3B79C9 !important;
  &:hover {
    background: #3B79C9 !important;
  }
`;

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default function Login(props) {
  const { email } = props;
  const { setAuth } = useContext(AuthContext);

  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (values) => {
    const { password } = values;
    setIsLoading(true);
    axios.post(
        "/api/v1/login",
        {
          email_add: props.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
      .then((response) => {
        // Handle the API response
        setIsLoading(false);
        if (response.data["message"] == "Login successful") {
          const token = response?.data?.token;
          setAuth({ email, password, token });
          

          return axios.post("/api/v1/token", {
           token: token
          });
        }
      }).then((response) => {
        if(response?.data?.message == "Token is valid"){
          const user = response?.data?.user;
          setIsLoading(false);
          handleUserLogin("success", user);

          navigate(from, { replace: true });
        }
        
      })
      .catch((error) => {
        // Handle the API error
        setIsLoading(false);
        if (error.response["data"] == "Invalid password") {
          setIsLoading(false);
          handleUserLogin("error", "");
        }
        else if(!error?.response){
          console.log("Server Error");
        }
      });
  };

  const handleUserLogin = (status, user) => {
    props.handleUserLogin(status, user);
  };
  
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
                    <CustomTextField
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
                  <BlueAuthButton
                    disabled={!(dirty && isValid)}
                    type="submit"
                    sx={{
                      color: "white",
                      borderRadius: "30px",
                      width: "-webkit-fill-available",
                      height: "55px",
                    }}
                    className="title"
                  >
                    LOGIN
                  </BlueAuthButton>

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
