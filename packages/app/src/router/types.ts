import type {
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  main: undefined;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type MainTabParamList = {
  home: NavigatorScreenParams<RootStackParamList>;
  community: NavigatorScreenParams<RootStackParamList>;
};

export type RootRouteProp = RouteProp<RootStackParamList>;
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
