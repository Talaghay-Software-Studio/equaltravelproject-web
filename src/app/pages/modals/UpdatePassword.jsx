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
import makeStyles from "@mui/styles/makeStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import React from "react";

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

export default function UpdatePassword(props) {
  const compStyles = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [showConfirmPassword, setshowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (values) => {
    try {
      const response = await fetch("/api/v1/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_add: props.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        handleUpdate("error");
        // const data = await response.json();
        // Handle successful update
      } else {
        // Handle update error
        handleUpdate("error");
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error occurred during update:", error);
    }
  };

  const handleUpdate = (status) => {
    props.handleUpdate(status);
  };

  return (
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
              <Typography sx={{ px: "24px" }}>
                <span style={{ color: "#000000" }}>
                  {"Remember your password and keep it secure"}
                </span>
              </Typography>
              <DialogContent sx={{ paddingBottom: "10px" }}>
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
                    ...(errors.password && {
                      border: "1px solid red",
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
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

                  <TextField
                    focused
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    error={!!errors.confirmPassword}
                    label="Confirm Your Password"
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
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{ marginBottom: "20px" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  UPDATE
                </Button>

                <DialogContentText
                  sx={{
                    padding: "40px 0px 15px",
                    display: "inline-block",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#9A9A9A" }}>
                    {"2023 Equal Travel Project. All rights reserved."}
                  </span>
                </DialogContentText>
              </DialogActions>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}
