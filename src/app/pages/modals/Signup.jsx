import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-3-135-237-241.us-east-2.compute.amazonaws.com:8000",
});

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //const symbolRegex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  //First Name
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  //Last Name
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  //Birthdate
  if (!values.birthdate) {
    errors.birthdate = "Birthdate is required";
  }
  //Country
  if (!values.country) {
    errors.country = "Country is required";
  }
  //Phone
  if (!values.phone) {
    errors.phone = "Phone is required";
  }

  // Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  // Password
  if (!values.password) {
    errors.password = "Password is required";
  }

  // Confirm Password
  if (!(values.password == values.confirmPassword)) {
    errors.confirmPassword = "Password does not match";
  }

  return errors;
};

export default function Login(props) {
  const initialValues = {
    email: props.email,
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    country: "",
    phone: "",
  };

  const compStyles = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (values) => {
    setIsLoading(true);
    api
      .post(
        "/api/v1/signup",
        {
          first_name: values.firstName,
          last_name: values.lastName,
          birth_date: values.birthdate,
          country: values.country,
          phone_number: values.country,
          email_add: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle the API response
        setIsLoading(false);
        if (response.data["message"] == "User created successfully") {
          handleUserSignup("success", values.email);
        }
      })
      .catch((error) => {

        // Handle the API error
        setIsLoading(false);
        if (error.response["data"] == "Error creating user") {
          handleUserSignup("error", values.email);
        }
      });
  };

  const handleUserSignup = (status, email) => {
    props.handleUserSignup(status, email);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
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

          let passwordCheck = [false, false, false];
          const symbolRegex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
          if (values.password) {
            passwordCheck[0] =
              values.password
                .toLowerCase()
                .includes(values.firstName.toLowerCase()) ||
              values.password
                .toLowerCase()
                .includes(values.email.toLowerCase());

            passwordCheck[1] = values.password.length >= 8;
            passwordCheck[2] = symbolRegex.test(values.password);
          } else {
            passwordCheck = [false, false, false];
          }

          return (
            <form onSubmit={handleSubmit}>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <DialogContent sx={{ paddingBottom: "10px" }}>
                  {/* NAME */}
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "15px 0px 5px",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(((errors.firstName && touched.firstName) ||
                        (errors.lastName && touched.lastName)) && {
                        border: "1px solid #D32F2F",
                      }),
                      ...(!(
                        (errors.firstName && touched.firstName) ||
                        (errors.lastName && touched.lastName)
                      ) && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    {/* First Name */}
                    <TextField
                      focused
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      error={!!errors.firstName && !!touched.firstName}
                      label="*First Name"
                      placeholder="Enter Your First Name"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Divider
                      orientation="horizontal"
                      variant="middle"
                      flexItem
                      sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                    />

                    {/* Last Name */}
                    <TextField
                      focused
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      error={!!errors.lastName && !!touched.lastName}
                      label="*Last Name"
                      placeholder="Enter Your Last Name"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  {errors.firstName && touched.firstName && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.firstName}
                    </Typography>
                  )}
                  {errors.lastName && touched.lastName && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.lastName}
                    </Typography>
                  )}
                  <Grid
                    className="field-note"
                    sx={{ color: "#9A9A9A", m: "5px 5px 10px" }}
                  >
                    {"Make sure it matches the name on your government ID."}
                  </Grid>

                  {/* BIRTHDATE */}
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "15px 0px 5px",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(errors.birthdate &&
                        touched.birthdate && {
                          border: "1px solid #D32F2F",
                        }),
                      ...(!(errors.birthdate && touched.birthdate) && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    <TextField
                      focused
                      id="birthdate"
                      name="birthdate"
                      value={values.birthdate}
                      error={!!errors.birthdate && !!touched.birthdate}
                      label="*Birthdate"
                      placeholder="YYYY-MM-DD"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  {errors.birthdate && touched.birthdate && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.birthdate}
                    </Typography>
                  )}
                  <Grid
                    className="field-note"
                    sx={{ color: "#9A9A9A", m: "5px 5px 10px" }}
                  >
                    {
                      "We require people to be atleast 18 years old to sign up for Equal Travel."
                    }
                  </Grid>

                  {/* COUNTRY & PHONE NUMBER */}
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "15px 0px 5px",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(((errors.country && touched.country) ||
                        (errors.phone && touched.phone)) && {
                        border: "1px solid #D32F2F",
                      }),
                      ...(!(
                        (errors.country && touched.country) ||
                        (errors.phone && touched.phone)
                      ) && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    {/* Country/Region */}
                    <TextField
                      focused
                      id="country"
                      name="country"
                      value={values.country}
                      error={!!errors.country && !!touched.country}
                      label="*Country/Region"
                      placeholder="Enter Your Country/Region"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Divider
                      orientation="horizontal"
                      variant="middle"
                      flexItem
                      sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                    />

                    {/* Phone Number */}
                    <TextField
                      focused
                      id="phone"
                      name="phone"
                      value={values.phone}
                      error={!!errors.phone && !!touched.phone}
                      label="*Phone"
                      placeholder="Enter Your Phone"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  <Grid
                    className="field-note"
                    sx={{ color: "#9A9A9A", m: "5px 5px 10px" }}
                  >
                    {
                      "This is so your Hosts, Guests and/or our team can reach you."
                    }
                  </Grid>
                  {errors.country && touched.country && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.country}
                    </Typography>
                  )}
                  {errors.phone && touched.phone && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.phone}
                    </Typography>
                  )}

                  {/* EMAIL */}
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "15px 0px 5px",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(errors.email && {
                        border: "1px solid #D32F2F",
                      }),
                      ...(!errors.email && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    <TextField
                      focused
                      id="email"
                      name="email"
                      value={values.email}
                      error={!!errors.email && !!touched.email}
                      label="*Email"
                      placeholder="Enter Your Email"
                      fullWidth
                      outline="none"
                      InputProps={{
                        classes: {
                          notchedOutline: compStyles.noBorder,
                          input: compStyles.innerInputStyles,
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  {errors.email && touched.email && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.email}
                    </Typography>
                  )}
                  <Grid
                    className="field-note"
                    sx={{ color: "#9A9A9A", m: "5px 5px 10px" }}
                  >
                    {"We will email your trip confirmations and receipts."}
                  </Grid>

                  {/* PASSWORD */}
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      padding: "15px 0px 5px",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      ...(((errors.password && touched.password) ||
                        (errors.confirmPassword &&
                          touched.confirmPassword)) && {
                        border: "1px solid #D32F2F",
                      }),
                      ...(!(
                        (errors.password && touched.password) ||
                        (errors.confirmPassword && touched.confirmPassword)
                      ) && {
                        border: "1px solid #9A9A9A",
                      }),
                    }}
                  >
                    {/* Password */}
                    <TextField
                      focused
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      error={!!errors.password && !!touched.password}
                      label="*Password"
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

                    <Divider
                      orientation="horizontal"
                      variant="middle"
                      flexItem
                      sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                    />

                    {/* Confirm Password */}
                    <TextField
                      focused
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      error={
                        !!errors.confirmPassword && !!touched.confirmPassword
                      }
                      label="*Confirm Your Password"
                      placeholder="Confirm Your Password"
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
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
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
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Typography
                      className="error"
                      sx={{ color: "#D32F2F", padding: "10px 0px 0px 15px" }}
                    >
                      {errors.confirmPassword}
                    </Typography>
                  )}

                  {touched.password && (
                    <Grid>
                      <Grid
                        sx={{
                          py: "5px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {passwordCheck[0] ? (
                          <DisabledByDefaultRoundedIcon
                            sx={{ color: "#D32F2F" }}
                          />
                        ) : (
                          <CheckBoxRoundedIcon sx={{ color: "green" }} />
                        )}
                        <Typography>{`Can't contain your name or email address`}</Typography>
                      </Grid>
                      <Grid
                        sx={{
                          py: "5px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {passwordCheck[1] ? (
                          <CheckBoxRoundedIcon sx={{ color: "green" }} />
                        ) : (
                          <DisabledByDefaultRoundedIcon
                            sx={{ color: "#D32F2F" }}
                          />
                        )}
                        <Typography>{`Atleast 8 characters`}</Typography>
                      </Grid>
                      <Grid
                        sx={{
                          py: "5px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {passwordCheck[2] ? (
                          <CheckBoxRoundedIcon sx={{ color: "green" }} />
                        ) : (
                          <DisabledByDefaultRoundedIcon
                            sx={{ color: "#D32F2F" }}
                          />
                        )}
                        <Typography>{`Contains a number or symbol`}</Typography>
                      </Grid>
                    </Grid>
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
                    CREATE AN ACCOUNT
                  </Button>
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
                    <span>{", "}</span>
                    <a
                      href="/web-accessibility-statement"
                      target="_blank"
                      style={{
                        my: 2,
                        color: "#3B79C9",
                        display: "inline-block",
                        textDecoration: "underline",
                        padding: "0px 5px",
                      }}
                    >
                      <span>{"Web Accessibility Statement"}</span>
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
