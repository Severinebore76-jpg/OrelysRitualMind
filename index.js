import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import App from "./App";

// Register the app both ways to ensure compatibility
AppRegistry.registerComponent("main", () => App);
registerRootComponent(App);
