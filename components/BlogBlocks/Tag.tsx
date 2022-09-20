import React from "react";

type Props = {
  color: String;
  name: String;
};

function Tag({ color, name }: Props) {

  return (
    <span className={`text-[8px] font-bold text-${color}-800 bg-${color}-300 min-w-[10ch] text-center px-2 rounded-full`}>
      {name}
    </span>
  );
}

export default Tag;
