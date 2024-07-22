"use client";

import { useState } from "react";

import ControlledOpenSpeedDial from "@/components/gwanwoo/chatbot/Speeddial";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "@/styles/gwanwoo.css";
import Chatting from "@/components/gwanwoo/chatbot/Chatting";
import Image from "next/image";

import config from "@/components/gwanwoo/chatbot/bot/config";
import MessageParser from "@/components/gwanwoo/chatbot/bot/MessageParser";
import ActionProvider from "@/components/gwanwoo/chatbot/bot/ActionProvider";

import MySpeedDial from "@/components/gwanwoo/chatbot/Speeddial";

import ModalComponent from "@/components/gwanwoo/chatbot/ModalComponent";
import MyModalComponent from "@/components/gwanwoo/chatbot/MyModalComponent";

import DailySchedule from "@/components/gwanwoo/chatbot/bot/widgets/DailySchedule";
import TeamRecord from "@/components/gwanwoo/chatbot/bot/widgets/TeamRecord";
import FavoritePlayer from "@/components/gwanwoo/chatbot/bot/widgets/FavoritePlayer";

// const MyChatbot = () => {
//   const open = true;
//   return (
//     <div className="w-full h-full flex justify-end items-end">
//       {open ? <MyModalComponent /> : null}
//       <MySpeedDial />
//     </div>
//   );
// };

const MyChatbot = () => {
  const [showBot, toggleBot] = useState(false);

  return (
    <>
      <Chatting />
      <button
        className="app-chatbot-button"
        onClick={() => toggleBot((prev: boolean) => !prev)}
      >
        <Image
          src="/images/chatbot/wizbot.svg"
          alt="Wizbot"
          width={38}
          height={36}
        />
      </button>

      <DailySchedule />
      <TeamRecord />
      <FavoritePlayer />
    </>
  );
};

export default MyChatbot;
