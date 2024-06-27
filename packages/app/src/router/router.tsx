import { useMemo } from "react";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import type { MainTabParamList, RootStackParamList } from "./types";
import { HomeScreen } from "../screens/home/home";
import { CommunityScreen } from "../screens/community/community";

const MainTabsNvaigator = createBottomTabNavigator<MainTabParamList>();

const MainTabs: React.FC = () => {
  const theme = useTheme();
  return (
    <MainTabsNvaigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <MainTabsNvaigator.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
        name="home"
        component={HomeScreen}
      />
      <MainTabsNvaigator.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Community",
        }}
        name="community"
        component={CommunityScreen}
      />
    </MainTabsNvaigator.Navigator>
  );
};

const RootNavigator =
  Platform.OS === "web"
    ? createStackNavigator<RootStackParamList>()
    : createNativeStackNavigator<RootStackParamList>();

const Root: React.FC = () => (
  <RootNavigator.Navigator
    screenOptions={{ headerShown: false, animationEnabled: true }}
  >
    <RootNavigator.Group>
      <RootNavigator.Screen name="main" component={MainTabs} />
    </RootNavigator.Group>
  </RootNavigator.Navigator>
);

const Router: React.FC = () => {
  const theme = useTheme();
  const baseTheme = useMemo(() => DefaultTheme, []);
  const navigationTheme = useMemo(
    () => ({
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        background: theme.colors.shade,
        card: theme.colors.background,
        text: theme.colors.text,
      },
    }),
    [baseTheme, theme],
  );
  return (
    <NavigationContainer theme={navigationTheme}>
      <Root />
    </NavigationContainer>
  );
};

export { Router };
