import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "./screens/Meals";

export type RootStackParamList = {
  Categories: undefined;
  Meals: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: "#000",
            background: "#000",
            card: "#000",
            text: "white",
            border: "white",
            notification: "white",
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
            animationDuration: 300,
          }}
        >
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Meals" component={Meals} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
