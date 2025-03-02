import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import Link from "next/link";
import { Button } from "./shadcn-ui/button";
import { DrawerClose } from "./shadcn-ui/left-drawer";

const ACCORDION_ITEMS = [
  {
    trigger: "KT",
    contents: [
      { content: "kt wiz는?", href: "" },
      { content: "구단 BI", href: "" },
      { content: "회원 정책", href: "" },
      { content: "스폰서", href: "" },
      { content: "월페이퍼", href: "" },
    ],
  },
  {
    trigger: "wiz",
    contents: [
      { content: "kt wiz park", href: "" },
      { content: "주차 예약", href: "" },
      { content: "찾아오기", href: "" },
      { content: "익산야구장", href: "" },
    ],
  },
  {
    trigger: "Game",
    contents: [
      { content: "정규 리그", href: "" },
      { content: "퓨처스 리그", href: "" },
    ],
  },
  {
    trigger: "Player",
    contents: [
      { content: "코칭 스텝", href: "" },
      { content: "투수", href: "" },
      { content: "타자", href: "" },
      { content: "응원단", href: "" },
      { content: "응원가", href: "" },
      { content: "저작권", href: "" },
    ],
  },
  {
    trigger: "Media",
    contents: [
      { content: "wiz 뉴스", href: "" },
      { content: "wiz 스토리", href: "" },
      { content: "시구자 정보", href: "" },
      { content: "wiz 포토", href: "" },
      { content: "하이라이트", href: "" },
      { content: "영상모음", href: "" },
    ],
  },
  {
    trigger: "티켓구매",
    contents: [
      { content: "티켓 예매", href: "" },
      { content: "단체 관람", href: "" },
      { content: "좌석 정보", href: "/ticket/seat-info" },
    ],
  },
  {
    trigger: "AI",
    contents: [
      { content: "컨디션 평점", href: "" },
      { content: "AI 추천", href: "" },
    ],
  },
];

const LeftNavMenu = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-4"
    >
      {ACCORDION_ITEMS.map((item, i) => (
        <AccordionItem
          value={`item-${i}`}
          key={i}
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {item.contents.map((content, i) => (
                <li key={i}>
                  <DrawerClose asChild>
                    <Link href={content.href}>{content.content}</Link>
                  </DrawerClose>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default LeftNavMenu;
