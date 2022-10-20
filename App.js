import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import BasketScreen from "./screens/BasketScreen";
import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import RestaurantScreen from "./screens/RestaurantScreen";
import { NavigationContainer } from '@react-navigation/native';
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Provider } from "react-redux";
import { store } from "./store";


export default function App() {
  const Stack = createSharedElementStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="PreparingOrderScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetScreen"
              component={PasswordResetScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Restaurant" component={RestaurantScreen}
              sharedElements={(route, otherRoute, showing) => {
                const { id } = route.params;
                return [`item.${id}.photo`];
              }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
