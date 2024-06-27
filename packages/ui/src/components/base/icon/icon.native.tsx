import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { type Theme } from "../../../theme/theme";

type IconNames = keyof typeof Feather.glyphMap;
interface IconProps {
  size?: number;
  color?: keyof Theme["colors"];
  name: IconNames;
}

const Icon = ({ size, color, name }: IconProps) => {
  const theme = useTheme();
  return (
    <Feather
      name={name}
      color={color ? theme.colors[color] : theme.colors.icon}
      size={size ?? theme.sizes.icons}
    />
  );
};

export type { IconNames };
export { Icon };
