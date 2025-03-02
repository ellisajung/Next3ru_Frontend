"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/shadcn-ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn-ui/right-drawer";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "./shadcn-ui/switch";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";
import { signOut } from "@/app/actions/auth";
import ThemeSwitch from "./elisa/ThemeSwitch";
import { redirect } from "next/navigation";

const RightNav = ({ username }: { username: string | undefined }) => {
  const [rotate, setRotate] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"], refetchType: "all" });
      revalidatePath("/");
      redirect("/");
    },
  });
  // console.log("rotate: ", rotate);
  // console.log("username:", username);
  // console.log("theme", theme);
  return (
    <Drawer
      direction="right"
      onOpenChange={(isOpen) => {
        // Drawer가 닫힐 때 rotate 초기화
        // 그렇지 않으면 언마운트 되지 않는 한 true로 바뀐 후
        // 다시 열고 닫았을 때 true 상태 유지됨
        // (따라서 useEffect로도 해결안됨)
        if (!isOpen) setRotate(false);
      }}
    >
      <DrawerTrigger asChild>
        <button>
          <Image
            src="/images/navbar/Mypage.svg"
            className="w-[34px] h-[34px]"
            alt="Profile Icon"
            width={50}
            height={50}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="font-['KT'] flex flex-col items-end ">
        <DrawerHeader>
          <DrawerTitle>반가워요, {username} 님</DrawerTitle>
          {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
        </DrawerHeader>
        <div className="flex flex-col items-end p-4 gap-2">
          <DrawerClose asChild>
            <Link href="/user/account">내 계정</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="/user/reviews">내 리뷰</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              className="flex justify-start items-center w-full p-0 h-5 text-[16px]"
              variant="ghost"
              onClick={() => {
                mutation.mutate();
              }}
            >
              <LogOut
                className="mr-1"
                size={16}
              />
              로그아웃
            </Button>
          </DrawerClose>
        </div>
        <DrawerFooter>
          <div className="flex justify-end items-center gap-2">
            {/* <Sun
              className={`h-6 w-6 ${
                rotate && theme === "light"
                  ? "animate-[spin_1s_ease-in-out]"
                  : ""
              }`}
            />
            <Switch
              id="theme-toggle"
              checked={theme === "dark"}
              onCheckedChange={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
                setRotate(true);
              }}
            />
            <Moon
              className={`h-6 w-6 ${
                rotate && "dark:animate-[spin_1s_ease-in-out]"
              }`}
            /> */}
            <ThemeSwitch
              rotate={rotate}
              setRotate={setRotate}
            />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RightNav;
