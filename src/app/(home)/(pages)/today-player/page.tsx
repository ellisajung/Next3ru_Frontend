import ColorMeaning from "@/components/chungwoo/ColorMeaning";
import TodayPlayerCon from "@/components/chungwoo/TodayPlayerCon";
import TodayPlayerHitterModal from "@/components/chungwoo/TodayPlayerHitterModal";
import TodayPlayerPitcherModal from "@/components/chungwoo/TodayPlayerPitcherModal";

const TodayPlayer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <ColorMeaning />
        </div>
        <div className="">
          <TodayPlayerCon />
        </div>
        <TodayPlayerHitterModal />
        <TodayPlayerPitcherModal />
      </div>
    </div>
  );
};

export default TodayPlayer;
