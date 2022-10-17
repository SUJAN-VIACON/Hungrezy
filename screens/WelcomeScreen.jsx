import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SocialMediaReferences from "../components/SocialMediaReferences";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className=" flex-1">
      <Image
        source={require("../assets/images/welcome-background.jpg")}
        className="flex-1"
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.75) @ 0%", "rgba(25, 27, 47, 0.95) @ 100%"]}
        className="absolute top-0 left-0 right-0 bottom-0 rounded-lg p-2 flex justify-between px-10"
      >
        <View className="flex justify-between flex-1">
          <View className=" mt-20">
            <Text className=" text-5xl font-bold text-white">
              Welcome to
            </Text>
            <Text className=" text-5xl font-bold text-primary">
              Hungrezy
            </Text>
            <Text className=" text-base pt-2 text-white opacity-80">
              Your favourite foods delivered fast at your door.
            </Text>
          </View>

          <View className="flex space-y-5">
            <SocialMediaReferences
              title="Register with"
              color="white" 
              lineColor="white"
            />
            <TouchableOpacity
              className="flex-1"
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <LinearGradient
                colors={[
                  "rgba(255, 255, 255, 0.21)",
                  "rgba(255, 255, 255, 0.21)",
                ]}
                className="flex-1 border-white border-2 p-3 rounded-full"
              >
                <Text className="text-center text-base text-white ">
                  Start with email or phone
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white text-center py-3">
                Already have an account?{" "}
                <Text className="underline">Login</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
              <Text className="text-primary text-right pt-10 pb-5 underline text-base">
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
