import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import Image from "next/image";
import AreaNameSwiper from "./AreaNameSwiper";
import Stadium from "./Stadium";
import ViewPicSwiper from "./ViewPicSwiper";

const StadiumModelTab = () => {
  return (
    <Card id="elisa">
      <CardHeader className="mb-10">
        <CardTitle>3D 좌석안내도</CardTitle>
        <CardDescription className="text-md">
          구역을 선택하여 좌석 정보를 확인해 보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          <Card className="col-span-3">
            <Stadium />
          </Card>
          <div className="col-span-1 flex flex-col">
            <Card className="grow flex justify-center items-center">
              <Image
                src="/images/elisa/seatmap.png"
                alt="baseball-field-icon"
                width={500}
                height={500}
                className=""
              />
            </Card>
            <span className="grow-0 text-lg font-semibold p-1 mt-4">
              구역 선택
            </span>
            <Card className="grow flex justify-center">
              <AreaNameSwiper />
            </Card>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StadiumModelTab;
