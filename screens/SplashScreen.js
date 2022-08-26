import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const SplashScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-primary flex items-center justify-center space-y-3">
      <View className="p-5 bg-white flex justify-center items-center rounded-3xl overflow-hidden">
        <Animatable.Image
          animation="slideInUp"
          iterationCount={1}
          source={require("../assets/images/splash-logo.png")}
          className=" w-[64px] h-[64px]"
        />
      </View>
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-4xl font-semibold leading-[50px]"
        style={{ letterSpacing: 1 }}
      >
        Hungrezy
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
