import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const SocialMediaReferences = ({
  title=null,
  titleSize = "xs",
  color = "black",
  lineWidth = null,
  lineColor = "black",
}) => {
  return (
    <View className="flex space-y-5">
      <View className="flex-row items-center space-x-3">
        <View
          className={`flex-1 border-${lineColor} ${
            lineWidth ? `border-t-${lineWidth}` : "border-t"
          }`}
        ></View>
        <Text className={`text-${color} text-${titleSize}`}>{title}</Text>
        <View
          className={`flex-1 border-${lineColor} ${
            lineWidth ? `border-t-${lineWidth}` : "border-t"
          }`}
        ></View>
      </View>
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="flex-row items-center bg-white rounded-full p-4 space-x-2 drop-shadow-lg">
          <Image
            source={require("../assets/images/facebook.png")}
            className=" h-5 w-5"
          />
          <Text>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-white rounded-full p-4 space-x-2 drop-shadow-lg">
          <Image
            source={require("../assets/images/google.png")}
            className=" h-5 w-5 rounded-full"
          />
          <Text>GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaReferences;
