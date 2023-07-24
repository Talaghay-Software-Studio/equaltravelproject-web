import { Divider, Grid, Typography } from "@mui/material";
import FBIcon from "/assets/icons/svg/fb.svg";
import TwitterIcon from "/assets/icons/svg/twitter.svg";
import InstaIcon from "/assets/icons/svg/insta.svg";
// import LinkedinIcon from '/assets/icons/svg/linkedin.svg';
import AppLogo from "./AppLogo";

const companyLinks = ["About Us", "Legal Information", "Contact Us", "Blogs"];
const helpLinks = [
  "Find a Property",
  "How To Host",
  "Why Us",
  "FAQs",
  "Rental Guides",
];
const footerLinks = [
  {
    "id": "privacy-policy",
    "label": "Privacy & Cookie Policy",
    "route": "/privacy-policy"
  },
  {
    "id": "terms-and-conditions",
    "label": "Terms & Conditions",
    "route": "/terms-and-conditions"
  },
  {
    "id": "accessibility",
    "label": "Accessibility",
    "route": "/web-accessibility-statement"
  },
  {
    "id": "disclaimer",
    "label": "Disclaimer",
    "route": "/disclaimer"
  },
];

export default function Footer() {
  const separator = `|`;
  return (
    <Grid
      sx={{ background: "#3B79C9", display: "flex", flexDirection: "column" }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          color: "white",
        }}
      >
        <Grid sx={{ width: "min-content", mb: 2 }}>
          <AppLogo logoHeight="250" />
          <Typography
            sx={{ color: "white", position: "relative", top: -35, left: 40 }}
          >
            {`Let us help you make your hotel/resort the most accessible stay as possible for all travelers, no matter their disability or medical condition.`}
          </Typography>
        </Grid>
        <Grid sx={{ mt: "75px" }}>
          <Typography className="title">Company</Typography>
          {companyLinks.map((link) => (
            <a
              key={link}
              href=""
              style={{
                my: 3,
                color: "white",
                display: "block",
                textDecoration: "none",
              }}
            >
              <Typography sx={{ textTransform: "initial" }}>{link}</Typography>
            </a>
          ))}
        </Grid>
        <Grid sx={{ mt: "75px" }}>
          <Typography className="title">Help Center</Typography>
          {helpLinks.map((helplink) => (
            <a
              key={helplink}
              href=""
              style={{
                my: 2,
                color: "white",
                display: "block",
                textDecoration: "none",
              }}
            >
              <Typography sx={{ textTransform: "initial" }}>
                {helplink}
              </Typography>
            </a>
          ))}
        </Grid>
        <Grid sx={{ mt: "75px" }}>
          <Typography className="title">Contact Info</Typography>
          <Typography>Phone: +1-833-677-5327</Typography>
          <Typography>Email: info@equaltravelproject.com</Typography>
          <Typography>Location: 100 Smart Street, LA, USA</Typography>

          <Grid sx={{ mt: "10px" }}>
            <a
              href="https://www.facebook.com/equaltravelproject"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FBIcon}
                className="logo"
                alt="Facebook logo"
                style={{ paddingRight: 15 }}
              />
            </a>
            <a
              href="https://twitter.com/ETravelProject"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TwitterIcon}
                className="logo"
                alt="Twitter logo"
                style={{ paddingRight: 15 }}
              />
            </a>
            <a
              href="https://www.instagram.com/equaltravelproject"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={InstaIcon}
                className="logo"
                alt="Instagram logo"
                style={{ paddingRight: 15 }}
              />
            </a>
            {/* <a href="" style={{ textDecoration: "none" }}>
              <img
                src={LinkedinIcon}
                className="logo"
                target="_blank"
                rel="noreferrer"
                alt="Linked In logo"
                style={{ paddingRight: 15 }}
              />
            </a> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "white",
          mb: 2,
        }}
      >
        {footerLinks.map((footerlink, ind) => (
          <div key={footerlink.id} style={{ display: "flex" }}>
            <a
              href={footerlink.route}
              style={{
                my: 2,
                color: "white",
                display: "block",
                textDecoration: "none",
                padding: "0px 5px",
              }}
            >
              <Typography sx={{ textTransform: "initial" }}>
                {footerlink.label}
              </Typography>
            </a>
            <div style={{ color: "white" }}>
              {" "}
              {ind < footerLinks.length - 1 && separator}{" "}
            </div>
          </div>
        ))}
      </Grid>
      <Divider sx={{ borderColor: "white" }} />
      <Grid
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          p: 5,
        }}
      >
        <Grid>
          <Typography>{`© 2023 Equal Travel Project | All rights reserved`}</Typography>
        </Grid>
        <Grid>
          <Typography>{`Created by Talaghay Software Studio`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
