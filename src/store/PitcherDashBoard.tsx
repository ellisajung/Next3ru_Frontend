import { create } from "zustand";

interface Player {
  name: string;
  imageUrl: string;
  number: string;
  role: string;
  pcode: string;
  onClick?: () => void;
}
export default Player;

interface PlayerListProps {
  pitchers: Player[];
  selectedPlayerPcode: string | null; // 추가된 상태
  setSelectedPlayerPcode: (pcode: string) => void;
}

export const useStore = create<PlayerListProps>((set) => ({
  pitchers: [
    {
      name: "쿠에바스",
      imageUrl: "/images/pitcher/쿠에바스.svg",
      number: "33",
      role: "SP",
      pcode: "69032",
    },
    {
      name: "장성우",
      imageUrl: "/images/hitter/catcher/장성우.svg",
      number: "33",
      role: "C",
      pcode: "78548",
    },
    {
      name: "벤자민",
      imageUrl: "/images/pitcher/벤자민.svg",
      number: "99",
      role: "RP",
      pcode: "52043",
    },
    {
      name: "김민수",
      imageUrl: "/images/pitcher/김민수.svg",
      number: "1",
      role: "RP",
      pcode: "65048",
    },
    {
      name: "하준호",
      imageUrl: "/images/pitcher/하준호.svg",
      number: "49",
      role: "RP",
      pcode: "78517",
    },
    {
      name: "박영현",
      imageUrl: "/images/pitcher/박영현.svg",
      number: "11",
      role: "CP",
      pcode: "52060",
    },
  ],

  selectedPlayerPcode: null, // 초기 값은 null로 설정
  setSelectedPlayerPcode: (pcode) => set({ selectedPlayerPcode: pcode }), // setSelectedPlayerPcode 함수 정의
}));
