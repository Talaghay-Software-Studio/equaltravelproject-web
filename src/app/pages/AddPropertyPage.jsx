//import React from "react";
import { Button, Grid, IconButton } from "@mui/material";
import Layout from "./Layout";
import BackIcon from "/assets/icons/svg/back.svg";
import SelectPropertyCategory from "../components/add-property/SelectPropertyCategory"
import AddPropertyProgress from "../components/add-property/AddPropertyProgress";
import React from "react";
import { useNavigate } from "react-router-dom";
import SetPropertyAddress from "../components/add-property/SetPropertyAddress";
import SelectPropertyType from "../components/add-property/SelectPropertyType";
import AddFacilities from "../components/add-property/AddFacilities";
import AddAmenities from "../components/add-property/AddAmenities";
import AddSafetyItems from "../components/add-property/AddSafetyItems";
import AddPropertyPhotos from "../components/add-property/AddPropertyPhotos";
import AddPropertyTitle from "../components/add-property/AddPropertyTitle";
import AddPropertyPrice from "../components/add-property/AddPropertyPrice";
import ReviewProperty from "../components/add-property/ReviewProperty";
import SubmittedModal from "../components/add-property/SubmittedModal";

export default function AddPropertyPage(){
  const navigate = useNavigate();

  const [showSubmit, setShowSubmit] = React.useState(false);
  const [contentState, setContentState] = React.useState("propertyCategory");
    const [propertyState, setPropertyState] = React.useState({
        category: "",
        type: "",
        address: {
            country: "",
            street: "",
            unit: "",
            city: "",
            district: "",
            zipCode: "",
            province: ""
        },
        facilities: {
            bedroom: "",
            parking: ""
        }
    });
    const handleBack = () => {
      let type = "";
      switch (contentState) {
        case "propertyCategory":
          type = "propertyCategory";
          break;
        case "propertyType":
          type = "propertyCategory";
          break;
        case "propertyAddress":
          type = "propertyType";
          break;
        case "propertyFacilities":
          type = "propertyAddress";
          break;
        case "propertyAmenities":
          type = "propertyFacilities";
          break;
        case "propertySafetyItems":
          type = "propertyAmenities";
          break;
        case "propertyPhotos":
          type = "propertySafetyItems";
          break;
        case "propertyTitle":
          type = "propertyPhotos";
          break;
        case "propertyPrice":
          type = "propertyTitle";
          break;
        case "reviewProperty":
          type = "propertyPrice";
          break;
        default:
          break;
      }

      if (contentState == "propertyCategory") {
        navigate({
          pathname: "/host-page",
        });
      } else {
        setContentState(type);
      }
    };

    const handleNext = (action) => {
      let type = "";
      
      if(action == "Next"){
        switch (contentState) {
          case "propertyCategory":
            type = "propertyType";
            break;
          case "propertyType":
            type = "propertyAddress";
            break;
          case "propertyAddress":
            type = "propertyFacilities";
            break;
          case "propertyFacilities":
            type = "propertyAmenities";
            break;
          case "propertyAmenities":
            type = "propertySafetyItems";
            break;
          case "propertySafetyItems":
            type = "propertyPhotos";
            break;
          case "propertyPhotos":
            type = "propertyTitle";
            break;
          case "propertyTitle":
            type = "propertyPrice";
            break;
          case "propertyPrice":
            type = "reviewProperty";
            break;
          default:
            break;
        }

        if (type == "propertyCategory") {
          navigate({
            pathname: "/host-page",
          });
        } else {
          setContentState(type);
        }
      }
      else if(action == "Submit"){
        handleSubmitProperty();
      }
    };

    const handleSubmitProperty = () => {
      //handleOpenAuthSnackbar("success", "Successfully submitted! We'll be reviewing your submission and will let you know how it goes right away.");
      setShowSubmit(true)

      // navigate({
      //   pathname: "/host-page",
      // });

    };

    const handleChange = (propertyState, value) => {
      setPropertyState((prevState) => ({
        ...prevState,
        [propertyState]: value
      }));
    }

    return (
      <Layout
        topMargin={true}
        appBarStyle="primary"
        hideBecomeHostBtn={true}
        hideBlog
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: "30px",
            minHeight: "640px",
          }}
        >
          {/* Main Display */}
          <Grid sx={{ paddingX: "80px" }}>
            {contentState == "propertyCategory" && (
              <SelectPropertyCategory
                value={propertyState.category}
                valueChanged={(state, value) => {
                  handleChange(state, value);
                }}
              />
            )}
            {contentState == "propertyType" && (
              <SelectPropertyType
                value={propertyState.type}
                valueChanged={(state, value) => {
                  handleChange(state, value);
                }}
              />
            )}
            {contentState == "propertyAddress" && <SetPropertyAddress />}
            {contentState == "propertyFacilities" && <AddFacilities />}
            {contentState == "propertyAmenities" && <AddAmenities />}
            {contentState == "propertySafetyItems" && <AddSafetyItems />}
            {contentState == "propertyPhotos" && <AddPropertyPhotos />}
            {contentState == "propertyTitle" && <AddPropertyTitle />}
            {contentState == "propertyPrice" && <AddPropertyPrice />}
            {contentState == "reviewProperty" && (
              <ReviewProperty
                background={`/assets/img/properties/5.png`}
                propertyPrice={"$ 1036"}
                propertyTitle={"Property For Approval"}
                propertyDescription={"Property Description"}
              />
            )}
          </Grid>

          {/* Progress Bar */}
          <Grid sx={{ marginTop: "auto" }}>
            <AddPropertyProgress />
          </Grid>

          {/* Buttons */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "30px 80px 0px",
            }}
          >
            <IconButton
              color="inherit"
              onClick={handleBack}
              aria-label="close"
              sx={{
                height: "fit-content",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={BackIcon}
                alt="Back Icon"
                style={{ height: 15, width: 15 }}
              />
            </IconButton>
            <Button
              sx={{
                background: "#3B79C9",
                color: "#FFFFFF",
                display: "block",
                borderRadius: "30px",
                mx: 2,
                padding: "11px 40px",
                marginLeft: "auto",
                "&:hover": {
                  backgroundColor: "#3B79C9 !important",
                  color: "#FFFFFF !important",
                },
              }}
              onClick={() =>
                handleNext(contentState == "reviewProperty" ? "Submit" : "Next")
              }
            >
              {`${contentState == "reviewProperty" ? "Submit" : "Next"}`}
            </Button>
          </Grid>
        </Grid>

        <SubmittedModal
          showSubmit={showSubmit}
          setShowSubmit={(bool) => setShowSubmit(bool)}
        />
      </Layout>
    );
}