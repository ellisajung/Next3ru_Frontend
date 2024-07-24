"use client";
import Image from "next/image";

const KTBotAvatar = () => {
  return (
    <div className="">
      <Image
        src="images/chatbot/wizbot.svg"
        alt="Wizbot"
        width={38}
        height={36}
      />
    </div>
  );
};

export default KTBotAvatar;
