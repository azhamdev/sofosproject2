import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import BottomNav from "./src/Navigations/BottomNav";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Stack.Navigator initialRouteName="NotVerify" 
          screenOptions={{
            headerShown: false,
        }}
        >
          <Stack.Screen name="NotVerify" component={NotVerifyScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Bottom" component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}