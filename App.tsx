import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./navigation/BottomTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        fallback={<ActivityIndicator size="large" />}
        onStateChange={(state) => {
          console.log('New state:', state);
        }}
      >
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}