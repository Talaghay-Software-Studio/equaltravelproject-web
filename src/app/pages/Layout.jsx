import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import theme from "../styles/theme"
import AuthModal from "../pages/modals/AuthModal"

export default function Layout(props) {
    const [showAuth, setShowAuth] = useState(false);
    const [userAvatar, setUserAvatar] = useState("");

    const showAuthModal = (show) => {
      setShowAuth(show);
    };

    const setAvatar = (isLoggedIn, initials) => {
      if(isLoggedIn){
        setUserAvatar(initials);
      }
      else{
        setUserAvatar("");
      }
    }

    return (
      <ThemeProvider theme={theme}>
        <div
          className="app-layout"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <AppHeader
            appBarStyle={props.appBarStyle}
            userAvatar={userAvatar}
            showAuth={showAuth}
            showAuthModal={(bool) => showAuthModal(bool)}
          />

          <AuthModal
            showAuth={showAuth}
            showAuthModal={(bool) => showAuthModal(bool)}
            setAvatar={(bool, initials) => setAvatar(bool, initials)}
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