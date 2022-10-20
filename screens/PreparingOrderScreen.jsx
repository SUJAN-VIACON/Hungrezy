import React, { useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() =>{
    setTimeout(()=>{
        navigation.navigate('Delivery')
    },3000)
  })

  return (
    <SafeAreaView className="flex-1 bg-primary flex items-center justify-center p-4">
      <Animatable.Image
        source={require("../assets/images/delivery.png")}
        animation="slideInUp"
        iterationCount={1}
        className=" w-80 h-80"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center "
      >
        Please Wait for accepting the Order
      </Animatable.Text>

      <Progress.CircleSnail size={60} indeterminate={true} color={"white"} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
