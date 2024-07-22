"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ModalComponent from "./ModalComponent";

const MySpeedDial = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClick={handleOpen}
      open={open} // Add open prop to control the open state of SpeedDial
      onClose={handleClose} // Add onClose prop to handle closing the SpeedDial
    >
      {/* <SpeedDialAction
          icon={<ModalComponent onClose={handleClose} />} // Render the ModalComponent as an icon
          // tooltipTitle="Open Modal" // Add tooltip for the action
          onClick={handleClose} // Add onClick handler to close the SpeedDial after opening the modal
        /> */}
    </SpeedDial>
    // </Box>
  );
};

export default MySpeedDial;
