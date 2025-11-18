import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer
        fallback={<ActivityIndicator size="large" />}
        onStateChange={(state) => {
          console.log('New state:', state);
        }}
      >
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
    );
}