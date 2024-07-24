import React from "react";
import Options from "./Options";

import { AiTwotoneClockCircle } from "react-icons/ai";
import { BsClipboard2Fill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const GeneralOptions = (props: any) => {
  const options = [
    {
      name: "일정",
      handler: props.actionProvider.handleDailySchedule,
      id: 1,
      icon: <AiTwotoneClockCircle />,
    },
    {
      name: "KBO 리그기록",
      handler: props.actionProvider.handleTeamRecord,
      id: 2,
      icon: <BsClipboard2Fill />,
    },
    {
      name: "관심선수",
      handler: props.actionProvider.handlePlayerRanking,
      id: 3,
      icon: <FaRegStar />,
    },
  ];

  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
