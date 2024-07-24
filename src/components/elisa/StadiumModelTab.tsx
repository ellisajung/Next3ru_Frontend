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

const StadiumModelTab = () => {
  return (
    <Card id="elisa">
      <CardHeader className="mb-10">
        <CardTitle>3D 좌석안내도</CardTitle>
        <CardDescription>
          구역을 선택하여 좌석 정보를 확인해 보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-1">
          <Card className="col-span-2">{/* 3d medel */}</Card>
          <div className="col-span-1 grid grid-rows-2 gap-1">
            <Card className="row-span-1 flex justify-center items-center">
              <Image
                src="/images/elisa/seatmap.png"
                alt="baseball-field-icon"
                width={300}
                height={300}
                className=""
              />
            </Card>
            <Card className="row-span-1">
              <p className="text-sm">구역 선택</p>
              <div className="h-full flex justify-center items-center">
                <AreaNameSwiper />
              </div>
            </Card>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StadiumModelTab;
