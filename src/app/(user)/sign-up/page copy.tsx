"use client";

import Link from "next/link";
import { Button } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";
import Image from "next/image";
import { signUp } from "../actions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CheckUsernameBtn from "@/components/elisa/CheckUsernameBtn";
import { createClient } from "@/utils/supabase/server";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const errorMsg = useSearchParams().get("error-message");
  const confirmMsg = useSearchParams().get("confirm-message");

  const checkUsername = async () => {
    const supabase = await createClient();

    let { data: users, error } = await supabase
      .from("users")
      .select()
      .eq("username", username);

    if (error) {
      console.log(error.details);
      return;
    }
    return users;
  };

  const onCheckUsername = async () => {
    const users = await checkUsername();
    console.log(username, users);
    // setIsValidUsername(true);
  };

  return (
    <form>
      <Card className="w-96 mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex justify-center">
            회원가입
          </CardTitle>
          <CardDescription className="flex justify-center">
            회원가입 방식을 선택해 주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* username field */}
            <div className="grid gap-2">
              <Label htmlFor="username">이름</Label>
              <div className="flex gap-2">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.currentTarget.value);
                  }}
                  required
                  maxLength={8}
                />
                <Button
                  variant="secondary"
                  onClick={onCheckUsername}
                >
                  중복확인
                </Button>
              </div>
            </div>
            {/* email field */}
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            {/* error msg field */}
            {errorMsg && (
              <div className="text-sm text-red-700">
                {decodeURIComponent(errorMsg)}
              </div>
            )}
            {confirmMsg && (
              <div className="text-sm text-green-700">
                {decodeURIComponent(confirmMsg)}
              </div>
            )}
            {/* signup button */}
            <Button
              formAction={isValidUsername ? signUp : undefined}
              disabled={!isValidUsername}
            >
              이메일 회원가입
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-sm uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  또는
                </span>
              </div>
            </div>
            {/* <Link
            href="/"
            className={`bg-[#FEE600] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
            <Link
              href="/"
              className="bg-[#FEE600] flex justify-center rounded-md"
            >
              <Image
                src="/images/social-logos/kakao-narrow.png"
                alt=""
                width={160}
                height={40}
              />
            </Link>
            {/* <Link
            href="/"
            className={`bg-[#02C75A] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
            <Link
              href="/"
              className="bg-[#02C75A] flex justify-center rounded-md"
            >
              <Image
                src="/images/social-logos/naver.png"
                alt=""
                width={140}
                height={40}
              />
            </Link>
            {/* <Link
            href="/"
            className={`bg-[#F2F2F2] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
            <Link
              href="/"
              className="bg-[#F2F2F2] flex justify-center rounded-md"
            >
              <Image
                src="/images/social-logos/google.svg"
                alt=""
                width={170}
                height={40}
              />
            </Link>
            <div className="text-center text-sm">
              이미 계정이 있으신가요?&nbsp;
              <Link
                href="sign-in"
                className="underline font-semibold"
              >
                로그인하기
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default SignUpPage;
