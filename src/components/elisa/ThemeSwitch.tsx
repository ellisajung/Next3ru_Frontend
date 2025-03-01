import { Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Switch } from "../shadcn-ui/switch";
import { useTheme } from "next-themes";

interface ThemeSwitchProps {
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
}

const ThemeSwitch = ({ rotate, setRotate }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Sun
        className={`h-6 w-6 ${
          rotate && theme === "light" ? "animate-[spin_1s_ease-in-out]" : ""
        }`}
      />
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
          setRotate(true);
        }}
      />
      <Moon
        className={`h-6 w-6 ${rotate && "dark:animate-[spin_1s_ease-in-out]"}`}
      />
    </>
  );
};

export default ThemeSwitch;
