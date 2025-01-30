import { Rating } from "@mui/material";
import { useState } from "react";

interface SeatRatingProps {
  labelText: { [index: string]: string };
}

const SeatRating = ({ labelText }: SeatRatingProps) => {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const getLabelText = (value: number) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labelText[value]}`;
  };

  return (
    <>
      <Rating
        name="simple-controlled"
        className="dark:stroke-zinc-400"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        getLabelText={getLabelText}
      />
      {value !== null && (
        <p className="text-md text-muted-foreground">
          ({value}점) {labelText[hover !== -1 ? hover : value]}
        </p>
      )}
    </>
  );
};

export default SeatRating;
