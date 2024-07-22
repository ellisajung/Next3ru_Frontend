// 화자 답변을 생성하는 컴포넌트
import React, { ReactNode } from "react";

type MessageParserProps = {
  children: ReactNode; // children의 타입을 ReactNode으로 지정
  actions: { [key: string]: Function }; // actions 객체 타입 정의
};

const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: string) => {
    if (message.includes("hello")) {
      actions.handleHello(); // actions 객체의 handleHello 함수 호출 ->  응답에 따른 답변 호출
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
