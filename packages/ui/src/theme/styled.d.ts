import { } from "styled-components/native";
import { type Theme } from "./theme.types"; // Import type from above file
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}

declare module "styled-components/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}
