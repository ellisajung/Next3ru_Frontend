import { create } from "zustand";

interface Player {
  name: string;
  imageUrl: string;
  number: string;
  position: {
    top: string;
    left: string;
  };
  role: string;
  rating: number;
  onClick?: () => void;
}
export default Player;

interface PlayerListProps {
  todayPlayers: Player[];
  todayPlayersSub: Player[];
  getColorClass: (rating: number) => string;
}

const getColorClass = (rating: number) => {
  if (rating < 3.0) {
    return "bg-red-500";
  } else if (rating < 5.0) {
    return "bg-orange-500";
  } else if (rating < 8.0) {
    return "bg-green-500";
  } else {
    return "bg-blue-500";
  }
};
export const useStore = create<PlayerListProps>((set) => ({
  todayPlayers: [
    {
      name: "김상수",
      imageUrl: "/images/hitter/infielder/김상수.svg",
      number: "99",
      position: { top: "30%", left: "28%" },
      role: "SS",
      rating: 7.7,
    },
    {
      name: "오윤석",
      imageUrl: "/images/hitter/infielder/오윤석.svg",
      number: "1",
      position: { top: "30%", left: "56%" },
      role: "2B",
      rating: 1.7,
    },
    {
      name: "정준영",
      imageUrl: "/images/hitter/outfielder/정준영.svg",
      number: "49",
      position: { top: "12%", left: "72%" },
      role: "RF",
      rating: 8.2,
    },
    {
      name: "배정대",
      imageUrl: "/images/hitter/outfielder/배정대.svg",
      number: "11",
      position: { top: "7%", left: "42%" },
      role: "CF",
      rating: 2.5,
    },
    {
      name: "로하스",
      imageUrl: "/images/hitter/outfielder/로하스.svg",
      number: "94",
      position: { top: "12%", left: "12%" },
      role: "LF",
      rating: 5.2,
    },
    {
      name: "고명준",
      imageUrl: "/images/hitter/outfielder/문상철.svg",
      number: "48",
      position: { top: "45%", left: "72%" },
      role: "1B",
      rating: 4.7,
    },
    {
      name: "황재균",
      imageUrl: "/images/hitter/infielder/황재균.svg",
      number: "13",
      position: { top: "45%", left: "12%" },
      role: "3B",
      rating: 7.2,
    },
    {
      name: "쿠에바스",
      imageUrl: "/images/pitcher/쿠에바스.svg",
      number: "33",
      position: { top: "43%", left: "42%" },
      role: "SP",
      rating: 3.2,
    },
    {
      name: "장성우",
      imageUrl: "/images/hitter/catcher/장성우.svg",
      number: "33",
      position: { top: "70%", left: "42%" },
      role: "C",
      rating: 5.5,
    },
  ],
  todayPlayersSub: [
    {
      name: "벤자민",
      imageUrl: "/images/pitcher/벤자민.svg",
      number: "99",
      position: { top: "22%", left: "40%" },
      role: "RP",
      rating: 5.1,
    },
    {
      name: "김민수",
      imageUrl: "/images/pitcher/김민수.svg",
      number: "1",
      position: { top: "22%", left: "55%" },
      role: "RP",
      rating: 2.3,
    },
    {
      name: "하준호",
      imageUrl: "/images/pitcher/하준호.svg",
      number: "49",
      position: { top: "15%", left: "70%" },
      role: "RP",
      rating: 8.4,
    },
    {
      name: "박영현",
      imageUrl: "/images/pitcher/박영현.svg",
      number: "11",
      position: { top: "10%", left: "47%" },
      role: "CP",
      rating: 4.5,
    },
  ],
  getColorClass,
}));
