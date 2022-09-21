import React from "react";
import { COLORS_BG } from "../../utils/colors";

type Props = {
  color: String;
  name: String;
};

function Tag({ color, name }: Props) {
  type key = keyof typeof COLORS_BG;
  const colorKey = color as key;
  const bg = COLORS_BG[colorKey];

  return (
    <span
      className={`text-[8px] font-bold ${bg} min-w-[10ch] text-center py-0.5 px-3 rounded-full capitalize max-w-[13ch]`}
    >
      {name}
    </span>
  );
}

export default Tag;
