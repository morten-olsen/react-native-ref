import "./utils/setup/setup";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, light } from "@react-ref/ui";
import { Router } from "./router/router";
import styled from "styled-components/native";
import { Platform } from "react-native";

const queryClient = new QueryClient();

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Provider theme={light}>
            <StatusBar style="auto" />
            <Router />
          </Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

export { App };
