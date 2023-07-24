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
import styled from "@emotion/styled";
import { Formik } from "formik";
import LoadingScreen from "../shared/LoadingScreen";
import React from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import axios from "../../api/axios"

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
    background: "#3B79C9 !important;
  }
`;

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
  // const compStyles = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  // const axiosPrivate = useAxiosPrivate();

  const submitForm = async (values) => {
    setIsLoading(true);
    axios
      .post(
        "/api/v1/login/email",
        {
          email_add: values.email,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle the API response
        setIsLoading(false);
        if (response.data == "Email found") {
          handleEmailChecking(true, values.email);
        }
      })
      .catch((error) => {
        // Handle the API error
        setIsLoading(false);
        if (error.response["data"] == "Email not found") {
          handleEmailChecking(false, values.email);
        }
      });
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
                    <CustomTextField
                      focused
                      id="email"
                      name="email"
                      value={values.email}
                      error={!!errors.email}
                      label="Email"
                      placeholder="Enter Your Email"
                      fullWidth
                      outline="none"
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
                    CONTINUE
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
