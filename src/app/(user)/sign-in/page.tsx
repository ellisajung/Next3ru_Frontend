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
import { signIn } from "../actions";

const LoginPage = () => {
  return (
    <form>
      <Card className="w-96 mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex justify-center">
            로그인
          </CardTitle>
          <CardDescription className="flex justify-center"></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
            <Button formAction={signIn}>이메일 로그인</Button>
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
          </div>
          <div className="mt-4 text-center text-sm">
            계정이 없으신가요?&nbsp;
            <Link
              href="/signup"
              className="underline font-semibold"
            >
              가입하기
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default LoginPage;
