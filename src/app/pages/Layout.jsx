import { ThemeProvider } from "@mui/material/styles";
import AppHeader from "../components/AppHeader";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import theme from "../styles/theme"
import { useState } from "react";

export default function Layout(props) {
    const [showAuth, setShowAuth] = useState(false);
    const showAuthModal = (show) => {
      setShowAuth(show);
    };

    return (
      <ThemeProvider theme={theme}>
        <div
          className="app-layout"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <AppHeader
            appBarStyle={props.appBarStyle}
            showAuth={showAuth}
            showAuthModal={(bool) => showAuthModal(bool)}
          />

          <div style={{ marginTop: props.topMargin ? "85px" : "0px" }}>
            {" "}
            {props.children}{" "}
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