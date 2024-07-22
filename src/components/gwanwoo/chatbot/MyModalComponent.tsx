"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chatting from "./Chatting";
import { useState } from "react";

const MyModalComponent = () => {
  return (
    <>
      <div className="mr-6">
        <Chatting />
      </div>
    </>
  );
};

export default MyModalComponent;
