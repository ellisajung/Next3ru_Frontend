"use client";

import { useState } from "react";

import "react-chatbot-kit/build/main.css";
import "@/styles/gwanwoo.css";
import Chatting from "@/components/gwanwoo/chatbot/Chatting";
import Image from "next/image";

import DailySchedule from "@/components/gwanwoo/chatbot/bot/widgets/DailySchedule";
import TeamRecord from "@/components/gwanwoo/chatbot/bot/widgets/TeamRecord";
import FavoritePlayer from "@/components/gwanwoo/chatbot/bot/widgets/FavoritePlayer";

const MyChatbot = () => {
  const [showBot, toggleBot] = useState(false);

  return (
    <>
      {showBot && <Chatting />}
      <button
        className="w-[56px] h-[56px] rounded-full p-[10px] text-white bg-[#0d2d44] fixed bottom-[25px] right-[25px] z-[9999] flex items-center justify-center transition-transform ease-in-out duration-600"
        onClick={() => toggleBot((prev: boolean) => !prev)}
      >
        <Image src="/images/chatbot/wizbot.svg" alt="Wizbot" width={38} height={36} />
      </button>

      <DailySchedule />
      <TeamRecord />
      <FavoritePlayer />
    </>
  );
};

export default MyChatbot;
