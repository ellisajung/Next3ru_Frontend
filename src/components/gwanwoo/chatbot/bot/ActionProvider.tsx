// 챗봇 답변을 생성하는 컴포넌트
import React, { ReactNode } from "react";
import { createChatBotMessage } from "react-chatbot-kit"; // Assuming this is correctly imported

type ActionProviderProps = {
  createChatBotMessage: (text: string, widget: any) => any; // Adjust the function type
  setState: (state: any) => void; // Adjust the setState function type as needed
  children: ReactNode;
};

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProviderProps) => {
  const handleOptions = (options: any) => {
    const botMessage = createChatBotMessage("원하시는 항목을 선택해 주세요.", {
      widget: "overview",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDailySchedule = () => {
    const botMessage = createChatBotMessage("금일 경기 일정입니다.", {
      widget: "dailySchedule",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTeamRecord = () => {
    const botMessage = createChatBotMessage("KBO 리그 기록입니다.", {
      widget: "teamRecord",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePlayerRanking = () => {
    const botMessage = createChatBotMessage("금일 경기의 선수 라인업입니다.", {
      widget: "todayLineUp",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // const handlePlayerConditionScore = () => {
  //   const botMessage = createChatBotMessage("AI가 분석한 오늘경기의 선수들의 컨디션 점수입니다.", {
  //     widget: "playerConditionScore",
  //   });

  //   setState((prev: any) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };

  // const handleAISquad = () => {
  //   const botMessage = createChatBotMessage("AI가 추천하는 오늘의 최적 스쿼드는 다음과 같습니다.", {
  //     widget: "aiSquad",
  //   });

  //   setState((prev: any) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };

  // const handle3DSeatingGuide = () => {
  //   const botMessage = createChatBotMessage("경기장의 3D 좌석 안내를 확인해보세요.", {
  //     widget: "seatingGuide3D",
  //   });

  //   setState((prev: any) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          actions: {
            handleOptions: handleOptions, // Pass handleHello function to children
            handleDailySchedule: handleDailySchedule,
            handleTeamRecord: handleTeamRecord,
            handlePlayerRanking: handlePlayerRanking,
            // handlePlayerConditionScore: handlePlayerConditionScore,
            // handleAISquad: handleAISquad,
            // handle3DSeatingGuide: handle3DSeatingGuide,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;
