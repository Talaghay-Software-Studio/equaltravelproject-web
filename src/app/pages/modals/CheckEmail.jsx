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

export default function CheckEmail(props) {
  const compStyles = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);


  const submitForm = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/login/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_add: values.email,
        }),
      });

      if (response.ok) {
        //const data = await response.json();

        // Handle successful login
        setIsLoading(false);
        handleEmailChecking(true, values.email);
      } else {
        // Handle login error
        setIsLoading(false);
        handleEmailChecking(false, values.email);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred during checking:", error);
    }
  };

  const handleEmailChecking = (isExisting, value) => {
    props.handleEmailChecking(isExisting, value);
  };


  return (
    <>
      <Formik
        initialValues={{ email: "" }}
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
                      border: "1px solid #9A9A9A",
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
