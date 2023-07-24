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
import axios from "axios";

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
  // const compStyles = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);


 const submitForm = async (values) => {
   setIsLoading(true);
   api
     .post(
       "/api/v1/forgotpassword",
       {
         email_add: values.email,
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
       if (response.status == 200) {
         handleForgotPassword(
           "success",
           "Reset password link sent to email. Check Spam if not seen on inbox."
         );
       }
     })
     .catch((error) => {
       // Handle the API error
       setIsLoading(false);
       if (error.response["data"]["error"] == "User not found") {
         handleForgotPassword("error", "User not found.");
       }
     });
 };

  const handleForgotPassword = (status, message) => {
    props.handleForgotPassword(status, message);
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
                      // InputProps={{
                      //   classes: {
                      //     notchedOutline: compStyles.noBorder,
                      //     input: compStyles.innerInputStyles,
                      //   },
                      // }}
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
                    disabled={!isValid}
                    type="submit"
                    sx={{
                      color: "white",
                      borderRadius: "30px",
                      width: "-webkit-fill-available",
                      height: "55px",
                    }}
                    className="title"
                    // classes={{ root: compStyles.buttonBackground }}
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