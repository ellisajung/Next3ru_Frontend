"use client";

import React, { useState } from "react";
import { Input } from "../shadcn-ui/input";
import { Label } from "../shadcn-ui/label";
import { Button } from "../shadcn-ui/button";
import { checkUsername } from "@/app/(auth)/actions";

// interface UsernameFieldProps {
//   isValidUsername: boolean;
//   setIsValidUsername: React.Dispatch<React.SetStateAction<boolean>>;
// }

const UsernameField = () => {
  const [username, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onCheckUsername = async () => {
    const users = await checkUsername(username);
    if (users?.length === 0) {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
    }
    setIsSubmitted(true);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="username">이름</Label>
      <div className="flex gap-2">
        <Input
          className="w-1/2"
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => {
            if (isSubmitted) {
              setIsSubmitted(false);
            } // 중복확인 후 수정 시 제출 초기화
            setUsername(e.currentTarget.value);
          }}
          required
          maxLength={8}
        />
        <Button
          className="rounded-xl"
          variant="secondary"
          onClick={onCheckUsername}
        >
          중복확인
        </Button>
      </div>
      {isSubmitted && isValidUsername && username && (
        <p className="text-sm text-green-700">사용 가능한 이름입니다.</p>
      )}
      {isSubmitted && !isValidUsername && (
        <p className="text-sm text-red-700">사용할 수 없는 아름입니다.</p>
      )}
    </div>
  );
};

export default UsernameField;
