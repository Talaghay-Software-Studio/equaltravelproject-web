import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import PropTypes from "prop-types";
import AppHeader from "../components/shared/AppHeader";
import BackToTop from "../components/shared/BackToTop";
import Footer from "../components/shared/Footer";
import Newsletter from "../components/shared/Newsletter";
import theme from "../styles/theme"
import AuthModal from "../components/auth-modals/AuthModal"

export default function Layout(props) {
    const [showAuth, setShowAuth] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    const showAuthModal = (show) => {
      setShowAuth(show);
    };

    const setUser = (isLoggedIn, user) => {
      if (isLoggedIn) {
        setUserDetails(user);
      } else {
        setUserDetails("");
      }
    };

    return (
      <ThemeProvider theme={theme}>
        <div
          className="app-layout"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <AppHeader
            appBarStyle={props.appBarStyle}
            userDetails={userDetails}
            hideBecomeHostBtn={props.hideBecomeHostBtn}
            showAuth={showAuth}
            showAuthModal={(bool) => showAuthModal(bool)}
          />

          <AuthModal
            showAuth={showAuth}
            showAuthModal={(bool) => showAuthModal(bool)}
            setUser={(bool, initials) => setUser(bool, initials)}
          />

          <div style={{ marginTop: props.topMargin ? "85px" : "0px" }}>
            {props.children}
          </div>

          <div style={{ marginTop: "auto" }}>
            <BackToTop />
            <Newsletter />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
}

Layout.propTypes = {
  topMargin: PropTypes.bool,
  appBarStyle: PropTypes.string,
  hideBecomeHostBtn: PropTypes.bool,
};