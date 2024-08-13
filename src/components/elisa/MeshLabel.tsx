import { Card } from "../shadcn-ui/card";
import { TClickedMeshInfo } from "./StadiumModel";

const MeshLabel: React.FC<TClickedMeshInfo> = ({ area_name, zone }) => {
  return (
    <Card className="border-none p-3 w-28 text-lg font-bold bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55 flex justify-center items-center">
      {area_name}
      <br />
      {zone}번 구역
    </Card>
  );
};

export default MeshLabel;
