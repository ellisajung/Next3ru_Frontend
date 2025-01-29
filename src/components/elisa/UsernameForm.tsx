"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../shadcn-ui/input";
import { Label } from "../shadcn-ui/label";
import { Button } from "../shadcn-ui/button";
import {
  checkUsername,
  fetchUserData,
  updateUserData,
} from "@/app/(auth)/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/hooks/use-toast";

const UsernameForm = () => {
  // const queryClient = useQueryClient();

  const { toast } = useToast();

  const [usernameValue, setUsernameValue] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  const username = user?.user_metadata.username;
  console.log("username: ", username);
  console.log("usernameValue: ", usernameValue);

  const mutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      // queryClient.invalidateQueries(["user"]); // 이거 왜 안되지
    },
  });

  useEffect(() => {
    if (user) {
      setUsernameValue(username);
    }
    // console.log("code is running");
  }, [user]); // 초기 설정 때문에 해준건데 이런 방식으로 가져와서 업데이트가 느린건가

  const onCheckUsername = async () => {
    const users = await checkUsername(usernameValue);
    if (users?.length === 0) {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
    }
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="username">이름</Label>
        <div className="flex gap-2">
          <Input
            className="w-1/3"
            id="username"
            name="username"
            type="text"
            value={usernameValue}
            onChange={(e) => {
              if (isSubmitted) {
                setIsSubmitted(false);
              } // 중복확인 후 수정 시 제출 초기화
              setUsernameValue(e.currentTarget.value);
            }}
            required
            maxLength={8}
          />
          <Button
            className="rounded-xl"
            variant="outline"
            onClick={onCheckUsername}
          >
            중복확인
          </Button>
          <Button
            className="rounded-xl"
            variant="secondary"
            onClick={() => {
              setIsSubmitted(false);
              setUsernameValue(username);
            }}
          >
            초기화
          </Button>
        </div>
        {username === usernameValue && isSubmitted && (
          <p className="text-sm text-red-700">
            현재 이름과 다른 이름을 입력해주세요.
          </p>
        )}
        {isSubmitted && isValidUsername && usernameValue && (
          <p className="text-sm text-green-700">사용 가능한 이름입니다.</p>
        )}
        {username !== usernameValue && isSubmitted && !isValidUsername && (
          <p className="text-sm text-red-700">사용할 수 없는 아름입니다.</p>
        )}
      </div>
      <div>
        <Button
          className="rounded-xl"
          onClick={() => {
            setIsSubmitted(false);
            mutation.mutate(usernameValue);
            toast({
              description: "이름이 성공적으로 변경되었습니다.",
            });
          }}
          disabled={!isSubmitted || !isValidUsername}
        >
          변경하기
        </Button>
      </div>
    </>
  );
};

export default UsernameForm;
