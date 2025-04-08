import { Card } from "../shadcn-ui/card";
import { IClickedMeshInfo } from "./3d-models/StadiumModel";

const MeshLabel: React.FC<IClickedMeshInfo> = ({ area_name, zone }) => {
  return (
    <Card className="rounded-xl border-none p-3 text-lg font-bold bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55 w-auto min-w-[150px] flex flex-col justify-center items-center">
      <p>{area_name}</p>
      <p>{zone && `${zone} 구역`}</p>
    </Card>
  );
};

export default MeshLabel;
