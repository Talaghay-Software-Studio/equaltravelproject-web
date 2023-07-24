import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import styled from "@emotion/styled";
import MapImage from "/assets/img/map2.png";

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

const initialValues = {
  country: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
};

export default function SetPropertyAddress(){
  const submitForm = async (values) => {
    console.log(values)
    //try {
     
    //   const response = await fetch("/api/v1/login/forgotpassword", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email_add: values.email,
    //     }),
    //   });

    //   if (response.ok) {
    //     //const data = await response.json();
    //     // Handle successful login
        
    //   } else {
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error("Error occurred during login:", error);
    // }
  };
    return (
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        {/* Fields */}
        <Grid sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Typography
            className="title"
            sx={{ color: "#3B79C9", fontSize: "2.25rem", marginBottom: "15px" }}
          >
            {`Where’s your property located?`}
          </Typography>
          <Typography
            sx={{
              color: "#484848",
              fontSize: "1rem",
              marginBottom: "25px",
              width: "75%",
            }}
          >{`We will only share your exact location with your guests after they’ve made a reservation.`}</Typography>
          <Grid>
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
                } = formik;
                return (
                  <form onSubmit={handleSubmit}>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Country or Region */}
                      <Box
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "10px",
                          padding: "5px",
                          height: "52px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                          ...(errors.country && {
                            border: "1px solid #D32F2F",
                          }),
                          ...(!errors.country && {
                            border: "1px solid #9A9A9A",
                          }),
                        }}
                      >
                        <CustomTextField
                          focused
                          id="country"
                          name="country"
                          value={values.country}
                          error={!!errors.country}
                          label="Country / Region"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                      {errors.country && touched.country && (
                        <Typography
                          className="error"
                          sx={{
                            color: "#D32F2F",
                            padding: "10px 0px 0px 15px",
                          }}
                        >
                          {errors.country}
                        </Typography>
                      )}

                      {/* Address Fields */}
                      <Box
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "10px",
                          padding: "20px 5px 5px",
                          marginTop: "20px",
                          marginBottom: "40px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                          ...(errors.country && {
                            border: "1px solid #D32F2F",
                          }),
                          ...(!errors.country && {
                            border: "1px solid #9A9A9A",
                          }),
                        }}
                      >
                        {/* Street Address */}
                        <CustomTextField
                          focused
                          id="street"
                          name="street"
                          value={values.street}
                          error={!!errors.street}
                          label="Street Address"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <Divider
                          orientation="horizontal"
                          variant="middle"
                          flexItem
                          sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                        />

                        {/* Subdivision */}
                        {/* <CustomTextField
                          focused
                          id="subdivision"
                          name="subdivision"
                          value={values.subdivision}
                          error={!!errors.subdivision}
                          label="Unit / Subdivision"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <Divider
                          orientation="horizontal"
                          variant="middle"
                          flexItem
                          sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                        /> */}

                        {/* City */}
                        <CustomTextField
                          focused
                          id="city"
                          name="city"
                          value={values.city}
                          error={!!errors.city}
                          label="City"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <Divider
                          orientation="horizontal"
                          variant="middle"
                          flexItem
                          sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                        />

                        {/* State */}
                        <CustomTextField
                          focused
                          id="state"
                          name="state"
                          value={values.district}
                          error={!!errors.district}
                          label="State"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <Divider
                          orientation="horizontal"
                          variant="middle"
                          flexItem
                          sx={{ color: "#9A9A9A", marginBottom: "15px" }}
                        />

                        {/* Zip Code */}
                        <CustomTextField
                          focused
                          id="zipCode"
                          name="zipCode"
                          value={values.zipCode}
                          error={!!errors.zipCode}
                          label="Zip Code"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        {/* Province */}
                        {/* <CustomTextField
                          focused
                          id="province"
                          name="province"
                          value={values.province}
                          error={!!errors.province}
                          label="Province"
                          fullWidth
                          outline="none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
                      </Box>
                      {errors.country && touched.country && (
                        <Typography
                          className="error"
                          sx={{
                            color: "#D32F2F",
                            padding: "10px 0px 0px 15px",
                          }}
                        >
                          {errors.country}
                        </Typography>
                      )}
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>

        {/* MAP */}
        <Grid
          className="map-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            padding: "40px 50px 20px 80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="title"
            sx={{ color: "#3B79C9", fontSize: "1.25rem" }}
          >
            {`Have we accurately pinned your location?`}
          </Typography>
          <Typography
            sx={{
              color: "#484848",
              marginBottom: "15px",
            }}
          >{`Drag the map to reposition the pin`}</Typography>
          <Box
            sx={{
              display: "flex",
              backgroundImage: `url(${MapImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "400px",
              minHeight: "420px",
              boxShadow: "-8px 3px 28px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px"
            }}
          ></Box>
        </Grid>
      </Grid>
    );
}