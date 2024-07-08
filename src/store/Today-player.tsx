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
  pcode: string;
  changeinn: string;

  onClick?: () => void;
}
export default Player;

interface PlayerListProps {
  todayPlayers: Player[];
  selectedPlayerPcode: string | null; // 추가된 상태
  setSelectedPlayerPcode: (pcode: string) => void;
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
      pcode: "79402",
      changeinn: "",
    },
    {
      name: "오윤석",
      imageUrl: "/images/hitter/infielder/오윤석.svg",
      number: "1",
      position: { top: "30%", left: "56%" },
      role: "2B",
      rating: 1.7,
      pcode: "64504",
      changeinn: "",
    },
    {
      name: "정준영",
      imageUrl: "/images/hitter/outfielder/정준영.svg",
      number: "49",
      position: { top: "12%", left: "72%" },
      role: "RF",
      rating: 8.2,
      pcode: "53058",
      changeinn: "",
    },
    {
      name: "배정대",
      imageUrl: "/images/hitter/outfielder/배정대.svg",
      number: "11",
      position: { top: "7%", left: "42%" },
      role: "CF",
      rating: 2.5,
      pcode: "64166",
      changeinn: "",
    },
    {
      name: "로하스",
      imageUrl: "/images/hitter/outfielder/로하스.svg",
      number: "94",
      position: { top: "12%", left: "12%" },
      role: "LF",
      rating: 5.2,
      pcode: "67025",
      changeinn: "",
    },
    {
      name: "문상철",
      imageUrl: "/images/hitter/outfielder/문상철.svg",
      number: "48",
      position: { top: "45%", left: "72%" },
      role: "1B",
      rating: 4.7,
      pcode: "64007",
      changeinn: "",
    },
    {
      name: "황재균",
      imageUrl: "/images/hitter/infielder/황재균.svg",
      number: "13",
      position: { top: "45%", left: "12%" },
      role: "3B",
      rating: 7.2,
      pcode: "76313",
      changeinn: "",
    },
    {
      name: "쿠에바스",
      imageUrl: "/images/pitcher/쿠에바스.svg",
      number: "33",
      position: { top: "43%", left: "42%" },
      role: "SP",
      rating: 3.2,
      pcode: "69032",
      changeinn: "",
    },
    {
      name: "장성우",
      imageUrl: "/images/hitter/catcher/장성우.svg",
      number: "33",
      position: { top: "70%", left: "42%" },
      role: "C",
      rating: 5.5,
      pcode: "78548",
      changeinn: "",
    },
    {
      name: "벤자민",
      imageUrl: "/images/pitcher/벤자민.svg",
      number: "99",
      position: { top: "22%", left: "40%" },
      role: "RP",
      rating: 5.1,
      pcode: "52043",
      changeinn: "5",
    },
    {
      name: "김민수",
      imageUrl: "/images/pitcher/김민수.svg",
      number: "1",
      position: { top: "22%", left: "55%" },
      role: "RP",
      rating: 2.3,
      pcode: "65048",
      changeinn: "7",
    },
    {
      name: "하준호",
      imageUrl: "/images/pitcher/하준호.svg",
      number: "49",
      position: { top: "15%", left: "70%" },
      role: "RP",
      rating: 8.4,
      pcode: "78517",
      changeinn: "8",
    },
    {
      name: "박영현",
      imageUrl: "/images/pitcher/박영현.svg",
      number: "11",
      position: { top: "10%", left: "47%" },
      role: "CP",
      rating: 4.5,
      pcode: "52060",
      changeinn: "9",
    },
  ],

  selectedPlayerPcode: null, // 초기 값은 null로 설정
  setSelectedPlayerPcode: (pcode) => set({ selectedPlayerPcode: pcode }), // setSelectedPlayerPcode 함수 정의
  getColorClass,
}));
