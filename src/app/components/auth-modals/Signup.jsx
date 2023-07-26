import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import LoadingScreen from "../shared/LoadingScreen";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";

const api = axios.create({
  baseURL: "http://ec2-3-135-237-241.us-east-2.compute.amazonaws.com:8000",
});

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
const StyledDatepicker = styled(DatePicker)`
  & .MuiInputBase-root.MuiOutlinedInput-root > fieldset {
    border: none !important;
  }
  ,
  & .MuiInputBase-root.MuiOutlinedInput-root > input {
    padding: 8px 14px !important;
    font-size: 14px !important;
  }
`;

const StyledSelect = styled(Select)`
  & .MuiInputBase-root.MuiOutlinedInput-root > fieldset {
    border: none !important;
  }
`;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const accessibiltyNeeds = [
  "Mobility or Physical Impairment",
  "Visual Impairment",
  "Hearing Impairment",
  "Cognitive or Learning impairment",
  "Speech Impairment",
  "Mental Health Impairments",
  "Chronic Health Conditions",
];
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



export default function Signup(props) {
  const initialValues = {
    email: props.email,
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    country: "",
    phone: "",
    accessibilityNeeds: []
  };
  // const compStyles = useStyles();
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
          birth_date: moment((values.birthdate).toDate()).format("yyyy-MM-DD"),
          country: values.country,
          phone_number: values.country,
          email_add: values.email,
          password: values.password,
          accessibility_needs: (values.accessibilityNeeds).toString(),
          user_type: "1" //Default 1 for Guest Account
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
            setFieldValue,
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
                    <CustomTextField
                      focused
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      error={!!errors.firstName && !!touched.firstName}
                      label="*First Name"
                      placeholder="Enter Your First Name"
                      fullWidth
                      outline="none"
                      InputProps={
                        {
                          // classes: {
                          //   notchedOutline: compStyles.noBorder,
                          //   input: compStyles.innerInputStyles,
                          // },
                        }
                      }
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
                    <CustomTextField
                      focused
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      error={!!errors.lastName && !!touched.lastName}
                      label="*Last Name"
                      placeholder="Enter Your Last Name"
                      fullWidth
                      outline="none"
                      InputProps={
                        {
                          // classes: {
                          //   notchedOutline: compStyles.noBorder,
                          //   input: compStyles.innerInputStyles,
                          // },
                        }
                      }
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StyledDatepicker
                        label="*Birthdate"
                        id="name"
                        name="birthdate"
                        format="YYYY-MM-DD"
                        value={values.birthdate}
                        slotProps={{
                          textField: {
                            focused: true,
                            fullWidth: true,
                            id: "name",
                            name: "birthdate",
                          },
                        }}
                        onChange={(value) =>
                          setFieldValue("birthdate", value, true)
                        }
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                      />
                    </LocalizationProvider>
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
                    <CustomTextField
                      focused
                      id="country"
                      name="country"
                      value={values.country}
                      error={!!errors.country && !!touched.country}
                      label="Country/Region"
                      placeholder="Enter Your Country/Region"
                      fullWidth
                      outline="none"
                      InputProps={
                        {
                          // classes: {
                          //   notchedOutline: compStyles.noBorder,
                          //   input: compStyles.innerInputStyles,
                          // },
                        }
                      }
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
                    <CustomTextField
                      focused
                      id="phone"
                      name="phone"
                      value={values.phone}
                      error={!!errors.phone && !!touched.phone}
                      label="Phone"
                      placeholder="Enter Your Phone"
                      fullWidth
                      outline="none"
                      InputProps={
                        {
                          // classes: {
                          //   notchedOutline: compStyles.noBorder,
                          //   input: compStyles.innerInputStyles,
                          // },
                        }
                      }
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
                    <CustomTextField
                      focused
                      id="email"
                      name="email"
                      value={values.email}
                      error={!!errors.email && !!touched.email}
                      label="*Email"
                      placeholder="Enter Your Email"
                      fullWidth
                      outline="none"
                      InputProps={
                        {
                          // classes: {
                          //   notchedOutline: compStyles.noBorder,
                          //   input: compStyles.innerInputStyles,
                          // },
                        }
                      }
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
                    <CustomTextField
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
                        // classes: {
                        //   notchedOutline: compStyles.noBorder,
                        //   input: compStyles.innerInputStyles,
                        // },
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
                    <CustomTextField
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
                        // classes: {
                        //   notchedOutline: compStyles.noBorder,
                        //   input: compStyles.innerInputStyles,
                        // },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                              sx={{ marginBottom: "20px" }}
                            >
                              {showConfirmPassword ? (
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

                  {/* ACCESSIBILITY NEEDS */}
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
                    }}
                  >
                    <FormControl sx={{ width: "100%", mt: 1 }}>
                      <StyledSelect
                        fullWidth
                        multiple
                        displayEmpty
                        placeholder="Do you have accessibility needs? (Optional)"
                        id="accessibilityNeeds"
                        name="accessibilityNeeds"
                        value={values.accessibilityNeeds}
                        onChange={handleChange}
                        // input={<OutlinedInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return (
                              <em>
                                Do you have accessibility needs? (Optional)
                              </em>
                            );
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{
                          "aria-label": "Accessibility Needs Field",
                        }}
                        IconComponent={ExpandMoreIcon}
                        sx={{
                          borderRadius: "10px",
                          border: "1px solid #9A9A9A",
                        }}
                      >
                        <MenuItem disabled value="">
                          <em>Select applicable:</em>
                        </MenuItem>
                        {accessibiltyNeeds.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </StyledSelect>
                    </FormControl>
                  </Box>
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
                    CREATE AN ACCOUNT
                  </BlueAuthButton>
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
