import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import BottomNav from "./src/Navigations/BottomNav";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import DetailScreen from './src/Screens/DetailScreen'
import MekanikScreen from "./src/Screens/MekanikScreen";
import SoftwareScreen from "./src/Screens/SoftwareScreen";
import FiturScreen from "./src/Screens/FiturScreen";
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator initialRouteName="NotVerify"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NotVerify" component={NotVerifyScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Mekanik" component={MekanikScreen} />
          <Stack.Screen name="Software" component={SoftwareScreen} />
          <Stack.Screen name="Fitur" component={FiturScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}