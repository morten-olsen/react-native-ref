import React from "react";
import { icons } from "feather-icons";
import { useTheme } from "styled-components/native";
import { type Theme } from "../../../theme/theme";

type IconNames = keyof typeof icons;
interface IconProps {
  size?: number;
  color?: keyof Theme["colors"];
  name: IconNames;
}

const Icon = ({ size = 24, color, name }: IconProps) => {
  const theme = useTheme();
  return (
    <svg
      dangerouslySetInnerHTML={{
        __html: icons[name].toSvg({
          color: color ? theme.colors[color] : undefined,
        }),
      }}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color ? theme.colors[color] : undefined}
    />
  );
};

export type { IconNames };
export { Icon };
