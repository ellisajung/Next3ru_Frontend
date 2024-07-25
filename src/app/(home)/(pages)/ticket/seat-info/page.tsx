"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/shadcn-ui/badge";
import { Button } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn-ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { FaPen } from "react-icons/fa";
import ReviewEditModal from "@/components/elisa/ReviewEditModal";
import SeatInfoModal from "@/components/elisa/SeatInfoModal";
import Stadium from "@/components/elisa/Stadium";
import { useState } from "react";
import StadiumModelTab from "@/components/elisa/StadiumModelTab";
import ReviewTab from "@/components/elisa/ReviewTab";

const SeatInfoPage = () => {
  return (
    <div
      id="seat-info"
      className="h-full flex justify-center items-center"
    >
      <Tabs
        defaultValue="account"
        id="kkkkk"
        // className="w-full h-[75%] mb-[5%] gird grid-rows-2"
        className="w-full h-[80%]"
      >
        <TabsList>
          <TabsTrigger
            value="account"
            className="pl-5 pr-6"
          >
            <Image
              src="/images/elisa/baseball-field-icon.svg"
              alt="baseball-field-icon"
              width={20}
              height={20}
              className="mr-1"
            />
            3D 좌석안내도
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="px-11"
          >
            좌석리뷰
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          id="123454"
          // className="break-after-auto"
          // className="data-[state=active]:h-full"
          // className="grow"
        >
          <StadiumModelTab />
        </TabsContent>
        <TabsContent
          value="password"
          // className="after:place-self-stretch"
          // className="data-[state=active]:h-full"
        >
          <ReviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeatInfoPage;
