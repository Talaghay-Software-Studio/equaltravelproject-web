import { Fab, Tooltip, Box, Grid, Popover, Typography, Slider } from "@mui/material";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PropTypes from "prop-types";

export default function SettingsFab(props){
    const { tooltip, handleChangedSetting } = props;
    const [ settings, setSettings ] = useState({
        fontSize: 1,
        brightness: 1,
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange = (event, newValue) => {
        const { name, value } = event.target;
      if (typeof newValue === "number") {
        //setValue(newValue);
        setSettings((prevState) => ({
            ...prevState,
            [name]: value
        }));

        handleChangedSetting(settings);
      }
    };

    return (
      <Grid>
        <Tooltip
          title={tooltip}
          placement="left"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "unset !important",
                fontSize: "1em",
              },
            },
          }}
        >
          <Box
            sx={{
              position: "fixed",
              bottom: "22%",
              right: "40px",
              zIndex: "99",
            }}
            onClick={handleClick}
          >
            <Fab
              size="medium"
              aria-label="set current page settings"
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "5px",
                height: "min-content",
                width: "min-content",
              }}
            >
              <SettingsIcon
                sx={{ color: "#3B79C9", height: "56px", width: "56px" }}
              />
            </Fab>
          </Box>
        </Tooltip>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        >
          <Box
            sx={{
              background: "rgba(255, 255, 255, 1)",
              boxShadow: "0px -4px 21px 2px rgba(0, 0, 0, 0.16)",
              padding: "12px",
              lineHeight: "normal",
              minWidth: "428px",
            }}
          >
            <Typography sx={{ color: "#19191B", fontWeight: 500 }}>
              {`Font Size`}
            </Typography>
            <Slider
              name="fontSize"
              value={settings.fontSize}
              step={0.2}
              min={0.2}
              max={3}
              aria-label="Font size slider"
              valueLabelDisplay="auto"
              onChange={handleChange}
            />

            <Typography sx={{ color: "#19191B", fontWeight: 500 }}>
              {`Brightness`}
            </Typography>
            <Slider
              name="brightness"
              value={settings.brightness}
              step={0.2}
              min={0.2}
              max={3}
              aria-label="Brightness slider"
              valueLabelDisplay="auto"
            />

            <Typography sx={{ color: "#19191B", fontWeight: 500 }}>
              {`Color Lighting`}
            </Typography>
            <Grid sx={{ display: "flex", flexDirection: "row" }}></Grid>
          </Box>
        </Popover>
      </Grid>
    );
}

SettingsFab.propTypes = {
  tooltip: PropTypes.object,
}