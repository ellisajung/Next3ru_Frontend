import React from "react";

interface Option {
  id: string;
  icon: any;
  name: string;
  handler: () => void;
}

interface OptionsProps {
  title: string;
  options: Option[];
}

const Options: React.FC<OptionsProps> = ({ title, options }) => {
  return (
    <div className="options">
      {/* <h1 className="options-header">{title}</h1> */}
      <div className="flex justify-center">
        {options.map((option) => (
          <div
            className="flex flex-col w-72 h-16 basis-2/6 justify-center space-y-2 items-center rounded-md border-2 border-black cursor-pointer"
            onClick={option.handler}
            key={option.id}
          >
            <div>{option.icon}</div>
            <h3>{option.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
