import { Card } from "../shadcn-ui/card";

interface ITooltipProps {
  x: number;
  y: number;
  text: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ x, y, text }) => {
  const tooltipStyle: React.CSSProperties = {
    position: "fixed",
    top: y + 10,
    left: x + 10,
    pointerEvents: "none",
    whiteSpace: "nowrap",
  };

  return <Card style={tooltipStyle}>{text}</Card>;
};

export default Tooltip;
