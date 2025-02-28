"use client";

import * as React from "react";
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
} from "@/components/shadcn-ui/left-drawer";
import Image from "next/image";
import LeftNavMenu from "./LeftNavMenu";
import Link from "next/link";

const LeftNav = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button>
          <Image
            src="/images/navbar/Hambugar.svg"
            className="w-[32px] h-[32px]"
            alt="Menu Icon"
            width={50}
            height={50}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="font-['KT'] flex flex-col justify-between">
        <DrawerHeader className="flex flex-col items-start">
          <DrawerTitle>메뉴</DrawerTitle>
          {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
        </DrawerHeader>
        <LeftNavMenu />
        <DrawerFooter>
          <Button
            variant="outline"
            asChild
          >
            <Link href="http://kt-sports.co.kr/sports/site/main.do">
              <Image
                src="/images/navbar/ktsports.svg"
                alt="스포츠로고"
                // className="w-[80px] rounded-[8px] p-1.5"
                width={76}
                height={40}
              />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <Link
              href="https://www.ktwizstore.co.kr/"
              className="text-[#FF0000] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff71d9] hover:to-[#e09797] transition-color"
            >
              KT SHOP
            </Link>
          </Button>
          {/* <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LeftNav;
