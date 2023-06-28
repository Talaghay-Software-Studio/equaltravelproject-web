import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Formik } from "formik";
import LoadingScreen from "../../components/LoadingScreen";
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
  buttonBackground: {
    background: "#3B79C9 !important",
    "&:hover": {
      background: "#3B79C9 !important",
    },
  },
}));

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  return errors;
};

export default function ForgotPassword(props) {
  const compStyles = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);


  const submitForm = async (values) => {

    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/login/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_add: values.email,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        //const data = await response.json();

        // Handle successful login
        handleForgotPassword(
          "Reset password link sent to email. Check Spam if not seen on inbox."
        );

      } else {
        // Handle error
        setIsLoading(false);
        handleForgotPassword("Email not found.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred during login:", error);
    }
  };

  const handleForgotPassword = (message) => {
    props.handleForgotPassword(message);
  };

  return (
    <>
      <Formik
        initialValues={{ email: props.email }}
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
          } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <Grid sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ px: "24px" }}>
                  <span style={{ color: "#000000" }}>
                    {
                      "Please provide us with the email address linked to your account, and we will send you a link via email to reset your password."
                    }
                  </span>
                </Typography>
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
                      error={!!errors.email}
                      label="Email"
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
                </DialogContent>
                <DialogActions
                  sx={{
                    justifyContent: "center",
                    padding: "8px 24px",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    disabled={!isValid}
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
                    CONTINUE
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
      <LoadingScreen isLoading={isLoading} />
    </>
  );
}
