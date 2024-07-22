import Chatbot from "react-chatbot-kit";
import React from "react";
import "react-chatbot-kit/build/main.css";

import config from "@/components/gwanwoo/chatbot/bot/config";
import MessageParser from "@/components/gwanwoo/chatbot/bot/MessageParser";
import ActionProvider from "@/components/gwanwoo/chatbot/bot/ActionProvider";

const Chatting = () => {
  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
};

export default Chatting;
