//채팅 화면의 Header 부분
"use client";

import { useState, useEffect } from "react";
import { Icon } from "@mui/material";
import { IoIosSettings } from "react-icons/io";
import ChatHeaderFlex from "./ChatHeaderFlex";

const ChatHeader = () => {
  return (
    <>
      <div
        className="
      flex
      flex-col
      space-between
      "
      >
        <ChatHeaderFlex />
        <IoIosSettings />
      </div>
    </>
  );
};

export default ChatHeader;
